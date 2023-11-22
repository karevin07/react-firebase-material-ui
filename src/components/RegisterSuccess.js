import { Button, Container, Typography } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import React from 'react';

function RegisterSuccess() {
  return (
    <Container maxWidth="sm">
      <CheckCircleIcon color="success" style={{ fontSize: 100 }} />
      <Typography variant="h4" align="center" gutterBottom>
        Register Successfully
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Congratulations on your successful registration. You can now login and access our app.
      </Typography>
      <Button
        component={Link}
        to="/login"
        variant="contained"
        color="primary"
        fullWidth
      >
        Go to Login
      </Button>
    </Container>
  );
}

export default RegisterSuccess;
