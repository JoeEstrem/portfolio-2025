import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import SideNav from './components/SideNav';
import Kohls from './components/Kohls';
import HousingJapan from './components/HousingJapan';
import Kollab from './components/Kollab';
import WaniKani from './components/WaniKani';
import PlansTonight from './components/PlansTonight';
import Home from './components/Home';
import Footer from './components/Footer';
import useFadeInOnScroll from './components/FadeInOnScroll';


function App() {
  useFadeInOnScroll('.fade-in-element');

  return (
    <Router>
    <div className="App">
      <div className="main-page-container">
        <SideNav />
        <div className="display-container">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Kohls" element={<Kohls />} />
            <Route path="/HousingJapan" element={<HousingJapan />} />
            <Route path="/Kollab" element={<Kollab />} />
            <Route path="/PlansTonight" element={<PlansTonight />} />
            <Route path="/WaniKani" element={<WaniKani />} />
          </Routes>

           <div>
            <Footer />
          </div>

        </div>
      </div>
  </div>
  </Router>
  );
}

export default App;
