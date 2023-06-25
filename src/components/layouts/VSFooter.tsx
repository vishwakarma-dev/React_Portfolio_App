import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Fab } from '@mui/material';
import { Contact } from '../Types/ProfileTypes';
import Github  from '../media/sm-logos/github.png'
import LinkedIn  from '../media/sm-logos/linkedin.png'
import { CustomIcon } from '../customs/VSSVGIcon';


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
  contactInfo : Contact   
}


export function Footer (props: IFooterProps) {
  const contactInfo = props ;

  const contactIcons = [
    { name: 'Email', icon: `${LinkedIn}`, href: `mailto:${contactInfo.contactInfo.email}` },
    { name: 'Phone', icon: `${LinkedIn}`, href: `tel:${contactInfo.contactInfo.phone}` },
    { name: 'LinkedIn', icon: `${LinkedIn}`, href: contactInfo.contactInfo.linkedin },
    { name: 'GitHub', icon: `${Github}`, href: contactInfo.contactInfo.github }
  ];
  
  return (
    <React.Fragment>
      <Container maxWidth='xs'>
      <Box component="footer" sx={{ display: 'flex' , flexDirection : 'row', justifyContent:'space-around', padding:4, margin:'auto'}}>
      {
        contactIcons.map((contact) =>{
          return (
            <Fab sx={{'&:hover': { background: "#f9004d", }}}>
              <Link href={contact.href} sx={{textDecoration:''}}>
                {/* <CustomIcon src={contact.icon} alt={contact.name}  /> */}
              </Link>
            </Fab>
          )
        })
      }
      </Box>
      </Container>
    <Copyright />
    </React.Fragment>
  );
}
