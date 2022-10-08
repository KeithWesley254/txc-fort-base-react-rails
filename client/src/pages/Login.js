import React, { useState } from 'react'
import { Grid, Box, Divider, Button } from '@mui/material';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const Login = ({ onLogin, onShowCase }) => {

  const [showLogin, setShowLogin] = useState(true);

  console.log(onShowCase)

  return (
    <>
      <main>
        <Box>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>

              <p style={{fontWeight: "bolder", fontSize: 14}}>
                TXC
                <br />
                <span style={{ color: "#4e60ff" }}>FortBase</span>
              </p>

              {showLogin ? (
                <>
                <LoginForm onLogin={onLogin} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                  Don't have an account? &nbsp;
                  <Button sx={{bgcolor: "transparent", color: "#4e60ff", fontFamily: "Nunito", fontWeight: "bold", fontSize: 14, textTransform: "none" }} onClick={() => setShowLogin(false)}>
                    Sign Up
                  </Button>
                </p>
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
            <Grid item xs={8}>
              <h3>Content</h3>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  )
}

export default Login