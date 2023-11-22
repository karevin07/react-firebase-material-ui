import '../App.css';

import { Paper, Typography } from '@mui/material';

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';
import logo from '../logo.svg';
import { styled } from '@mui/material/styles';

const RootContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function Index({ isAuthenticated }) {
  return (
    <RootContainer>
      <StyledPaper>
        {isAuthenticated ? (
          // If logged in, this page will be displayed
          <div>
            <Typography variant="h4" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body1">
              This is your personal page
            </Typography>
            {<img src={logo} className="App-logo" alt="logo" />}
          </div>
        ) : (
          // If the user is not logged in, a login page prompt is displayed
          <div>
            <Typography variant="h4" gutterBottom>
              Please login first
            </Typography>
            <Typography variant="body1">
              To access this page, log in to your account.
            </Typography>
            <IconButton aria-label="login" color="primary" component={Link} to="/login">
              <LoginIcon /> Login
            </IconButton>
          </div>
        )}
      </StyledPaper>
    </RootContainer>
  );
}

export default Index;
