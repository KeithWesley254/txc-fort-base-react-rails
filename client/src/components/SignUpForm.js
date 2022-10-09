import React, { useState } from 'react';
import { Box, FormControl, FormHelperText, TextField } from '@mui/material';

const SignUpForm = ({ onLogin }) => {

  const [full_name, setFullName] = useState("");
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
        full_name,
        email,
        password,
        password_confirmation: passwordConfirmation 
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
   <>
      <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>
        <div>
          <p style={{fontWeight: "bolder", fontSize: 60}}>Sign Up</p>
        </div>
            <div>
            <FormControl>
                <TextField 
                type="text"
                variant="outlined"
                label="Full Name"
                id="full_name"
                autoComplete="off"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)} 
                />
                <FormHelperText id="my-helper-text">Please Enter Your Full Name</FormHelperText>
              </FormControl>
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
              <br />
              <br />
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
                    border: "none"
                  }}
                  onClick = {handleSubmit}
                  >
                    {isLoading ? "Loading..." : "Sign Up"}
                  </button>
                </FormControl>
              </div>
              <div>
                <FormControl>
                  {errors.map((err) => (
                    <>
                    <div key={err} style={{
                      color: "red",
                      backgroundColor: "mistyrose",
                      borderRadius: 6,
                      padding: 6,
                      alignItems: "center",
                      gap: 8,
                      margin: 8
                    }}>
                      <span>!</span>
                      <p>{err}</p>
                    </div>
                    </>
                  ))}
                </FormControl>
              </div>
            </div>
      </Box>
   </>
  )
}

export default SignUpForm