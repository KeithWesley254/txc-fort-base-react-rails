import React, { useEffect, useState } from 'react';
import {Grid, Box, CardMedia, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, InputLabel, OutlinedInput, CircularProgress} from '@mui/material';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';

const UserProfile = ({setUser}) => {
  const [formData, setFormData] = useState({
    full_name: '',
    gender: '',
    age: '',
    bio: '',
    interests: '',
    image_upload: '',
    favourite_military_branch: ''
  });
  const [user, setTheUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    fetch(`/api/me`)
    .then(r => {
      if (r.ok) {
        r.json().then((data) => {
          setTheUser(data)
          setIsLoading(false)
        });
      }
    });
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleUpdateUser() {
    fetch(`/api/one_user_profiles/${user.id}`, {
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
  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };
  
  if(isLoading === true) return <CircularProgressWithLabel value={progress} />;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6} sx={{textAlign: "center"}}>

            {/* DETAILS SECTION */}

            <br />
          <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Box sx={{xs: {ml: 5}, ml: 5, display: "flex", justifyContent: "center" }}>
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
                  <Box sx={{xs: {ml: 5}, display: "flex", justifyContent: "center"}}>
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
                      <InputLabel>Full Name</InputLabel>
                      <OutlinedInput
                        name='full_name'
                        value={formData.full_name}
                        onChange={handleChange}
                        label="Full Name"
                      />
                    </FormControl>
                    <FormControl sx={{ width: "70%" }}>
                      <InputLabel>Age</InputLabel>
                      <OutlinedInput
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
                  <InputLabel>Bio</InputLabel>
                  <OutlinedInput
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
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
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
                    <InputLabel>Interests</InputLabel>
                    <OutlinedInput
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
                    <InputLabel>Image Upload</InputLabel>
                    <OutlinedInput
                      name='image_upload'
                      value={formData.image_upload}
                      onChange={handleChange}
                      label="Image Upload"
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
                    <InputLabel>Favourite Military Branch</InputLabel>
                    <OutlinedInput
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