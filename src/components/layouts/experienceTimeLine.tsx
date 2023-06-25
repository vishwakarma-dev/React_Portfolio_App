import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
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
    <Timeline position="right" sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      {
        experiences.map((experience, index)=>(
          <TimelineItem key={index}>
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
              <Typography variant='body1'>{experience.company}</Typography>
              <Typography variant='body2'>{experience.duration}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  );
}