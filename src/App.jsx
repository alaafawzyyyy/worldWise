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
      <Route index element={ <Home/>}/>
      <Route path='/App' element={ <AppLayout/> }>
      <Route index element={<h1>Welcome to the App</h1>} />
      <Route path='cities'  element={<h1>Cities</h1>} />
      <Route path='countries' element={<h1>Countries</h1>}/>
      </Route>
      <Route  index path='/pricing' element={<Pricing/>}/>
      <Route path='/product' element={ <Product/> }/>
      <Route path='/login' element={<Login/> }/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
)}
export default App;