import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const SoldierProfile = ({ oneSoldier }) => {
    const loopPlatoon = oneSoldier?.soldier_profile.platoon.map((platoon) => {
        return (
            <>
                <Typography key={platoon.id} variant="body2" component="h2">
                    {platoon.name}
                </Typography>
            </>
        )
    })

    const loopMilitarySpec = oneSoldier?.soldier_profile.military_spec.map((specialization) => {
        return (
            <>
                <Typography key={specialization.id} variant="body2" component="h2">
                    {specialization.title}
                </Typography>
            </>
        )
    })
    
  return (
    <>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <Box sx={{xs: {ml: 5}, ml: 5 }}>
              <Card sx={{ maxWidth: 345}}>
                  <CardMedia
                    component="img"
                    height="230"
                    image={oneSoldier?.soldier_profile.image_url}
                    alt={oneSoldier?.soldier_profile.name}
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
                {oneSoldier?.name}
              </Typography>
            </Box>
            <br />
            <Box sx={{ textAlign: "left", ml: 5}}>
              <Typography variant="h5" component="h2">
                Platoon
              </Typography>
              {loopPlatoon}
            </Box>
            <br />
            <Box sx={{ textAlign: "left", ml: 5}}>
              <Typography variant="h5" component="h2">
                Military Specialization
              </Typography>
              {loopMilitarySpec}
            </Box> 
            <br />
            <Box sx={{ textAlign: "left", ml: 5}}>
              <Typography variant="h5" component="h2">
                Age
              </Typography>
              <Typography variant="body2" component="h2">
                {oneSoldier?.age}
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
                  {oneSoldier?.soldier_profile.bio}
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
                Gender
              </Typography>
              <Typography variant="body2" component="h2">
                {oneSoldier?.soldier_profile.gender}
              </Typography>
            </Box>         
          </Grid>
        <Grid item xs={6} md={6}>
          <Box sx={{ textAlign: "left", ml: 5}}>
              <Typography variant="h5" component="h2">
                Favourite Foot
              </Typography>
              <Typography variant="body2" component="h2">
                {oneSoldier?.soldier_profile.favourite_foot}
              </Typography>
            </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Box sx={{ textAlign: "left", ml: 5}}>
              <Typography variant="h5" component="h2">
                Interests
              </Typography>
              <Typography variant="body2" component="h2">
                {oneSoldier?.soldier_profile.interests}
              </Typography>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default SoldierProfile