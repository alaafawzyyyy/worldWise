import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import './App.css';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import { AuthProvider } from './contexts/FakeAuthContext';
import CityList from './components/CityList';
import { useState, useEffect } from 'react';
import CountryList from './components/CountryList';
import City from './components/City';
import PageNotFound from './pages/PageNotFound.jsx'
import Form from './components/Form.jsx'

const BASE_URL = "http://localhost:8000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    async function fetchCities() {
      try { 
        setIsLoading(true);
        const res= await fetch(`${BASE_URL}/cities`)
        const data=await res.json();
        setCities(data);}
      catch (error) {
        alert("Error fetching cities:", error);
    }
      finally{
        setIsLoading(false);
    }} 
    fetchCities()},[])

  return (
  <AuthProvider>
  <BrowserRouter className="app">
    <Routes>
      <Route index element={ <Home/>}/>
      <Route  index path='pricing' element={<Pricing/>}/>
      <Route path='product' element={ <Product/> }/>
      <Route path='/login' element={<Login/> }/>

      <Route path='app' element={ <AppLayout/> }>
      <Route index element={<Navigate replace to="cities"/>}/>
      <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>} />
      <Route path="cities/:id" element={<City />} />
      <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>}/>
      <Route path='form' element={<Form/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
  </AuthProvider>

)}
export default App;