import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Box, Container } from '@mui/material';
import { Grid, Paper, ThemeProvider, createTheme } from '@mui/material';
import ConversationList from './components/ConversationList';
import ChatArea from './components/ChatArea';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D5193',
      light: '#D3E7FF',
    },
    success: {
      main: '#43C559',
      contrastText: "#ffffff"
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {

  return (
    <>
      <Provider store={store}>

        <ThemeProvider theme={theme}>
          <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
            <Navbar />

            <Container maxWidth="lg" sx={{ py: 10 }}>
              <Grid container sx={{ height: 'max-content' }}>
                <Grid item xs={12} sm={4} md={3} sx={{ mb: { xs: 2, sm: 0 } }}>
                  <Paper sx={{ height: "100%", border: 1, borderRight: 0, borderColor: 'divider', borderRadius: { xs: "10px 10px 10px 10px", sm: '10px 0px 0px 10px' } }}>
                    <ConversationList />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <ChatArea />
                </Grid>
              </Grid>
            </Container>

            <Footer />
          </Box>
        </ThemeProvider >
      </Provider>

    </>
  )
}

export default App
