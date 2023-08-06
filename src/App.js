import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
