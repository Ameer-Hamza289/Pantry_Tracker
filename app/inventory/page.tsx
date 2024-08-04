'use client'
import MasonryLayout from '@/components/Masonary'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const Inventory = () => {
  const router=useRouter();
  return (
    <Box p={4} >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography variant='h3' fontWeight={700}>Inventory Section</Typography>
      <Button variant='outlined' onClick={()=>router.back()}>Back to Dashboard</Button>

      </Box>
      <Grid container spacing={3} alignItems='center' marginY={3}>
        <Grid item xs={9}>
          <TextField variant='outlined' placeholder='Search inventory' sx={{ flex: 1, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth sx={{ paddingY: 1.8 }}>Add new Item</Button>
        </Grid>
      </Grid>
      <MasonryLayout />
    </Box>
  )
}

export default Inventory
