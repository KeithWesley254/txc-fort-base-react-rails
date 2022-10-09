import React, { useEffect, useState } from 'react';
import {Grid, Box, CardMedia, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography} from '@mui/material';
import Card from '@mui/material/Card';


const UserProfile = ({user}) => {

  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    user_id: '',
    gender: '',
    age: '',
    bio: '',
    interests: '',
    image_upload: '',
    favourite_military_branch: ''
  });

  function handleSubmit(e){
    e.preventDefault();
    fetch('/api/user_profiles',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        setUserData(data)
    })
    alert("Profile Created!")
  }

  function handleUpdatePlayer() {
    fetch(`/api/user_profiles/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: formData.full_name,
      email: formData.email,
      user_id: formData.user_id,
      gender: formData.gender,
      age: formData.age,
      bio: formData.bio,
      interests: formData.interests,
      image_upload: formData.image_upload,
      favourite_military_branch: formData.favourite_military_branch
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => {
      setUserData(updatedItem)
    });
    alert("Profile Updated!")
  }

  function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
  }

  console.log(formData)
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6} sx={{textAlign: "center"}}>

            {/* DETAILS SECTION */}

            <br />
          <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box sx={{ml: 5}}>
                  <Card sx={{ maxWidth: 345}}>
                      <CardMedia
                        component="img"
                        height="230"
                        image={user?.image_upload}
                        alt={user?.full_name}
                        sx={{width: "auto"}}
                      />
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Full Name
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.full_name}
                  </Typography>
                </Box>
                <br />
                <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Email Address
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.email}
                  </Typography>
                </Box>
                <br />
                <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Gender
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.gender}
                  </Typography>
                </Box>                        
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                      Bio
                    </Typography>
                    <Typography variant="body2" component="h2">
                      {userData?.bio}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Age
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.age}
                  </Typography>
                </Box>      
              </Grid>
              <Grid item xs={6} md={6}>
              <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Interests
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.interests}
                  </Typography>
                </Box>      
              </Grid>
            </Grid>
          </Grid>
          <br />

          {/* POSTING SECTION */}

          <Grid item xs={12} md={6} >
            <Box sx={{ textAlign: "center"}}>
              <Grid container spacing={2} columns={6}>
                <Grid item xs={6} md={3}>
                  <br />
                  <Box sx={{ml: 5}}>
                  <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                      component="img"
                      height="230"
                      image={user?.image_upload}
                      alt={user?.full_name}
                      sx={{width: "auto"}}
                    />
                  </Card>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <br />
                  <Box 
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  >
                    <TextField
                      required
                      id="full_name"
                      label="Full Name"
                      fullWidth
                      defaultValue={user?.full_name}
                      onChange={handleChange}
                    />
                     <TextField
                      required
                      id="email"
                      label="Email Address"
                      fullWidth
                      defaultValue={user?.email}
                      onChange={handleChange}
                    />
                     <TextField
                      required
                      id="user_id"
                      label="User_id"
                      fullWidth
                      inputProps={
                        { readOnly: true, }
                      }
                      defaultValue={user?.id}
                      onChange={handleChange}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box>
                  <TextField
                      id="bio"
                      label="Bio"
                      defaultValue={user?.bio}
                      multiline
                      rows={5}
                      fullWidth
                      onChange={handleChange}
                  />
                </Box>        
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "center"}}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={user?.gender}
                      name="gender"
                      onChange={handleChange}
                    >
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Box>        
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box>
                  <TextField
                    id="interests"
                    label="Interests"
                    defaultValue={user?.interests}
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "center"}}>
                  <TextField
                    id="image_upload"
                    label="Image upload"
                    defaultValue={user?.image_upload}
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>        
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box>
                  <TextField
                    id="favourite_military_branch"
                    label="Favourite Military Branch"
                    defaultValue={user?.favourite_military_branch}
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box>
                  <TextField
                    id="age"
                    label="age"
                    defaultValue={user?.age}
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box>
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
                  onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "center"}}>
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
                    >
                      Update
                    </button>
                  </FormControl>
                </Box>        
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default UserProfile