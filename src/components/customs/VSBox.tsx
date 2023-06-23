import { Paper } from '@mui/material';
import * as React from 'react';

export interface IVSPaperProps {
    children : React.ReactNode
}

export function VSPaper (props: IVSPaperProps) {
  const { children } = props;

  return (
    <React.Fragment>
      <Paper elevation={8}>
          { children }
      </Paper>
    </React.Fragment>
  );
}
