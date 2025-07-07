import React from 'react'
import Navbar from './componets/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './componets/Footer/Footer';


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App
