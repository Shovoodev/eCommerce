
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='position-sticky shadow-lg p-3 mb-5 bg-white rounded' style={{ display: 'flex', height: '90vh'  , overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#fff" >
        
        <CDBSidebarHeader className='text-dark' prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: '#000000' }}>
            Insides
          </a>
        </CDBSidebarHeader>
      
        <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu className='text-dark'>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem className='text-dark' icon="columns">Women's & Girl's Fashion</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem className='text-dark' icon="table">New collections</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/profile" activeClassName="activeClicked">
            <CDBSidebarMenuItem className='text-dark' icon="user">Profile</CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem className='text-dark' icon="chart-line">About Us</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
        
      </CDBSidebar>
    </div>
  );
}

export default Sidebar