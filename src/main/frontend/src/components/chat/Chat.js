import React from 'react'
import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/system';
import { useSocket } from "../../hooks/useSocket";
import { useStomp } from "../../hooks/useStomp";
import { ChatInput } from '../chat/ChatInput';

export const Chat = props => {
  
  let url = decodeURI("/connect")
  const socket = useSocket(url)

  const [messages, setMessages] = useState([])
  const [subscriptionURI, setSubscriptionURI] = useState('/topic/general')
  const [image, setImage] = useState(null)
  const stompClient = useStomp(socket, subscriptionURI, setMessages)

  useEffect(() => {
    setSubscriptionURI("/topic/"+props.chatroom.trim())
  }, [props.chatroom])

  function send(e) {
    var data
    if (localStorage.getItem("_name") !== ""){
      data = {
        name: localStorage.getItem("_name"),
        message: e.target.value,
        image64: image,
        id: localStorage.getItem("_id"),
      }
    } else {
        alert("Please enter your username.")
    }

    if (data.message !== "" || data.image64 !== ""){
      stompClient.send("/chat/send/"+props.chatroom.trim(), {}, JSON.stringify(data))
      e.preventDefault()
      e.target.value = ''
      setImage(null)
    }
  }

  if (messages.length === 50) {
    setMessages([
        ...messages.slice(0, 0),
        ...messages.slice(1, messages.length)
    ])
  }

  return (

    <div style={{
      height: "100%", 
      display: "flex",
      flexDirection: "column-reverse", 
      marginTop: "2.5em",
      overflowX: "scroll",
    }}>

      <ThemeProvider theme={{theme}} >
      <ChatInput send={send} setImage={setImage} />
        <div stlye={{ display: "flex", flexDirection: "column", height:"auto" }} >
          {messages}
        </div>
      </ThemeProvider >
    </div>

  )
}

const theme = createTheme({
  palette: {
      primary: {
        main: '#222831',
        light: '#fff'
      },
      secondary: {
        main: '#00ADB5',
        dark: '#495370'
      },
  },
});
