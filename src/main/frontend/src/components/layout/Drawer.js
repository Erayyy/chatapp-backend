import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from "@mui/material/TextField"

const drawerWidth = 240;

export const DrawerSides = props => {

  async function handleClick(text) {
    props.onChange(text.substring(0, text.length - 2))
    await new Promise(r => setTimeout(r, 100))
    closeDrawer()
  }

  function closeDrawer() {
    props.setOpen(false)
  }

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {['General 🌎', 'Switzerland 🌄', 'Memes 🤣'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ color: "#fff" }}>
            <ListItemButton onClick={() => handleClick(text.toLowerCase())} >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  function saveName(e) {
    props.setName(e.target.value)
  }

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
    <ThemeProvider theme={theme}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: 1 }}
      >
        <Drawer
          anchor="left"
          open={props.open}
          onClose={closeDrawer}
          variant="temporary"
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "secondary.dark", overflowX: "hidden" },
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            onChange={e => saveName(e)}
            label="Username"
            color="secondary"
            margin="dense"
            variant="standard"
            value={props.name}
            sx={{ width: { sm: drawerWidth - 20 }, marginLeft: 1 }}
            InputLabelProps={{ className: "textField__label" }}
            InputProps={{ className: "textField__label" }}
          />
          {drawer}
        </Drawer>



        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "secondary.dark", overflowX: "hidden" }
          }}
          open
        >

          <br />
          <br />
          <br />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            onChange={e => saveName(e)}
            label="Username"
            color="secondary"
            margin="dense"
            variant="standard"
            value={props.name}
            sx={{ width: { sm: drawerWidth - 20 }, marginLeft: 1 }}
            InputLabelProps={{ className: "textField__label" }}
            InputProps={{ className: "textField__label" }}
          />
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  )
}

export default DrawerSides;