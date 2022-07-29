import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PackageTabe from '../Tabs/PackageTab/PackageTab'
import './Tabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop:'80px' }} >
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="LOGO" className='TabsBox' {...a11yProps(0)} />
          <Tab label="BRANDING" className='TabsBox' {...a11yProps(1)} />
          <Tab label="WEBSITE" className='TabsBox'{...a11yProps(2)} />
          <Tab label="SEO" {...a11yProps(3)} />
          <Tab label="SOCIAL MEDIA" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PackageTabe/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>You’re busy enough without having to
worry about how you’re going to keep up with
your own body. Aezthetics has the desired
plan just for you.</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel><TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}