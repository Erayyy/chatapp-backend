import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Chat } from '../chat/Chat';
import { ToggleButton } from "./ToggleButton";
import { useWindowDimensions } from "../../hooks/useWindowDimensions"

const drawerWidth = 240;

function ChatSurface(props) {

  const width = useWindowDimensions().width
  const handleDrawerToggle = () => {
    props.setOpen(!props.open);
  };
  
  const theme = createTheme({
    palette: {
        primary: {
          main: '#222831',
          dark: '0F0E0E',
          light: '#fff'
        },
        secondary: {
          main: '#00ADB5',
          dark: '#495370'
        },
    },
  });

  return (
    <ThemeProvider theme={theme} >
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              bgcolor: "secondary.dark",
              zIndex: 10
            }}
          >

          <Toolbar sx={{zIndex: 3}}>
            { width < 600 ?
              <ToggleButton 
              onClick={handleDrawerToggle}
              visible={props.open}
            /> : null }
            
            <Typography variant="h6" noWrap component="div">
              Chatapp
            </Typography>
          </Toolbar>
        </AppBar>

      <Box 
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`}, backgroundColor: "primary.main" }}
      >
        <Chat chatroom={props.currentChat} />
      </Box>
    </ThemeProvider>
  );
}

export default ChatSurface;
