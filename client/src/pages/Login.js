import React, { useEffect, useState } from 'react'
import {  CardActionArea, Grid, Box, Divider, Button, Card, CardContent, Typography, CardActions, CardMedia } from '@mui/material';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { Container } from '@mui/system';

const Login = ({ onLogin }) => {

  const [showLogin, setShowLogin] = useState(true);
  const [loginSlides, setLoginSlides] = useState([]);

  useEffect(() => {
    fetch("/api/login_page_slides")
    .then(r => r.json())
    .then(data => {
        setLoginSlides(data)
    })
  }, []);

 

  const myCards = loginSlides.map((slide) => {
    return (
      <>
      <Card sx={{ minWidth: 620, alignItems: "center", textAlign: "center", borderRadius: 5}}>
        <CardActionArea>
          <CardMedia 
          component="img"
          height="500"
          image={slide.image_url}
          alt="green iguana"
          sx={{borderRadius: 5}}
          />
          <CardContent>
            <Typography sx={{textAlign: "start"}} gutterBottom variant="h5" component="div">
              {slide.title}
            </Typography>
            <Typography sx={{textAlign: "start"}} variant="body2" color="#545563">
              {slide.summary}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
      </>
      )
    })

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
                  <Box sx={{ p: 2, display: "flex", overflowX: "auto", flexDirection: 'row' }}>
                    {myCards}
                  </Box>
                  <div style={{ flexWrap: "wrap", fontSize: 30, color: "#fff", textAlign: "center"}}>
                    <p>
                      Come connect with the Heroes that defend our Beautiful Nation
                    </p>
                  </div>
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