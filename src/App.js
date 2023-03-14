import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/Create';


function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path='/create' element={<Create/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
