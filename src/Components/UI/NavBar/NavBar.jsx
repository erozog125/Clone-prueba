import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/products">
          <button>Products</button>
        </Link>        
      </nav>
    </>
  )
}