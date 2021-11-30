import {Header} from '../../Layouts/Header/Header';
import { MainHome } from '../../Layouts/MainHome/MainHome';

export const Home = () => {
  return (
    <div className="home">
      <Header /> 
      <hr />           
      <MainHome />      
    </div>    
  );
};