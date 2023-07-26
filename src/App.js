import './App.css';
import Navbar from './Components/Navbar';
import 'swiper/css/navigation';
import SwiperSlides from './Components/Slider/SwiperSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SwiperSlides/>
    </div>
  );
}

export default App;
