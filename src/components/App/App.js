import React from 'react';
import Navbar from '../Navbar/Navbar';
import PestShop from '../PestShop/PestShop';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import {DiseaseIdentifier} from '../Planty/planty'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
// import Parallax from '../Parallax/Parallax';

const App = () => {
  return(
    <>
      {/* <Landing/> */}
      <Navbar/>
      <Landing/>
      {/* <Parallax/> */}
      <DiseaseIdentifier/>
      <PestShop/>
      <Services/>
      <Blog/>
      <Footer/>
    </>)
}

export default App;