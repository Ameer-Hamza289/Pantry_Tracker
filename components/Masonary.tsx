'use client';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { Card, Typography, Box, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useState } from 'react';
import AlertDialog from './Dialog';
// const Label = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(0.5),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   borderBottomLeftRadius: 0,
//   borderBottomRightRadius: 0,
// }));

const CardWrapper = styled(Card)({
  position: 'relative',
  width: '400px',
  borderRadius: 20,
  overflow: 'hidden',
  '&:hover .action-buttons': {
    display: 'flex',
  },
});

const ActionButtons = styled(Box)({
  display: 'none',
  position: 'absolute',
  top: 0,
  right: 0,
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '0 0 0 10px',
});

export default function MasonryLayout() {
  const [open,setOpen]=useState<boolean>(false);
  const handleClose=()=>{
    setOpen(!open)
  }
  return (
    <Box sx={{ minHeight: 829 }}>
      <Masonry columns={3} spacing={3}>
        {itemData.map((item, index) => (
          <CardWrapper key={index}>
            <ActionButtons className="action-buttons">
              <IconButton size="small">
                <Edit />
              </IconButton>
              <IconButton size="small" onClick={()=>setOpen(true)}>
                <Delete />
              </IconButton>
            </ActionButtons>
            <Box>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                }}
              />
            </Box>
            <Box paddingY={1}>
              <Typography textAlign="center" fontWeight={600}>{item.title}</Typography>
            </Box>
          </CardWrapper>
        ))}
      </Masonry>
      <AlertDialog description='Are you sure you want to delete this item?' title='Delete item' open={open} handleClose={handleClose} />
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];