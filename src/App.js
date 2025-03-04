import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import { UserProvider } from './context';
import SignUp from './SignUp';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './bank-img1.jpg';
import img2 from './bank-img2.jpg';
import img3 from './bank-img3.jpg';

function App() {
  return (
    <HashRouter>
     
        <Navbar bg="dark" className="navbar" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href='#home' to="/" className="brand">YOURS BANK</Navbar.Brand>
            <Nav className="me-auto nav-links" style={{marginLeft:"30%"}}>
              <Nav.Link href='#home' >HOME</Nav.Link>
              <Nav.Link href='#register' >REGISTER</Nav.Link>
              <Nav.Link href='#deposit' >DEPOSIT</Nav.Link>
              <Nav.Link href='#cashback' >CASHBACK</Nav.Link>
              <Nav.Link href='#alldata' >ALL-DATA</Nav.Link>
              <Nav.Link href='#signup' >SIGNUP</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="home-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/cashback' element={<Cashback />} />
            <Route path='/alldata' element={<Alldata />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </div>
     
    </HashRouter>
  );
}

function Home() {
  return (
    <div className="homepage-container">
      <Carousel interval={5000} controls={false} indicators={true} fade={true} className="creative-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="carousel-caption-custom">
            <h5 className="caption-title">Your Financial Journey Starts Here</h5>
            <p className="caption-text">Join the future of banking with advanced tools and personalized service.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption className="carousel-caption-custom">
            <h5 className="caption-title">Secure & Reliable</h5>
            <p className="caption-text">Experience secure banking with our top-notch security measures.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption className="carousel-caption-custom">
            <h5 className="caption-title">Always at Your Service</h5>
            <p className="caption-text">Get support anytime, anywhere with our 24/7 customer service.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
