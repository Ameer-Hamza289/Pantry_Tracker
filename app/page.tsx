'use client';
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  return (
    <Grid container height='100vh'>
      <Grid item xs={12} display="flex" justifyContent='center' alignItems='center' flexDirection='column' gap={5}>
        <Typography variant='h1' fontWeight={900}>My Pantry Tracker ®</Typography>
        <Box display={'flex'} flexDirection={'column'} justifyContent='center' alignItems={'center'} gap={1}>
          <Typography variant='body1'>Download My Pantry Tracker now for free to keep an organized inventory of your pantry!</Typography>
          <Typography>Automatically add items manually or with your device’s camera!</Typography>
        </Box>
        <Button variant='outlined' onClick={() => router.push('/dashboard')}>Get Started</Button>
      </Grid>
    </Grid>
  )
}

export default Home
