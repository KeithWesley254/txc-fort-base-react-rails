import { Box, Card, CardMedia, Grid, CardActionArea, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Technologies = () => {

  const [techStories, setTechStories] = useState([]);

  useEffect(() => {
    fetch(`/api/technologies`)
    .then(r => r.json())
    .then(data => setTechStories(data))
  }, [])

  const navigate = useNavigate

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
                navigate()
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
      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12}>
            <div style={{paddingLeft: 100, fontSize: 60, fontFamily: "nunito", fontWeight: "bolder"}}>
              <p>
                TXC Technologies
                <br />
                And Researches
              </p>
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2} columns={12} sx={{textAlign: "center", pl:4, pr:4, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 14 }}>
          <Grid item xs={12} md={12} >
            <div className='heroScroll' style={{ position: "relative", width: "100%", overflowX: "auto",}}>
              <Box sx={{ borderRadius: 20, display: "flex", display: "inline-flex", flexDirection: 'row'  }}>
                {my_cards}
              </Box>
            </div>
          </Grid>
        </Grid>
        <br />
        {techStories.map((techStory) => {
          return(
            <>
              <Box>
                <Grid container spacing={2} columns={12} >
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={2} columns={12} sx={{textAlign: "center", pl:4, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 14 }}>
                      <Grid item xs={12} md={12}>
                        <Box>
                          <Card sx={{ maxWidth: "70%" }}>
                            <CardMedia
                              component="img"
                              height="450"
                              image={techStory?.image_url}
                              alt="green iguana"
                            />
                          </Card>
                        </Box>
                      </Grid>
                    </Grid>  
                  </Grid>
                  <Grid item xs={12} md={6} sx={{pr: 4}} >
                    <div>
                      <Box>
                        <Typography>
                          {techStory?.description}
                        </Typography>
                      </Box>  
                    </div>
                  </Grid>
                </Grid>
              </Box>
              <br />
            </>
          )
        })}
      </Box>
    </>
  )
}

export default Technologies