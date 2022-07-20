import { useState, useEffect } from "react";
import SockJS from 'sockjs-client';

export const useSocket = url=> {

    const [socket, setSocket] = useState(new SockJS(url));

    useEffect(() => {
        setSocket(new SockJS(url))
    }, [url])

    return socket;
}

export default useSocket;
