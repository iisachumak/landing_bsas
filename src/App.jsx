import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Asesoramiento from './components/Asesoramiento'
import Contenedor from './components/Contenedor'


function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Asesoramiento />
      <Contenedor />
    </>
  )
}

export default App
