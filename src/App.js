import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home.js';
import Landing from './components/Pages/Landing/Landing.js';
import AddData from './components/AddData/AddData';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add_client" element={<AddData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
