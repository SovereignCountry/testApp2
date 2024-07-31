'use client';
import { createTheme } from '@mui/material/styles';
// import palette from './palette';
import breakpoints from './breakpoints';
import { MuiButton, MuiLinearProgress } from './components';

export const theme = createTheme({
  // palette,
  components: {
    MuiButton,
    MuiLinearProgress,
  },
  breakpoints,
});
