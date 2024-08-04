'use client';
import PieActiveArc from '@/components/Chart'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

const Dashboard = () => {
  const router=useRouter();
  return (
    <Box p={4}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography variant='h3' fontWeight={700}>Dashboard</Typography>
<Button variant='outlined' onClick={()=>router.push('/inventory')}>Visit Inventory</Button>
      </Box>
      <Grid container spacing={3} marginY={4}>
        <Grid item xs={4}>
          <Card sx={{ padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontWeight={600}>Total Inventory Items</Typography>
            <Typography fontSize={28} fontWeight={700}>17</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontWeight={600}>Fresh Items</Typography>
            <Typography fontSize={28} fontWeight={700}>16</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography fontWeight={600}>Expired Items</Typography>
            <Typography fontSize={28} fontWeight={700}>01</Typography>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{p:5}}>
        <PieActiveArc/>
      </Card>
    </Box>
  )
}

export default Dashboard
