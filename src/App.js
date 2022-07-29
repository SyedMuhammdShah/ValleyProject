import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainLogo from './images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {About} from './components/About/About';
import {Blogs} from './components/Blogs/Blogs';
import {Home} from './components/Home/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar bg="light" variant="light" >
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={MainLogo} alt="Logo" className='Mainlogo'/></Navbar.Brand>
        <Nav className="Main_Nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Logo Design</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Ecommerce</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Mobile App</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Branding</NavDropdown.Item>
              <NavDropdown.Item href="#action3">SEO</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> 
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
     <div>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  </>
 
  );
}

export default App;
