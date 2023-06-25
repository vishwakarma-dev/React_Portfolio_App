import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
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
    <Timeline position="right" sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      {
        educations.map((education, index)=>(
          <TimelineItem key={index}>
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
              <Typography variant='body1'>{education.institution}</Typography>
              <Typography variant='body2'>{education.duration}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}