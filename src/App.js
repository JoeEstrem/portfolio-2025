import './App.css';
import Kohls from './components/Kohls';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <div className="main-page-container">
        <SideNav />
        <div className="display-container">
          <Kohls />
        </div>
      </div>
  </div>
  );
}

export default App;
