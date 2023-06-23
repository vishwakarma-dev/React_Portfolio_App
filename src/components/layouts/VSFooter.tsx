import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Fab } from '@mui/material';
import Facebook from './media/sm-logos/facebook.png'
import footer1 from './media/footer1.jpg'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          Vaibhav Satokar
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export interface IFooterProps {   
}


export function Footer (props: IFooterProps) {
  
  return (
    <React.Fragment>
      <Container maxWidth='xs'>
        <Box component="footer" sx={{ display: 'flex' , flexDirection : 'row', justifyContent:'space-around', padding:4, margin:'auto'}}>
          <Fab sx={{'&:hover': { background: "#f9004d", }}}></Fab>
          <Fab sx={{'&:hover': { background: "#f9004d", }}}></Fab>
          <Fab sx={{'&:hover': { background: "#f9004d", }}}></Fab>
          <Fab sx={{'&:hover': { background: "#f9004d", }}}></Fab>
        </Box>
      </Container>
    <Copyright />
    </React.Fragment>
  );
}
