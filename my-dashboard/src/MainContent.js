import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

export default function MainContent() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h6">
              Dashboard
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum mi. Nulla facilisi. Vivamus ac tellus ut ipsum varius aliquet. Quisque ac dignissim eros.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6">
              Inbox
            </Typography>
            <Typography>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6">
              Mail
            </Typography>
            <Typography>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

