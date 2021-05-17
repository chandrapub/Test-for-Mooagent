import './App.css';
import MobileVersion from './components/MobileVersion';
import DesktopVersion from './components/DesktopVersion';

function App() {
  return (
    <div className="app">
      <MobileVersion />
      <DesktopVersion />
    </div>
  );
}

export default App;
