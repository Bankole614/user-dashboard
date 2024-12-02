import React, { useState, MouseEvent } from 'react';
import { Avatar, Popover, Typography, Divider, Button, Box } from '@mui/material';

const AvatarPopover: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {/* Avatar that triggers the popover */}
      <Avatar  
        src="https://randomuser.me/api/portraits/women/2.jpg"
        onClick={handleClick}
        sx={{ cursor: 'pointer', bgcolor: '#077EF0' }}
      />

      {/* Popover content */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            sx: { padding: 2, width: 250, bgcolor: 'rgba(0, 0, 0, 0.7)',  backdropFilter: 'blur(10px)' }, // Adjust the width and padding as needed
          }
          
        }}
      >
        {/* User Info */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
          Kate Winslet
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
        katewinslet@bankdash.com
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 2, borderColor: '#9ca3af' }} />

        {/* Action Buttons */}
        <Box >
          <Button fullWidth variant="text" sx={{ color: 'white', justifyContent: 'flex-start', "&:hover" : {
            color: 'black', backgroundColor: 'white'
          }}} >
            Profile
          </Button>
          <Button fullWidth variant="text" sx={{ color: 'white', justifyContent: 'flex-start', "&:hover" : {
            color: 'black', backgroundColor: 'white'
          }}}>
            Logout
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default AvatarPopover;