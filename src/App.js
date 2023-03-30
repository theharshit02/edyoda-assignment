import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Module from './components/Module/Module'
import Instructor from './components/Instructor/Instructor'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/module' element={<Module/>}/>
          <Route path='/instructor' element={<Instructor/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
