import React from 'react';
import PestShop from '../PestShop/PestShop';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import {DiseaseIdentifier} from '../Planty/planty'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';

const App = () => {
  return(
    <>
      {/* <Landing/> */}
      <Landing/>
      <DiseaseIdentifier/>
      <PestShop/>
      <Services/>
      <Blog/>
      <Footer/>
    </>)
}

export default App;