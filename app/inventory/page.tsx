import MasonryLayout from '@/components/Masonary'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Inventory = () => {
  return (
    <Box p={4} >
      <Typography variant='h3' fontWeight={700}>Inventory Section</Typography>
      <Grid container spacing={3} alignItems='center' marginY={3}>
        <Grid item xs={9}>
          <TextField variant='outlined' placeholder='Search inventory' sx={{ flex: 1, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
          <Button variant='outlined' fullWidth sx={{ paddingY: 1.7 }}>Add new Item</Button>
        </Grid>
      </Grid>
      <MasonryLayout />
    </Box>
  )
}

export default Inventory
