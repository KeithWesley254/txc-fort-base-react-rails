import React, { useEffect, useState } from 'react';
import {Grid, Box, CardMedia, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';


const UserProfile = ({user, setUser}) => {

  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    full_name: '',
    gender: '',
    age: '',
    bio: '',
    interests: '',
    image_upload: '',
    favourite_military_branch: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/me')
    .then(r => r.json())
    .then(data => setUserData(data))
  }, [])

  console.log(userData)

  function handleUpdateUser() {
    fetch(`/api/user_details/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: formData.full_name,
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
  }

  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function deleteProfile(id){
    fetch(`/api/users/${id}`,{
        method: "DELETE",
    })
    }

  function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
  }

  // console.log(formData)
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6} sx={{textAlign: "center"}}>

            {/* DETAILS SECTION */}

            <br />
          <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box sx={{xs: {ml: 5}, ml: 5 }}>
                  <Card sx={{ maxWidth: 345}}>
                      <CardMedia
                        component="img"
                        height="230"
                        image={userData?.image_upload}
                        alt={userData?.full_name}
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
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Email Address
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.email}
                  </Typography>
                </Box>
               <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Gender
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.gender}
                  </Typography>
                </Box> 
                <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Age
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.age}
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
                    Favourite Military Branch
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {userData?.favourite_military_branch}
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
                  <Box sx={{xs: {ml: 5}}}>
                  <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                      component="img"
                      height="230"
                      image={userData?.image_upload}
                      alt={userData?.full_name}
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
                      name='full_name'
                      onChange={handleChange}
                    />
                     {/* <TextField
                      required
                      id="email"
                      label="Email Address"
                      fullWidth
                      name='email'
                      onChange={handleChange}
                    /> */}
                    <TextField
                      id="age"
                      label="age"
                      name='age'
                      fullWidth
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
                      name='bio'
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
                      defaultValue="male"
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
                    name='interests'
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
                    name='image_upload'
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
                    name='favourite_military_branch'
                    fullWidth
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box>
                  <Typography color="red">
                    WARNING!
                  </Typography>
                  <Typography color="red">
                    Deleting your Profile will delete you from our database!
                  </Typography>
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
                  onClick={() => {
                    handleUpdateUser()
                    navigate('/')
                  }}
                  >
                    UPDATE
                  </button>
                </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "center"}}>
                  <FormControl>
                    <button style={{
                      fontSize: 14,
                      backgroundColor: "#ff0101",
                      width: 200,
                      height: 40,
                      color: "#fff",
                      borderRadius: 10,
                      cursor: "pointer",
                      border: "none"
                    }}
                    onClick={() => {
                      handleLogoutClick()
                      deleteProfile(user.id)
                    }}
                    >
                      DELETE
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