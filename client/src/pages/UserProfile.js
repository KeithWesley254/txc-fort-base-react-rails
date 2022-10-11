import React, { useEffect, useState } from 'react';
import {Grid, Box, CardMedia, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, InputLabel, OutlinedInput} from '@mui/material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';


const UserProfile = ({user, setUser}) => {
  const [formData, setFormData] = useState({
    full_name: '',
    gender: '',
    age: '',
    bio: '',
    interests: '',
    image_upload: '',
    favourite_military_branch: ''
  });

  function handleUpdateUser() {
    fetch(`/api/one_user_profiles/${user?.id}`, {
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
  }

  const navigate = useNavigate();

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
                        image={user?.one_user_profile.image_upload}
                        alt={user?.one_user_profile.full_name}
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
                    {user?.one_user_profile.full_name}
                  </Typography>
                </Box>
                <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Email Address
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {user?.one_user_profile.email}
                  </Typography>
                </Box>
               <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Gender
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {user?.one_user_profile.gender}
                  </Typography>
                </Box> 
                <br />
                <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Age
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {user?.one_user_profile.age}
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
                      {user?.one_user_profile.bio}
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
                    {user?.one_user_profile.favourite_military_branch}
                  </Typography>
                </Box>         
              </Grid>
              <Grid item xs={6} md={6}>
              <Box sx={{ textAlign: "left", ml: 5}}>
                  <Typography variant="h5" component="h2">
                    Interests
                  </Typography>
                  <Typography variant="body2" component="h2">
                    {user?.one_user_profile.interests}
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
                      image={user?.one_user_profile.image_upload}
                      alt={user?.one_user_profile.full_name}
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
                    '& .MuiTextField-root': { width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  >
                    <FormControl sx={{ mb: 2, width: "70%" }}>
                      <InputLabel htmlFor="full_name">Full Name</InputLabel>
                      <OutlinedInput
                        id="full_name"
                        name='full_name'
                        value={formData.full_name}
                        autoComplete="on"
                        onChange={handleChange}
                        label="Full Name"
                      />
                    </FormControl>
                    <FormControl sx={{ width: "70%" }}>
                      <InputLabel htmlFor="age">Age</InputLabel>
                      <OutlinedInput
                        id="age"
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        label="Age"
                      />
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor="bio">Bio</InputLabel>
                  <OutlinedInput
                    id="bio"
                    name='bio'
                    value={formData.bio}
                    onChange={handleChange}
                    multiline
                    rows={5}
                    label="Bio"
                  />
                  </FormControl>
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
                      value={formData.gender}
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
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="interests">Interests</InputLabel>
                    <OutlinedInput
                      id="interests"
                      name='interests'
                      value={formData.interests}
                      onChange={handleChange}
                      label="Interests"
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box sx={{ textAlign: "center"}}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="image_upload">Image Upload</InputLabel>
                    <OutlinedInput
                      id="image_upload"
                      name='image_upload'
                      value={formData.image_upload}
                      onChange={handleChange}
                      label="Image_upload"
                    />
                  </FormControl>
                </Box>        
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="favourite_military_branch">Favourite Military Branch</InputLabel>
                    <OutlinedInput
                      id="favourite_military_branch"
                      name='favourite_military_branch'
                      value={formData.favourite_military_branch}
                      onChange={handleChange}
                      label="Favourite Military Branch"
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box>
                  <Typography color="red">
                    WARNING!
                  </Typography>
                  <Typography color="red">
                    Deleting your Profile will delete your Account from our database!
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
                    window.location.reload();
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
                      width: 180,
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
        <br />
      </Box>
    </>
  )
}

export default UserProfile