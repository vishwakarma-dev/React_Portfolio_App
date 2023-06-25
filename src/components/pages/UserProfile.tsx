import * as React from 'react';
import { IUserProfile  } from '../Types/ProfileTypes';
import { profile} from '../ProfileData/profileData';
import ExperienceTimeline from '../layouts/experienceTimeLine';
import { Box, Card, CardContent, CardMedia, Container, Divider, Fab, Typography, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';


import Code1 from '../media/backgroundImages/code1.jpg'
import VSProfile from '../media/profile.jpg'
import EducationTimeline from '../layouts/educationTimeline';
import { Footer } from '../layouts/VSFooter';


export interface IUserProfileProps {
}

export function UserProfile (props: IUserProfileProps) {
    const [ userProfile, setUserProfile ] =React.useState<IUserProfile>(profile)
    const [ name, setName ] = React.useState<IUserProfile['name']>(profile.name) ;
    const [ title, setTitle ]  = React.useState<IUserProfile['title']>(profile.title)
    const [ location, setLocation ] = React.useState<IUserProfile['location']>(profile.location) ;
    const [ about,setAbout ] = React.useState<IUserProfile['about']>(profile.about)
    const [ experiences, setExperiences ]  = React.useState<IUserProfile['experiences']>(profile.experiences)
    const [ education, setEducation ]  = React.useState<IUserProfile['education']>(profile.education)
    const [ skills, setSkills ]  = React.useState<IUserProfile['skills']>(profile.skills)
    const [ projects, setProjects ]  = React.useState<IUserProfile['projects']>(profile.projects)
    const [ languages, setLanguages ]  = React.useState<IUserProfile['languages']>(profile.languages)
    const [ contacts, setContacts ]  = React.useState<IUserProfile['contact']>(profile.contact)

  return (
    <React.Fragment>
      <Container maxWidth='md'>
        <Box mt={4}  >
          <Card elevation={8} sx={{padding:3.5}}>
            <CardMedia
            sx={{ height: 140 }}
            image={Code1}
            title="Card Header" 
            />
            <CardContent>
              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'} paddingLeft={5} paddingRight={5}>
                <Box component={'div'}>
                  <Fab sx={{height:120, width:120}} color='error'>
                    <Avatar sx={{ height:'95%', width:'95%'}}
                    alt = "Vaibhav Satokar"
                    src = {VSProfile}
                    />
                  </Fab>
                </Box>
                <Box component={'div'}>
                  <Typography align='center' fontFamily={'Algar'} fontWeight={600}  variant="h3" component="div">
                    {name}
                  </Typography>
                  <Typography align='center' gutterBottom variant="body1" component="div">
                    {title}
                  </Typography>

                  <Divider />
                </Box>
              </Box>
            </CardContent>  
          </Card>
        </Box>
        <Box mt={3.5}>
          <Card elevation={8} sx={{padding:4}}> 
            <CardContent>
              <Typography align='center' fontFamily={'Algar'} fontWeight={600}  variant="h4" gutterBottom>
                    About
              </Typography>    
              <Divider />
              <Typography fontStyle={'italic'} gutterBottom component={'q'}>{about.quote}</Typography>
              <Typography variant="body2" color="text.secondary" component={'p'}>
                {about.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mt={3.5}>
          <Card elevation={8} sx={{padding:2}}> 
            <CardContent>
              <Typography align='center' fontFamily={'Algar'} fontWeight={600}  variant="h4" gutterBottom>
                    Experience
              </Typography>    
              <Divider />
              <ExperienceTimeline experiences={experiences} />
            </CardContent>
          </Card>
        </Box>
        <Box mt={3.5}>
          <Card elevation={8} sx={{padding:2}}> 
            <CardContent>
              <Typography align='center' fontFamily={'Algar'} fontWeight={600}  variant="h4" gutterBottom>
                    Education
              </Typography>    
              <Divider />
              <EducationTimeline educations={education} />
            </CardContent>
          </Card>
        </Box>
        {/* <Box mt={3.5}>
          <Card elevation={8} sx={{padding:4}}> 
            <CardContent>
              <Typography align='center' fontFamily={'Algar'} fontWeight={600}  variant="h4" gutterBottom>
                    Skills
              </Typography>    
              <Divider />
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                {
                  skills.map((skill, index)=>(
                    <Paper sx={{padding : 2}} elevation={10}>{skill}</Paper>
                    ))
                }
               </Box>
            </CardContent>
          </Card>
        </Box> */}
        <Footer contactInfo={contacts} />
      </Container>
    </React.Fragment>
  );
}
