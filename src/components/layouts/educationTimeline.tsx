import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';

import { Education } from '../Types/ProfileTypes';

export interface IEducationTimelineProps{
  educations : Education[]
}

export default function EducationTimeline(props : IEducationTimelineProps) {
  const { educations } = props ;

  return (
    <Timeline position="alternate">
      {
        educations.map((education, index)=>(
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {education.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <SchoolIcon sx={{ color: 'secondary.main' }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {education.degree}
              </Typography>
              <Typography variant='body2'>{education.institution}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}