import './Logo.css';
import logo from '../../../Images/Luna.jpg';

export const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}