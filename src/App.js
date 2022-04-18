import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/Signup';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Component/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Aboutme from './Pages/AboutMe/Aboutme';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='aboutme' element={<Aboutme></Aboutme>}></Route>
      </Routes>
    </div>
  );
}

export default App;
