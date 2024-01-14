
import './App.css';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
