import './App.css';
import MobileVersion from './components/MobileVersion';
import DesktopVersion from './components/DesktopVersion';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MobileVersion />
        <DesktopVersion />
      </main>
    </div>
  );
}

export default App;
