import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useWindowRatio } from "../hooks/useWindowRatio";

export const Modal = props => {

  const [showList, setShowList] = useState(false)
  let defaultName = localStorage.getItem("_name");
  if (defaultName == null) defaultName = "User"
  const windowRatio = useWindowRatio()

  const placement = () => {
    var isHorizontal = windowRatio >= 1.1
    const style = {
      left: "10%",
      right: "10%"
    }
    if (isHorizontal) {
      style.left = "30%"
      style.right = "30%"
    }
    return style
  }

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

  function createUserID() {
    if (localStorage.getItem("_id") != null) return
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 255; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    localStorage.setItem("_id", result)
    props.setIsNewUser(false)
  }

  const explanationStyle = {
    fontSize: "smaller",
    padding: "1rem",
  }

  const buttonStyle = {
    textDecoration: "underline",
    fontSize: "90%",
    padding: 0,
    border: "none",
    background: "none",
    color: "#fff"
  }

  const shoveList = () => {
    setShowList(true)
  }

  const cookiesList = (
    <div className="shove">
      <div className="cookie-list-element">
        <h3 style={{ margin: "0.25em auto auto auto" }}>_name</h3>
        <p className="explanation-text">
          Stores the username you lastly typed in. This will be set automatically the next time you visit this page.
          By default it's set to "User".
        </p>
      </div>
      <br />
      <div className="cookie-list-element">
        <h3 style={{ margin: "0.25em auto auto auto" }}>_id</h3>
        <p className="explanation-text">
          Stores the individual id you have. It's used to determine the sender of a message in an abstract way so that
          the alignment of the messages are on the right position.
        </p>
      </div>
      <Button variant="contained" disableElevation sx={{ marginRight: "0.5rem", borderRadius: "0px", marginLeft: "0px", marginTop: "1rem" }} onClick={() => setShowList(false)} >Got it</Button>
    </div>
  )

  const cookiesConsent = (
    <>
      <h2 style={{ alignItems: "flex-start", margin: "1rem" }}> We value your privacy </h2>
      <p style={explanationStyle} >
        We use strictly necessary cookies so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.
        <br />
        <br />
        <button style={buttonStyle} onClick={shoveList}> See list of mandatory cookies </button>
      </p>
      <br />
      <div>
        <Button variant="contained" disableElevation sx={{ marginRight: "0.5rem", borderRadius: "0px", marginLeft: "1rem", marginBottom: "1rem" }} onClick={() => createUserID()} >Accept</Button>
      </div>
    </>
  )

  return (
    <div className='scale-in-center' style={placement()} >
      <ThemeProvider theme={theme} >
        {showList ? cookiesList : cookiesConsent}
      </ThemeProvider>
    </div>
  )
}

export default Modal;