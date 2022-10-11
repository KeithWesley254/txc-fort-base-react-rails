import { Box, Card, CardMedia, Grid, Typography, CardActionArea, FormControl, InputLabel, OutlinedInput, Avatar } from '@mui/material'
import React from 'react'

const Stories = ({user}) => {
  return (
    <>
      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12}>
              <div style={{paddingLeft: 100, fontSize: 60, fontFamily: "nunito", fontWeight: "bolder"}}>
                <p>
                  TXC Activities
                  <br />
                  And Fan Messages
                </p>
              </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} columns={6}>
              <Grid item xs={6} md={3}>
                <Box sx={{textAlign: "center"}}>
                  <Typography  sx={{fontSize: 25, fontFamily: "nunito", fontWeight: "bold"}}>
                      TXC Activities
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <br />
              <Grid container spacing={2} columns={6}>
                <Grid item xs={6} md={3}>
                  <Box sx={{ borderRadius: 20, display: "flex", justifyContent: "center"  }}>
                  <Card sx={{ width: 200, height: 150 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image=''
                        alt=''
                      />
                    </CardActionArea>
                  </Card>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={2} columns={6}>
                <Grid item xs={6} md={3}>
                  <Box sx={{ borderRadius: 20, display: "flex", justifyContent: "center"  }}>
                  <Card sx={{ width: 200, height: 150 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image=''
                        alt=''
                      />
                    </CardActionArea>
                  </Card>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} columns={6}>
              <Grid item xs={6} md={6}>
                <Box sx={{textAlign: "center"}}>
                  <Typography  sx={{fontSize: 25, fontFamily: "nunito", fontWeight: "bold"}}>
                      Fan Messages
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={2} columns={6}>
              <Grid item xs={6} md={6}>
                <Box sx={{textAlign: "center", fontFamily: "nunito", border: 1, mr: 4, ml: 4}}>
                  <Typography sx={{fontWeight: "ligher"}}>
                    Write A Comment
                  </Typography>
                  <form>
                    <FormControl sx={{ m: 1, width: "70%" }}>
                      <InputLabel htmlFor="Comment">Comment</InputLabel>
                      <OutlinedInput
                        id="user_comment"
                        multiline
                        rows={4}
                        type="text"
                        // value={their_message}
                        // onChange={(e) => setTheirMessage(e.target.value)}
                        label="Comment"
                      />
                    </FormControl>
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
                        Post
                      </button>
                    </FormControl>
                  </form>
                  <br />
                </Box>
                <br />
              </Grid>
              <Grid container spacing={2} columns={6}>
                <Grid item xs={6} md={6}>
                  <Box sx={{ pt: 10}}>
                    <Grid container spacing={2} columns={6}>
                      <Grid item xs={2} md={2}>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                          <Avatar alt={user?.full_name} src={user?.image_upload} />
                        </Box>
                      </Grid>
                      <Grid item xs={4} md={4}>
                        <Box sx={{ml: 4}}>
                          Lorem
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>      
                </Grid>
              </Grid>
            </Grid>
            <br />
          </Grid>
        </Grid>
        <br />
        
      </Box>
    </>
  )
}

export default Stories