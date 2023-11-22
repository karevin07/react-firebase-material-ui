import { Button, Container, Grid, TextField } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import React, { useState } from 'react';

import firebaseApp from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

// Import Firebase

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // User Registration with Firebase Authentication
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Register Successfully
        const user = userCredential.user;
        console.log(user)
        // Perform post-registration actions, such as navigating to a user's profile page
        navigate('/register-success');
      })
      .catch((error) => {
        // Handling of registration failures
        const errorCode = error.code;
        const errorMessage = error.message;
        // Error messages can be displayed here
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <Email />
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <Lock />
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
