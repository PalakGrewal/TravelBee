import './App.css';
import Navbar from './Components/Navbar';
import 'swiper/css/navigation';
import SwiperSlides from './Components/Slider/SwiperSlider';
import Location from "./Components/location"
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SwiperSlides/>
      <Location />
      <Footer/>
    </div>
  );
}

export default App;
