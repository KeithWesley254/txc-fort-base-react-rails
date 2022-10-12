import React, { useState } from 'react';
import { Grid, Box, FormControl, FormHelperText, TextField, Snackbar, Alert } from '@mui/material';

const SignUpForm = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          window.location.reload()
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
   <>
      <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>
        <div>
          <p style={{fontWeight: "bolder", fontSize: 20}}>Sign Up</p>
        </div>
        <form  onSubmit={handleSubmit}>
          <Box>
            <Grid container spacing={2} columns={12}>
               <Grid item xs={12} md={6}>
              <br />
              <FormControl>
                <TextField 
                type="email"
                variant="outlined"
                label="Email"
                id="email"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <FormHelperText id="my-helper-text">name@example.com</FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField 
                type="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <FormHelperText id="my-helper-text">min. 8 characters</FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField 
                type="password"
                label="Password Confirmation"
                id="passwordConfirmation"
                autoComplete="current-password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <FormHelperText id="my-helper-text">Please Confirm Your Password</FormHelperText>
              </FormControl>
               </Grid>
            </Grid>
            <div>
              <div>
                <FormControl>
                  <button style={{
                    fontSize: 14,
                    backgroundColor: "#4e60ff",
                    width: 255,
                    height: 40,
                    color: "#fff",
                    borderRadius: 10,
                    cursor: "pointer",
                    border: "none",
                  }}
                  type='submit'
                  >
                    {isLoading ? "Loading..." : "Sign Up"}
                  </button>
                </FormControl>
                <div>
                  {errors.map((err) => (
                  <>
                      <Alert severity="error" sx={{ width: '100%' }}>
                        {err}
                      </Alert>
                  </>
                  ))}
                </div>
              </div>
            </div>
            </Box>
          </form>
      </Box>
   </>
  )
}

export default SignUpForm