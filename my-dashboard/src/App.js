import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import AuthForm from './AuthForm';

function App() {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={12} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          <MainContent />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <AuthForm type="login" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AuthForm type="signup" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
