import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Kohls from './components/Kohls';
import HousingJapan from './components/HousingJapan';
import Kollab from './components/Kollab';
import PlansTonight from './components/PlansTonight';
import Footer from './components/Footer';

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="main-page-container">
        <SideNav />
        <div className="display-container">
          <ScrollToTop />
          <Routes>
            <Route path="/Kohls" element={<Kohls />} />
            <Route path="/HousingJapan" element={<HousingJapan />} />
            <Route path="/Kollab" element={<Kollab />} />
            <Route path="/PlansTonight" element={<PlansTonight />} />
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
