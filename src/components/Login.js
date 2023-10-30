import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import firebaseApp from '../firebase/firebase';  // Import Firebase
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login with Firebase Authentication
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login success
        const user = userCredential.user;
        // Perform post-login actions, such as navigating to a user's profile page

        navigate('/login-success');

      })
      .catch((error) => {
        // Handle login fail
        const errorCode = error.code;
        const errorMessage = error.message;
        // Error message alert
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
          <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;