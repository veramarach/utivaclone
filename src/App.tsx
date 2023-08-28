import React from 'react'
import Header from "./Components/Header/Header"
import Landingpage from './Components/Landingpage';
import Globalstyle from './Components/Globalstyle';
import Footer from './Components/Footer/Footer';

const App :React.FC= () => {
  return (
    <div>
      <Globalstyle />
      <Header />
      <Landingpage />
      <Footer/>

    </div>
  )
}

export default App;