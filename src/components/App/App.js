import React from 'react';
import PestShop from '../PestShop/PestShop';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import {DiseaseIdentifier} from '../Planty/planty'

const App = () => {
  return(
    <>
      {/* <Landing/> */}
      <DiseaseIdentifier/>
      <PestShop/>
      <Services/>
      <Blog/>
    </>
  )
}

export default App;
