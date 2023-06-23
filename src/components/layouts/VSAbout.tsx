import * as React from 'react';
import { About } from '../Types/ProfileTypes';
import { Box, Divider, Typography } from '@mui/material';

export interface IVSAboutProps {
    About : About
}

export function VSAbout (props: IVSAboutProps) {
    const { quote, description } = props.About;

  return (
    <React.Fragment>
        <Box padding={4}>
            <Typography align='center' variant='h3' fontWeight={500}>About</Typography>
            <Divider />
            <Typography align='left' fontFamily={'cursive'} fontWeight={800} gutterBottom>{ quote }</Typography>
            <Typography align='left' fontWeight={500} paragraph>{ description }</Typography>
        </Box>      
    </React.Fragment>
  );
}
