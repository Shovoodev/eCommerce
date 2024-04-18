import  { Container } from 'react-bootstrap'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from './slices/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
      const currentTime = new Date().getTime();

      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
  }, [dispatch]);
  return (
    <div>
      <ToastContainer />
      <Header/>
      <div className='d-flex gap-3'>
      <div>
        <Sidebar/>
      </div>
      <div >
        <Container>
        <Outlet />
        </Container>
      </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App