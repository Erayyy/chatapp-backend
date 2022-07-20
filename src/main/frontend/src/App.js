import './styles/App.css';
import "./styles/entrance.css";
import * as React from 'react'
import ChatSurface from './components/layout/ChatSurface';
import DrawerSides from './components/layout/Drawer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState } from 'react'
import Modal from "./components/Modal";
import { useEffect } from 'react';
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {

  const [chat, setChat] = useState("general")
  const [isNewUser, setIsNewUser] = useState()
  const [name, setName] = useLocalStorage("_name", "User")
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateChat = text => {
    setChat(text)
  }

  useEffect(() => {
    if (localStorage.getItem("_name") != null 
      && localStorage.getItem("_id") != null) setIsNewUser(false)
    else setIsNewUser(true)
  }, [])

  const theme = createTheme({
    palette: {
        primary: {
          main: '#222831',
          dark: '#0F0E0E',
          light: '#fff'
        },
        secondary: {
          main: '#00ADB5',
          dark: '#495370'
        },
    },
  });

  function blur() {
    const style = { display: 'flex', backgroundColor: "primary.main", color: "primary.light", flexDirection: "row", height: "100%" }
    if (isNewUser) {
        style.filter = "brightness(56%) blur(5px)"
        style.backdropFilter = "brightness(56%) blur(20px)"
        style.pointerEvents = "none"
      }
    return style
  }

  return (
    <div style={{ height: "100%", }} >
        <ThemeProvider theme={{theme}} >
          <Box style={blur()}>
            <DrawerSides open={mobileOpen} setOpen={setMobileOpen} onChange={updateChat} name={name} setName={setName} />
            <ChatSurface open={mobileOpen} setOpen={setMobileOpen} currentChat={chat} isNew={isNewUser} />
          </Box>
          { isNewUser ? <Modal setIsNewUser={setIsNewUser} setName={setName} /> : null}
        </ThemeProvider>
      </div>
  );
}

export default App;
