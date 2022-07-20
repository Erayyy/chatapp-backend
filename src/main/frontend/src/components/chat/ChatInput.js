import { React, useRef } from 'react'
import { TextField, InputAdornment, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';
import { ImageUpload } from './ImageUpload';

export const ChatInput = (props) => {

    const imageRef = useRef()

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

    const send = e => {
        props.send(e)
        imageRef.current("")
    }

  return (
    <ThemeProvider theme={{theme}}>
        <Box sx={{ display: 'flex', maxHeight: "13rem", marginBottom: "2em" }} bgcolor="secondary.dark">
        <TextField
            multiline 
            variant={"filled"} 
            label="Your message:" 
            rows={3} 
            InputLabelProps={{className: "textField__label"}} 
            onKeyDown={ (e) => { if (e.key === "Enter") send(e)}} 
            sx={{
               width: "100%", height: "100%",
               input: { color: "green" }
            }}
            InputProps={{className: "textField__label",
                    endAdornment: (
                    <InputAdornment
                        position={"end"}
                        sx={{
                            height: "100%",
                            width: "auto"
                        }}
                    >    
                        <div style={{marginTop: "0px", display: "flex", flexDirection: "column"}} >
                            <ImageUpload setImage={props.setImage} imageRef={imageRef} />
                        </div>
                    </InputAdornment>
                )
            }} 
        />
        </Box> 
    </ThemeProvider>
    )
}

