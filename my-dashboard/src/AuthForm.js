import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function AuthForm({ type }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${type} form with email: ${email} and password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            {type === 'login' ? 'Login' : 'Sign Up'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AuthForm;
