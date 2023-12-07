import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App'
import './index.css'
import { AuthProvider } from './context/authContext';

// Custom Dark Theme values
const darkTheme = createTheme({
  palette: {
      primary: {
        main: '#F2A2E8',
      },
      secondary: {
        main: '#fff',
      },
      background: '#11153A',
      text: {
        primary: '#fff',
        secondary: '#D3D3D3',
      },
},
  typography: {
    fontFamily: [
      'Source Sans Pro'
    ],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AuthProvider>
      <App/>
    </AuthProvider>
  </ThemeProvider>,
);