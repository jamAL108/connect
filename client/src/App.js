import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog/:id' element={<Blog/>}/>
    </Routes>
  );
}

export default App;