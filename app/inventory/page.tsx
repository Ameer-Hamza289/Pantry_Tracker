import MasonryLayout from '@/components/Masonary'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Inventory = () => {
  return (
    <Box p={4} >
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={8}>
          <TextField variant='outlined' placeholder='Search inventory' sx={{ flex: 1, width:"100%" }} />
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined'>Add new Item</Button>
        </Grid>
      </Grid>
      <Typography>Inventory Section</Typography>
      <MasonryLayout />
    </Box>
  )
}

export default Inventory
