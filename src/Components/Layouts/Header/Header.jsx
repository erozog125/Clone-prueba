import './Header.css';
import {Logo} from '../../UI/Logo/Logo';
import {NavBar} from '../../UI/NavBar/NavBar';

export const Header = () => {
  return(
    <>
      <div className="header">
        <Logo />
        <NavBar />
      </div>
    </>    
  )
}