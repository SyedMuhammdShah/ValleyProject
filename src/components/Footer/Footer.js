import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Footer.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="FooterMain">
        <Grid item xs={4}>
          <Item className='Item'>
          <h4 className='fpp'>Let's work together</h4>
            <h4 className='mainHead'>
            Start A Project →
            </h4>
            <h4 className='emailff'>Business@valleyofdesings.com</h4>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className='Item'>
          <h4 className='fpp'>Let's work together</h4>
            <h4 className='mainHead'>
            Start A Project →
            </h4>
            <h4 className='emailff'>Business@valleyofdesings.com</h4>
          </Item>
        </Grid>   
         <Grid item xs={4}>
          <Item className='Item'>
          <h4 className='fpp'>Let's work together</h4>
            <h4 className='mainHead'>
            Start A Project →
            </h4>
            <h4 className='emailff'>Business@valleyofdesings.com</h4>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
