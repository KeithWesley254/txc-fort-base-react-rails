import React, { useEffect, useState } from 'react'
import {  CardActionArea, Grid, Box, Button, Card, CardContent, Typography, CardMedia } from '@mui/material';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

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
      <Card key={slide.id} sx={{ mr: 3, ml: 3, minWidth: 640, alignItems: "center", textAlign: "center", borderRadius: 5}}>
        <CardActionArea>
          <CardMedia 
          component="img"
          height="400"
          image={slide?.image_url}
          alt={slide?.title}
          sx={{borderRadius: 10, p: 3}}
          />
          <CardContent>
            <Typography sx={{textAlign: "start"}} gutterBottom variant="h5" component="div">
              {slide?.title}
            </Typography>
            <Typography sx={{textAlign: "start"}} variant="body2" color="#545563">
              {slide?.summary}
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
        <Box >
          <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={6}>

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
                <div className='loginForm'>
                  <SignUpForm onLogin={onLogin} />
                </div>
               
                <div className='loginForm'>
                  <p>
                    Already have an account? &nbsp;
                    <Button sx={{bgcolor: "transparent", color: "#4e60ff", fontFamily: "Nunito", fontWeight: "bold", fontSize: 14, textTransform: "none" }} onClick={() => setShowLogin(true)}>
                      Log In
                    </Button>
                  </p>
                </div>
                </>
              )}

            </Grid>
            <Grid item xs={4} sm={8} md={6}>
              <>
              <div style={{ backgroundColor: "#4e60ff", position: "relative", width: "100%", height: "100vh" }}>
              <div className='heroScroll' style={{ overflowX: "auto" }}>
                  <Box sx={{p: 2, display: "flex", display: "inline-flex", flexDirection: 'row', }}>
                    {myCards}
                  </Box>
                </div>
                <div style={{ flexWrap: "wrap", fontSize: 30, color: "#fff", textAlign: "center"}}>
                    <p>
                      Come connect with the Heroes that defend our Beautiful Nation
                    </p>
                  </div>
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