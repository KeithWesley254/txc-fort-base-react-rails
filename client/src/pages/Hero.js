import { Grid, Box, CardActionArea, CardMedia, Typography, Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [techStories, setTechStories] = useState([]);
  const [communityImpact, setCommunityImpact] = useState({});

  useEffect(() => {
    fetch(`/api/technologies`)
    .then(r => r.json())
    .then(data => setTechStories(data))
  }, [])

  useEffect(() => {
    fetch(`/api/community_impacts/${7}`)
    .then(r => r.json())
    .then(data => setCommunityImpact(data))
  }, [])

  const navigate = useNavigate();

  const my_cards = techStories.map((story) => {
    return(
      <>
        <Card key={story.id} sx={{ width: 200, height: 150 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={story?.image_url}
              alt={story?.title}
              onClick={() => {
                navigate('/technologies')
              }}
            />
          </CardActionArea>
        </Card>
        &nbsp;
        &nbsp;
      </>
    )
    })  

  return (
    <>
      <main>
        <Box>
          <br />
          <Grid container spacing={2} columns={12} sx={{textAlign: "center", pl:4, pr:4, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 14 }}>
            <Grid item xs={12} md={12} >
            <div className='heroScroll' style={{ position: "relative", width: "100%", overflowX: "auto",}}>
              <Box sx={{ borderRadius: 5, display: "flex", display: "inline-flex", flexDirection: 'row'  }}>
                {my_cards}
              </Box>
            </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={2} columns={12} >
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} columns={12} sx={{textAlign: "center", pl:4, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 14 }}>
                <Grid item xs={12} md={12}>
                  <Box>
                    <Card sx={{ maxWidth: "70%" }}>
                      <CardMedia
                        component="img"
                        height="450"
                        image={communityImpact?.image_url}
                        alt="green iguana"
                      />
                    </Card>
                  </Box>
                </Grid>
              </Grid>  
            </Grid>
            <Grid item xs={12} md={6} sx={{pr: 4}}>
              <div>
                <Box>
                  <Typography>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br />
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </Typography>
                </Box>  
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  )
}

export default Hero