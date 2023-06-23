import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import { Experience } from '../Types/ProfileTypes';

export interface IExperienceTimelineProps{
  experiences : Experience[]
}

export default function ExperienceTimeline(props : IExperienceTimelineProps) {
  const {experiences} = props ;

  return (
    <Timeline position="alternate">
      {
        experiences.map((experience, index)=>(
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {experience.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <WorkHistoryIcon sx={{ color: 'secondary.main' }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {experience.position}
              </Typography>
              <Typography variant='body2'>{experience.company}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}