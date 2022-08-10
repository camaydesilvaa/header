import * as React from 'react';
import './App.css';
import { useState } from "react"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ActivityBar from './components/ActivityBar';
import Add from './components/Add';
import { createTheme, ThemeProvider } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function App() {
  const [mode,setMode] = useState("light");

  const darkTheme = createTheme ({
      palette: {
          mode: mode,
      }
  });

  return (
     
        <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"}>
            <Header/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar/>
                <ActivityBar/>
            </Stack>
            <Add/>
        </Box>
        </ThemeProvider>
  );
}

export default App;
