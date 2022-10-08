import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { color } from '@mui/system';
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
        r.json().then((user) => onLogin(user));
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
          <p style={{fontWeight: "bold", fontSize: 14}}>Sign in with the data you entered during your registration</p>
          <div>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input 
            type="email"
            id="email"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input 
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText id="my-helper-text">Passwords are strongly encrypted.</FormHelperText>
          </FormControl>
          </div>
          <br />
          <br />
          <div>
            <FormControl>
              <button style={{
                fontSize: 14,
                backgroundColor: "#4e60ff",
                width: 240,
                height: 40,
                color: "#fff",
                borderRadius: 10,
              }}>
                Login
              </button>
            </FormControl>
          </div>
        </main>
      </Box>
    </>
  )
}

export default LoginForm