import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import React from 'react';

function Navbar({ isAuthenticated }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', flex: 1 }}>
          My Application
        </Typography>
        {isAuthenticated ? (
          <div>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/logout" color="inherit">
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
            <Button component={Link} to="/reset-password" color="inherit">
              ResetPasseord
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
