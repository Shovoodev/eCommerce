import { Navbar , Nav , Container , Badge , NavDropdown  } from 'react-bootstrap'
import { FaShoppingCart , FaUser} from "react-icons/fa"
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logoglamourwear.png'
import { useSelector , useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  }

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
              <SearchBox />
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
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header