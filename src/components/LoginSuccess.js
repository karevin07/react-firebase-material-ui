import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

function LoginSuccess() {
  return (
    <Container maxWidth="sm">
      <CheckCircleIcon color="success" style={{ fontSize: 100 }} />
      <Typography variant="h4" align="center" gutterBottom>
        Login Successfully
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Congratulations on your successful login. Now you can start using our application.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        fullWidth
      >
        Getting Started
      </Button>
    </Container>
  );
}

export default LoginSuccess;
