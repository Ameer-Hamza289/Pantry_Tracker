'use client';
import { Button, FormControl, FormHelperText, IconButton, Input, InputLabel, Modal, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Close } from '@mui/icons-material';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "30px",
  padding: 7,
  outline: "none",
};

const UpsertItemModal = ({ itemId, open, handleClose }: { itemId?: string, open: boolean, handleClose(): void }) => {
  const handleSubmit = () => {
    console.log(itemId);
  }
  return (
    <Modal open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style} className="ModalPaper">
        <Typography variant='h3' fontWeight={600}>{itemId ? 'Edit Inventory Item' : 'Add Inventory Item'}</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ position: "absolute", top: 20, right: 20 }}>
          <Close />
        </IconButton>
        <Stack spacing={3} mt={4}>
          <FormControl>
            <InputLabel htmlFor="my-input">Item name*</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">The item name must be unique.</FormHelperText>
          </FormControl>
          <FormControl>
            {/* <InputLabel htmlFor="my-input">Item Expiry*</InputLabel> */}
            <Input type='date' id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Enter the expiry date of the item.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Quantity*</InputLabel>
            <Input type='number' id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Enter the quantity of the item.</FormHelperText>
          </FormControl>
        </Stack>
        <Button variant='contained' sx={{ marginTop: 5 }} fullWidth onClick={handleSubmit}>{itemId ? 'Edit Inventory Item' : 'Add Inventory Item'}</Button>
      </Paper>

    </Modal>
  )
}

export default UpsertItemModal;
