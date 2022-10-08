import { Box, FormControl, FormHelperText, TextField } from '@mui/material';
import React, { useState } from 'react'

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <Box>
        <main>
          <p style={{fontWeight: "bolder", fontSize: 60}}>Login</p>
          <p style={{fontWeight: "bold", color: "#565765", fontSize: 14}}>Sign in with the data you entered during your registration</p>
          <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>
            <div>
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
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
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
                <FormHelperText id="my-helper-text">Passwords are strongly encrypted.</FormHelperText>
              </FormControl>
            </div>
          </Box>
          
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
                Login
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
        </main>
      </Box>
    </>
  )
}

export default LoginForm