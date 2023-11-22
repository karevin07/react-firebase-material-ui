import { Button, Container, Typography } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import React from 'react';

function ResetPasswordSuccess() {
  return (
    <Container maxWidth="sm">
      <CheckCircleIcon color="success" style={{ fontSize: 100 }} />
      <Typography variant="h4" align="center" gutterBottom>
        Reset Password Successfully
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Please go to your mailbox to receive the verification letter and reset your password.
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

export default ResetPasswordSuccess;
