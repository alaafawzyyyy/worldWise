import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import './App.css';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import { AuthProvider } from './contexts/FakeAuthContext';

function App() {
  return (
  <AuthProvider>
  <BrowserRouter className="app">
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/App' element={ <AppLayout/> }/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/product' element={ <Product/> }/>
      <Route path='/login' element={<Login/> }/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
)}
export default App;