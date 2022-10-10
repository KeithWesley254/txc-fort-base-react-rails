import { Button, Box, TextField } from '@mui/material'
import React from 'react'

const AboutUsForm = () => {
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
        autoComplete="off"
        >
            <div style={{textAlign: "center"}}>
             <TextField
              label="Full Name"
              size="large"
              fullWidth
            />
            <br />
            <TextField
              label="Professional Email"
              size="large"
              fullWidth
            />
            <br />
            <TextField
              label="Message"
              size="large"
              multiline
              rows={4}
              type="text"
              fullWidth
            />

        </div>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontFamily: "nunito", fontWeight: "bolder"
            }}>
            <Button sx={{bgcolor: "#4e60ff", color: "#fff", width: 200}}>
                Submit
            </Button>
        </div>
        </Box>
    </>
  )
}

export default AboutUsForm