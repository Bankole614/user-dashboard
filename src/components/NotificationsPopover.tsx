import React, { useState, MouseEvent } from 'react';
import { Popover, Typography, Avatar, List, ListItem, Divider, Button, Box, IconButton } from '@mui/material';
import { LuBellDot } from "react-icons/lu";
import { HiArrowDownRight } from 'react-icons/hi2';

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
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px', fontWeight: 'bold' }}>
              <HiArrowDownRight />
              Someone just checked in
            </Typography>
            </ListItem>
          {/* Example Notification Item */}
          <ListItem alignItems="flex-start">
            
            <Avatar sx={{ bgcolor: 'green', fontSize: '14px' }}>JJ</Avatar>
            <Box ml={2}>
              <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '14px' }}>
                Jacob Jones
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                nevaeh.simmons@example.com
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '12px', color: 'black' }}>
                19 Oct. 2024 - 02:34 am
              </Typography>

              <Box mt={1} p={1} sx={{ border: '1px solid #9ca3af', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Button variant="contained" color="success" sx={{ mr: 1, textTransform: 'none', paddingX: '30px', fontSize: '12px' }}>
                  Approve
                </Button>
                <Button variant="contained" color="error" sx={{ textTransform: 'none', paddingX: '30px', fontSize: '12px' }}>
                  Decline
                </Button>
              </Box>
            </Box>
          </ListItem>

          <Divider sx={{ my: 2 }} />

          {/* Another example of a different notification */}
          <ListItem alignItems="flex-start">
            <Avatar sx={{ bgcolor: 'green', fontSize: '14px' }}>JJ</Avatar>
            <Box ml={2}>
              <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '14px' }}>
                A new User was successfully added
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', color: 'black' }}>
                19 Oct. 2024 - 02:34 am
              </Typography>
            </Box>
          </ListItem>
        </List>

        <Divider />

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