import React, { useRef } from 'react'
import { useState, useEffect } from "react";
import Stomp from 'stompjs';
import { Message } from "../components/chat/Message";

export const useStomp = (socket, subscriptionURI, setMessages) => {

    const [stompClient] = useState(Stomp.over(socket))
    const prevSubscription = useRef(subscriptionURI)

    useEffect(() => {
        if (stompClient.connected) return
        stompClient.debug = null
        stompClient.connect({}, () => subscribe(stompClient, subscriptionURI, setMessages))
        prevSubscription.current = subscriptionURI
    });

    useEffect(() => {
        window.addEventListener("beforeunload", () => {
            stompClient.disconnect()
        });
    });

    useEffect(() => {
        if (stompClient.connected) {
            setMessages([])
            stompClient.unsubscribe(prevSubscription.current)
            subscribe(stompClient, subscriptionURI, setMessages)
            prevSubscription.current = subscriptionURI
        }
    }, [subscriptionURI, setMessages, stompClient])

    return stompClient;
}

export default useStomp;

function subscribe(stompClient, subscriptionURI, setMessages) {
    let numMessages = 0;
    stompClient.subscribe(subscriptionURI, (data) => {
        var message = JSON.parse(data.body);
        if (message.id === localStorage.getItem("_id")) {
            setMessages(oldArray => [...oldArray, <Message image={message.image64} key={++numMessages} text={message.message} name={message.name} direction={"right"} />])
        }
        else
            setMessages(oldArray => [...oldArray, <Message image={message.image64} key={++numMessages} text={message.message} name={message.name} direction={"left"} /> 
        ])
    }, { id: subscriptionURI });
    setMessages(oldArray => [...oldArray, <Message key={++numMessages} text={"Connected to"+subscriptionURI.replaceAll("/", " ")+"."} name={"Server"} direction={"server"} />])
}