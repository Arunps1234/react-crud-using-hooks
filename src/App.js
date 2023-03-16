import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import Edit from './Components/Edit';


function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path='/create' element={<Create/>}></Route>
<Route path="/Edit/:empid" element={<Edit/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
