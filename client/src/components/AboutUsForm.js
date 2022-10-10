import { Button, Box, TextField, FormControl } from '@mui/material'
import React, { useState } from 'react'

const AboutUsForm = () => {
  const [full_name, setFullName] = useState('');
  const [professional_email, setProfEmail] = useState('');
  const [their_message, setTheirMessage] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    fetch(`/api/client_messages`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ full_name, professional_email, their_message })
    })
    .then(r => r.json())
    
    alert("Message Received!")
  }

  return (
    <>
        <div style={{textAlign: "center", fontSize: 14, fontWeight: "bold"}}>
            <p>Leave Us A Message</p>
        </div>
        <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
        >
            <div style={{textAlign: "center"}}>
             <TextField
              label="Full Name"
              size="large"
              fullWidth
              onChange={(e) => setFullName(e.target.value)} 
            />
            <br />
            <TextField
              label="Professional Email"
              size="large"
              fullWidth
              onChange={(e) => setProfEmail(e.target.value)}
            />
            <br />
            <TextField
              label="Message"
              size="large"
              multiline
              rows={4}
              type="text"
              fullWidth
              onChange={(e) => setTheirMessage(e.target.value)}
            />

        </div>
        <div className='aboutBtn' style={{
            display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontFamily: "nunito", fontWeight: "bolder"
            }}>
            <FormControl>
              <button style={{
                fontSize: 14,
                backgroundColor: "#4e60ff",
                width: 200,
                height: 40,
                color: "#fff",
                borderRadius: 10,
                cursor: "pointer",
                border: "none"
              }}
              >
                Submit
              </button>
            </FormControl>
        </div>
        </Box>
    </>
  )
}

export default AboutUsForm