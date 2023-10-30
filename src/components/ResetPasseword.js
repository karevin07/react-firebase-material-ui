import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { Email } from '@mui/icons-material';
import firebaseApp from '../firebase/firebase';  // Import Firebase
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    // Sending Password Reset Emails with Firebase Authentication
    firebaseApp.auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent
        // Success message can be displayed here
        navigate('/reset-password-success');
      })
      .catch((error) => {
        // Failure to handle sending password reset email
        const errorCode = error.code;
        const errorMessage = error.message;
        // Error messages can be displayed here
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
          <Button variant="contained" color="primary" onClick={handleResetPassword}>
            Send password reset e-mail
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResetPassword;
