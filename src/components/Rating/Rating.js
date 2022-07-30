import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Rating.css';
export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
      className='rating'
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <p>Folks think we’re pretty rad. We’re rated 4.8/5 from 37,496 customer reviews.</p>
    </Box>
  );
}
