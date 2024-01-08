import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Asesoramiento from './components/Asesoramiento'
import Contenedor from './components/Contenedor'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import SalesAdvisorsCarousel from './components/Asesores'


function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Asesoramiento />
      <Contenedor />
      <Ubicacion />
      <SalesAdvisorsCarousel />
      <Footer />
    </>
  )
}

export default App
