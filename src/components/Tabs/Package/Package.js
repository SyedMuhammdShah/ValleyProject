import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BigPic from '../../images/3.png'
import spic1 from '../../images/1.png'
import spic2 from '../../images/2.png'
import './Pckage.css';



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
            <div  className='Heading'>
            <h1>Basic Logo Package</h1>
            <p>For Startup & Small Businesses</p>
            <p>
                Our basic logo package is best-known for part-time small businesses or projects on a limited budget with a quick turn around time. With this package, you can get a budget-friendly business logo design from a team of our mid-level experienced logo designers based on your design preference. To ensure customer satisfaction, you can review those logo 
                design concepts and ask for changes in the design, colors or fonts if required.
                </p>
            </div>
        </Grid>
        <Grid item xs={5}>
        <img src={BigPic} alt="Logo" className="HoverImage" style={{width:'321px', height:'421px'}} />
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
        <Grid item xs={1} className="Gape">
        <img src={spic1} alt="Logo" className="HoverImage"   />
        </Grid>
        <Grid item xs={1}>
        <img src={spic2} alt="Logo" className="HoverImage" />
        </Grid>
      </Grid>
      </Grid>
    </Box>
        
      </Grid>
    </Box>
  );
}
