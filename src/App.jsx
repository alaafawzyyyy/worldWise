import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import './App.css';
import Product from './pages/Product';

function App() {
  return (
  <BrowserRouter className="app">
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/App' element={ <AppLayout/> }/>
      <Route path='/pricing' element={ <div>Pricing Page</div> }/>
      <Route path='/product' element={ <Product/> }/>
      <Route path='/login' element={ <div>Login Page</div> }/>
    </Routes>
  </BrowserRouter>
)}
export default App;