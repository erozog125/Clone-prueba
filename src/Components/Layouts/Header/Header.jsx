import {Logo} from '../../UI/Logo/Logo';
import {NavBar} from '../../UI/NavBar/NavBar';
import './Header.css';

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