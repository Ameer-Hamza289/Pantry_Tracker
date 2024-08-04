'use client';
import AlertDialog from '@/components/Dialog';
import UpsertItemModal from '@/components/UpsertItemModal';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  console.log(inventoryId);
  const inventory = {
    id: inventoryId,
    title: 'Fern',
    expiryDate: '4/9/2024',
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    quantity: 5
  }
  const router = useRouter();
  const handleClose = () => {
    setOpen(!open)
  }
  const toggleModal = () => {
    setOpenEditModal(!openEditModal);
  }
  return (
    <Box py={2} px={5}>
      <Button variant='outlined' sx={{ marginLeft: 'auto' }} onClick={() => router.back()}>Back to inventory</Button>
      <Box py={3} px={10}>
        <Card sx={{ p: 5, borderRadius: 15 }}>
          <Grid container spacing={5}>
            <Grid item xs={8} maxHeight={400}>
              <img
                srcSet={`${inventory.img}`}
                src={`${inventory.img}`}
                alt={inventory.title}
                loading="lazy"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  borderRadius: 10
                }}
              />
            </Grid>
            <Grid item xs={4} display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={3}>
              <Typography textAlign='center' variant='h4' fontWeight={600}>{inventory.title}</Typography>
              <Box display='flex' gap={2} alignItems={'center'}>
                <Typography variant='h6'>Quantity : </Typography>
                <Typography variant='h6'>{inventory.quantity} </Typography>
              </Box>
              <Box display='flex' gap={2} alignItems={'center'}>
                <Typography variant='h6'>Expiry Date : </Typography>
                <Typography variant='h6'>{inventory.expiryDate} </Typography>
              </Box>
              <Box display='flex' gap={2} alignItems={'center'}>
                <Button variant='contained' color='info' onClick={toggleModal}>Edit Item</Button>
                <Button variant='outlined' color='error' onClick={handleClose}>Delete Item</Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <AlertDialog description='Are you sure you want to delete this item?' title='Delete item' open={open} handleClose={handleClose} />
      <UpsertItemModal open={openEditModal} itemId={inventoryId.toString()} handleClose={toggleModal} />
    </Box>
  )
}

export default InventoryDetail
