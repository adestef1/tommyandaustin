import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Hospital from './pages/hospital';
import AtHome from './pages/home';
import China from './pages/china';
import Halloween02 from './pages/halloween02';

function App() {
  return (

    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/tommyandaustin' element={<Home />} />
        <Route path='/tommyandaustin/hospital' element={<Hospital/>} />
        <Route path='/tommyandaustin/athome' element={<AtHome/>} />
        <Route path='/tommyandaustin/china' element={<China/>} />
        <Route path='/tommyandaustin/halloween02' element={<Halloween02/>} />
    </Routes>
    </Router>
  );
}

export default App;
