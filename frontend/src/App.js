import  { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Header/>
      <div className='d-flex'>
      <div>
        <Sidebar/>
      </div>
      <div>
      <main className=''>
        <Container>
        <Outlet />
        </Container>
      </main>
      </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App