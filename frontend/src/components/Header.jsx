import { Navbar , Nav , Container , Badge ,Button , Form } from 'react-bootstrap'
import { FaShoppingCart , FaUser} from "react-icons/fa"
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logoglamourwear.png'
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className='sticky-top shadow-sm bg-white rounded'>
        <Navbar bg='white' variant='dark' expand='md'>
        <Container fluid className='d-flex justify-content-center'>
            <LinkContainer to='/'>
          <Navbar.Brand className='text-dark'>
            <img style={{width: "40px" , height: "40px" , backgroundColor: "#ffffff", marginRight: "10px"  }} src={logo} alt='name of the company'/>
            Glamour Wear
            </Navbar.Brand>
            </LinkContainer>
            
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
         
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button className='p-2' variant="outline-dark">Search</Button>
          </Form>
                <LinkContainer to='/cart'>
              <Nav.Link className='text-dark'>
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link className='text-dark'>
                <FaUser /> Sign In
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header