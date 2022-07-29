import React from "react";
import "./Home.css";
import hero from "../images/hero1.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import img1 from "../images/1-1-1.jpg"
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import image from "../images/3.png";
import Rating from "../Rating/Rating";
import Tabs from "../Tabs/Tabs";
import pic4 from "../images/pic4.jpeg";
import textPic from '../images/textPic.png';
import Footer from '../Footer/Footer';
export const Home = () => {
  return (
    <div className="MainClass">
      <div class="flex-container">
        <div className="herodiv1">
          <h1 className="heroHeading">Branding, Websites and UI+UX</h1>
        </div>
        <div className="herodiv2">
          <img src={hero} alt="Logo" className="heroImage" />
        </div>
      </div>
      <p style={{ fontSize: "40px", fontWeight: 700, marginBottom:'10px' }}>
          Treading
        </p>
      <Box sx={{ flexGrow: 1 }} className="tradBox">
        <Grid container spacing={2} className="tradGrid">
         
          <Grid item xs={1}>
            <img src={img1} alt="Logo" className="tradImage" />
            <p style={{}}>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img2} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img3} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img4} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img5} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img6} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img7} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
          <Grid item xs={1}>
            <img src={img1} alt="Logo" className="tradImage" />
            <p>Branding Design</p>
          </Grid>
        </Grid>
      </Box>

      <div class="TradHeading">
        <div
          className="herodiv1"
          style={{ marginLeft: "120px", marginTop: "100px" }}
        >
          <h1 className="heroHeading">Logo, Website, App Design and more!</h1>
        </div>
      </div>
      <div class="flexBox2">
        <div className="">
          <p className="">
            Get the perfect logo design – or any design in over 90 <br />
            categories! Whatever your business need or budget, we’ll help get it
            done.
          </p>
        </div>
        <div className="BTN_DesignCategories">
          <Stack spacing={9} direction="row">
            <Button variant="contained">See ALl Design Categories</Button>
          </Stack>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} style={{ padding: "10px" }}>
          <Grid item xs={1} className="ImageGrid">
            <img src={image} alt="Logo" className="ImageSlider" />
          </Grid>
          <Grid item xs={1}>
            <img src={image} alt="Logo" className="ImageSlider" />
          </Grid>
          <Grid item xs={1}>
            <img src={image} alt="Logo" className="ImageSlider" />
          </Grid>
          <Grid item xs={1}>
            <img src={image} alt="Logo" className="ImageSlider" />
          </Grid>
          <Grid item xs={1}>
            <img src={image} alt="Logo" className="ImageSlider" />
          </Grid>
        </Grid>
      </Box>
      <div>
        <Rating />
      </div>

      <div>
        <div className="PackHeading">
          <h1>Pricing Packages That Suit Your Budget</h1>
        </div>
        <div className="PackPara">
          <p className="PackPara">
            Whether you are a startup looking for a simple logo or a large
            enterprise in quest of a complete digital marketing solution, we
            make sure our packages are accommodating all your needs, demands and
            desires.
          </p>
        </div>
      </div>
      <div>
        <Tabs />
      </div>
      <div className="TextDiv">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="TextFlex">
            <Grid item xs={6}>
              <h1>
                Want to get your <br /> business started?
              </h1>
            </Grid>
            <Grid item xs={4}>
              <h1>Try these few Steps!</h1>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="TextDiv">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="TextFlex2">
            <Grid item xs={4}>
              <h1>Website</h1>
            </Grid>
            <Grid item xs={4}>
              <h1>Apps</h1>
            </Grid>
            <Grid item xs={4}>
              <h1>Branding</h1>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="TextImage">
        <div class="flex-TextImage">
          <div className="TextImaHeading">
            <p className="TextPara">
              The ultimate fitness app that's a cut above the rest
            </p>
            <br />
            <p className="TextPara2">
              You’re busy enough without having to<br/>
               worry about how you’re going to keep up with <br/>
               your own body. Aezthetics has the desired<br/>
                plan just for you.
            </p>
            <div className="TextButton">
          <Button variant="outlined">Outlined</Button>
          </div>
          </div>
          
          
          <div className="ImageII">
            <img src={pic4} alt="Logo" className="TextImg" />
          </div>
        </div>
      </div>
      <div className="TextImage">
        <div class="flex-TextImage">
           
        <div className="ImageII">
            <img src={textPic} alt="Logo" className="TextImg" />
          </div>
          <div className="TextImaHeading">
            <p className="TextPara2">
              The ultimate fitness app that's a cut above the rest
            </p>
            <br />
            <p className="TextPara22">
              You’re busy enough without having to<br/>
               worry about how you’re going to keep up with <br/>
               your own body. Aezthetics has the desired<br/>
                plan just for you.
            </p>
            <div className="TextButton">
          <Button variant="outlined">Outlined</Button>
          </div>
          </div>
          
         
        </div>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
};
