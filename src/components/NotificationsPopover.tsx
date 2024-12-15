import React, { useState, MouseEvent } from 'react';
import { Popover, Typography, Avatar, List, ListItem, Divider, Button, Box, IconButton } from '@mui/material';
import { LuBellDot } from "react-icons/lu";
import { FaCheck, FaSpotify } from 'react-icons/fa6';
import { IoWarningOutline } from 'react-icons/io5';
import { LiaCreditCardSolid } from 'react-icons/lia';

const NotificationsPopover: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notifications-popover' : undefined;

  return (
    <div>
      {/* Notification Icon Button */}
      <IconButton onClick={handleClick} aria-describedby={id} sx={{ bgcolor: '#f3f4f6'}}>
        <LuBellDot className='text-red-500' />
      </IconButton>

      {/* Popover */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: 1,
           // Adjust width as needed
        }}
      >
        {/* Popover Header */}
        <Box p={1}>
          <Typography sx={{ fontWeight: 'bold' }}>All Notifications</Typography>
        </Box>

        <Divider />

        {/* Notification List */}
        <List>
          <ListItem>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px' }}>
              <FaCheck className='text-green-600 h-9 w-9 p-2 rounded-full bg-green-100' />
              Password changed successfully
            </Typography>
          </ListItem>

          <Divider />

          <ListItem>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px' }}>
              <IoWarningOutline className='text-red-600 h-9 w-9 p-2 rounded-full bg-red-100' />
              Transfer to John Doe failed
            </Typography>
          </ListItem>

          <Divider  />
          <ListItem >
            <div className='w-full'>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '13px' }}>
              <FaSpotify className='text-green-600 h-9 w-9 p-2 rounded-full bg-green-100 ' />
              Spotify wants to charge your card
            </Typography>

            <div className='flex justify-center'>
              <div className='flex border p-2 w-fit items-center justify-center rounded-lg mt-2 gap-2'>
                <button className='text-white bg-green-700 rounded-md py-1 px-4 text-sm'>
                  Approve
                </button>
                <button className='text-white bg-red-700 rounded-md py-1 px-4 text-sm'>
                  Decline
                </button>
              </div>
            </div>

            </div>
              

                          
          </ListItem>

          <Divider  />

          
          <ListItem>
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px' }}>
              <LiaCreditCardSolid className='text-blue-600 h-9 w-9 p-2 rounded-full bg-blue-100' />
              A new card was successfully added
            </Typography>
          </ListItem>
          <Divider  />
        </List>

       

        {/* Footer with Clear all button */}
        <Box p={1}>
          <Button variant="text" sx={{ textTransform: 'none', justifyContent: 'flex-start' }} fullWidth>
            Clear all
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default NotificationsPopover;