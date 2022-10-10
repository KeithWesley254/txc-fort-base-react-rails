import { Box, Card, CardMedia, Grid, CardActionArea, Typography, Button } from '@mui/material';
import { fontWeight } from '@mui/system';
import React, { useEffect, useState } from 'react'

const Technologies = () => {

  const [techStories, setTechStories] = useState([]);

  useEffect(() => {
    fetch(`/api/technologies`)
    .then(r => r.json())
    .then(data => setTechStories(data))
  }, [])

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

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
                    <div id={techStory?.id}>
                      <Box>
                        <Typography>
                          {techStory?.description}
                        </Typography>
                        <div style={{position: "absolute", right: 40}}>
                          <Button sx={{color: "#4E60FF", fontWeight: "bold"}} 
                          onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                            Go Top
                          </Button>
                        </div>  
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