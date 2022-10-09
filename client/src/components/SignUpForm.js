import React, { useState } from 'react';
import { Grid, Box, FormControl, FormLabel, FormControlLabel, FormHelperText, Radio, RadioGroup, TextField } from '@mui/material';

const SignUpForm = ({ onLogin }) => {

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [image_upload, setImageUpload] = useState("");
  const [favourite_military_branch, setMilitaryBranch] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        age,
        gender,
        bio,
        interests,
        image_upload,
        favourite_military_branch
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
   <>
      <Box sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>
        <div>
          <p style={{fontWeight: "bolder", fontSize: 20}}>Sign Up</p>
        </div>
        <form  onSubmit={handleSubmit}>
          <Box>
            <Grid container spacing={2} columns={12}>
               <Grid item xs={12} md={6}>
               <FormControl>
                <TextField 
                type="text"
                variant="outlined"
                label="Full Name"
                id="full_name"
                autoComplete="off"
                size="small"
                value={full_name}
                onChange={(e) => setFullName(e.target.value)} 
                />
                <FormHelperText id="my-helper-text">Please Enter Your Full Name</FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField 
                type="email"
                variant="outlined"
                label="Email"
                id="email"
                autoComplete="on"
                value={email}
                size="small"
                onChange={(e) => setEmail(e.target.value)} 
                />
                <FormHelperText id="my-helper-text">name@example.com</FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField 
                type="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                value={password}
                size="small"
                onChange={(e) => setPassword(e.target.value)}
                />
                <FormHelperText id="my-helper-text">min. 8 characters</FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField 
                type="password"
                label="Password Confirmation"
                id="passwordConfirmation"
                autoComplete="current-password"
                size="small"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <FormHelperText id="my-helper-text">Please Confirm Your Password</FormHelperText>
              </FormControl>
              <br />
              <FormControl>
                <TextField 
                type="number"
                variant="outlined"
                label="Age"
                id="age"
                size="small"
                autoComplete="off"
                value={age}
                onChange={(e) => setAge(e.target.value)} 
                />
              </FormControl>
              <br />
               </Grid>
               <Grid item xs={12} md={6}>
              <FormControl>
                <TextField 
                type="text"
                variant="outlined"
                label="Bio"
                id="bio"
                multiline
                rows={4}
                autoComplete="off"
                value={bio}
                size="small"
                onChange={(e) => setBio(e.target.value)} 
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField 
                type="text"
                variant="outlined"
                label="Interests"
                id="interests"
                autoComplete="off"
                size="small"
                value={interests}
                onChange={(e) => setInterests(e.target.value)} 
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField 
                type="text"
                variant="outlined"
                label="Image Upload"
                id="image_upload"
                autoComplete="off"
                size="small"
                value={image_upload}
                onChange={(e) => setImageUpload(e.target.value)} 
                />
              </FormControl>
              <br />
              <br />
              <FormControl>
                <TextField 
                type="text"
                variant="outlined"
                label="Favourite Military Branch"
                id="favourite_military_branch"
                autoComplete="off"
                size="small"
                value={favourite_military_branch}
                onChange={(e) => setMilitaryBranch(e.target.value)} 
                />
              </FormControl>
              <br />
              <Box sx={{ textAlign: "center"}}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="male"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)} 
                      size="small"
                    >
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Box>        
              <br />
               </Grid>
            </Grid>
            <div>
              <div>
                <FormControl>
                  <button style={{
                    fontSize: 14,
                    backgroundColor: "#4e60ff",
                    width: 255,
                    height: 40,
                    color: "#fff",
                    borderRadius: 10,
                    cursor: "pointer",
                    border: "none",
                  }}
                  type='submit'
                  >
                    {isLoading ? "Loading..." : "Sign Up"}
                  </button>
                </FormControl>
              </div>
              <div>
                <FormControl>
                  {errors.map((err) => (
                    <>
                    <div key={err}>
                     {alert(err)}
                    </div>
                    </>
                  ))}
                </FormControl>
              </div>
            </div>
            </Box>
          </form>
      </Box>
   </>
  )
}

export default SignUpForm