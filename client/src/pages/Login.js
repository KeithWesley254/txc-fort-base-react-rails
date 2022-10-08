import React, { useEffect, useState } from 'react'
import { Grid, Box, Divider, Button, Card, CardContent, Typography, CardActions } from '@mui/material';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { Container } from '@mui/system';

const Login = ({ onLogin }) => {

  const [showLogin, setShowLogin] = useState(true);
  const [loginSlides, setLoginSlides] = useState([]);

  useEffect(() => {
    fetch("/api/login_page_slides")
    .then(r => r.json())
    .then(data => setLoginSlides(data))
  }, []);

  const myCards = loginSlides.map((slide) => {
    return (
        <>
        <Card sx={{ minWidth: 275, alignItems: "center", textAlign: "center"}}>
          <CardContent>
            <img style={{height: 300, maxWidth: "auto"}} src={slide.image_url} alt="slideImage" />
            <h4>{slide.title}</h4>
            <p>{slide.description}</p>
            </CardContent>
          </Card>
        </>
    )})

  return (
    <>
      <main>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>

              <div className='logoLogin'>
                <p style={{fontWeight: "bolder", fontSize: 14}}>
                  TXC
                  <br />
                  <span style={{ color: "#4e60ff" }}>FortBase</span>
                </p>
              </div>

              {showLogin ? (
                <>
                <div className='loginForm'>
                  <LoginForm onLogin={onLogin} />
                </div>
                <br />
                <br />
                <br />
                <div className='loginForm'>
                  <p>
                    Don't have an account? &nbsp;
                    <Button sx={{bgcolor: "transparent", color: "#4e60ff", fontFamily: "Nunito", fontWeight: "bold", fontSize: 14, textTransform: "none" }} onClick={() => setShowLogin(false)}>
                      Sign Up
                    </Button>
                  </p>
                </div>
                </>
              ): (
                <>
                  <SignUpForm onLogin={onLogin} />
                  <Divider />
                  <p>
                    Already have an account? &nbsp;
                    <Button sx={{bgcolor: "transparent", color: "#4e60ff", fontFamily: "Nunito", fontWeight: "bold", fontSize: 14, textTransform: "none" }} onClick={() => setShowLogin(true)}>
                      Log In
                    </Button>
                  </p>
                </>
              )}

            </Grid>
            <Grid item xs={8} >
              <>
                <div style={{backgroundColor: "#4e60ff", position: "relative", width: "100%", height: "100vh" }}>
                  <Container>
                  <Box sx={{ p: 2, display: "flex", overflowX: "auto" }}>
                    {myCards}
                  </Box>
                  </Container>
                </div>
              </>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  )
}

export default Login