'use client'
import MasonryLayout from '@/components/Masonary'
import UpsertItemModal from '@/components/UpsertItemModal'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Inventory = () => {
  const router = useRouter();
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [itemId,setItemId]=useState<string|undefined>(undefined);
  const toggleModal = () => {
    setAddModalOpen(!addModalOpen);
  }
  const selectItem=(id:string)=>{
    setItemId(id)
  }
  return (
    <Box p={4} >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Button variant='outlined' onClick={() => router.back()}>Back to Dashboard</Button>
        <Typography variant='h3' fontWeight={700}>All Inventory Items</Typography>
      </Box>
      <Grid container spacing={3} alignItems='center' marginY={3}>
        <Grid item xs={9}>
          <TextField variant='outlined' placeholder='Search inventory' sx={{ flex: 1, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' fullWidth sx={{ paddingY: 1.8 }} onClick={()=>{
            toggleModal();
            setItemId(undefined);
            }}>Add new Item</Button>
        </Grid>
      </Grid>
      <MasonryLayout selectItem={selectItem} toggleModal={toggleModal} />
      <UpsertItemModal open={addModalOpen} itemId={itemId} handleClose={toggleModal}/>
    </Box>
  )
}

export default Inventory
