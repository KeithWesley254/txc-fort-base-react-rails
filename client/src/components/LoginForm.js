import { Box, FormControl, FormHelperText, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
        <form onSubmit = {handleSubmit}>
          <p style={{fontWeight: "bolder", fontSize: 60}}>Login</p>
          <p style={{fontWeight: "bold", color: "#545563", fontSize: 14}}>Sign in with the data you entered during your registration</p>
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
              type="submit"
              >
                Login
              </button>
            </FormControl>
            
          </div>
          
          <div>
            <FormControl>
            {errors.map((err) => (
            <>
              <div key={err}>
               {alert(err)}
              </div>
            </>
            ))}
            </FormControl>
          </div>
          </form>
        </main>
      </Box>
    </>
  )
}

export default LoginForm