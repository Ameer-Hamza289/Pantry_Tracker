'use client';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { Card, Typography, Box, IconButton, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useState } from 'react';
import AlertDialog from './Dialog';
import { useRouter } from 'next/navigation';
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
  '&:hover .view-details': {
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

const ViewDetailsButton = styled(Box)({
  display: 'none',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '5px',
  padding: '10px 20px',
});

export default function MasonryLayout({ selectItem, toggleModal }: { selectItem(a: string): void, toggleModal(): void }) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <Box sx={{ minHeight: 829 }}>
      <Masonry columns={3} spacing={3}>
        {itemData.map((item, index) => (
          <CardWrapper key={index}>
            <ActionButtons className="action-buttons">
              <IconButton size="small" onClick={() => {
                selectItem(item.id);
                toggleModal();
              }}>
                <Edit />
              </IconButton>
              <IconButton size="small" onClick={() => setOpen(true)}>
                <Delete />
              </IconButton>
            </ActionButtons>
            <ViewDetailsButton className="view-details">
              <Button variant="outlined" onClick={() => router.push(`/inventory/${item.id}`)}>View Details</Button>
            </ViewDetailsButton>
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
    id: '1',
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    id: '8',
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    id: '9',
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    id: '10',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    id: '11',
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    id: '12',
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    id: '13',
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    id: '14',
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    id: '15',
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    id: '16',
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    id: '17',
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];