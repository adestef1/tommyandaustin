import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/2001';

function App() {
  return (

    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/tommyandaustin' element={<Home />} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
    </Routes>
    </Router>
  );
}

export default App;
