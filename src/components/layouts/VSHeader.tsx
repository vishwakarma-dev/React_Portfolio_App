import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IUserProfile } from '../Types/ProfileTypes';

export interface IVSProfileCard{
    User : IUserProfile
}

function VSProfileCard (props : IVSProfileCard) {
    const { name, title, location } = props.User

  return (
    <Card elevation={8} sx={{display: 'flex', alignItems: 'center', padding: '1rem',}}>
      <Avatar
        sx={{width: 80, height: 80, marginRight: '1rem',}}
        alt={name}
        src="/path/to/profile-picture.jpg"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          { name }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { title }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          { location }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VSProfileCard;
