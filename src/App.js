import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import Login from './page/auth/login';
import Register from './page/auth/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
