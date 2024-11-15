import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', margin: '0 15px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 15px' }}> 
            <Link to="/about">About</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 15px' }}>
            <Link to="/services">Services</Link>
          </li>
          <li style={{ display: 'inline', margin: '0 15px' }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
