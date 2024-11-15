import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav >
        <ul style={{ listStyleType: 'none', padding: 0, backgroundColor:'lightblue', justifyContent:'left', height:'3em', textDecoration:'none', margin: '20px', marginTop:'2px' }}>
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

export default Navbar;
