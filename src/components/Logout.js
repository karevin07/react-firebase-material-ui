import { Button, Container, Typography } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import React from 'react';
import firebaseApp from '../firebase/firebase'; // Import Firebase
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Logout with Firebase Authentication
    firebaseApp.auth().signOut().then(() => {
      // Logout success
      navigate('/')
    }).catch((error) => {
      // Logout fail
      console.error(error);
    });
  }

  return (
    <div>
      <Container maxWidth="sm">
        <CheckCircleIcon color="success" style={{ fontSize: 100 }} />
        <Typography variant="h4" align="center" gutterBottom>
          Logout Successfully
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Thank you !
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogout}
        >
          Application
        </Button>
      </Container>
    </div>
  );
}

export default Logout;
