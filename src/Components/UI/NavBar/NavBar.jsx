import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/products">
          <a>Products</a>
        </Link>
        <a href="/products">Products2</a>        
      </nav>
    </>
  )
}