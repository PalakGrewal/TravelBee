import './App.css';
import Navbar from './Components/Navbar';
import 'swiper/css/navigation';
import SwiperSlides from './Components/Slider/SwiperSlider';
import Location from "./Components/location"

function App() {
  return (
    <div className="App">
      <Navbar />
      <SwiperSlides/>
      <Location/>
    </div>
  );
}

export default App;
