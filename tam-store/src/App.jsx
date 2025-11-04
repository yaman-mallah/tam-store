import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/genrall.css';
import './App.css'
import Home from './homePage/home';
import AllProducts from './product/AllProducts';
import ContactUsPage from './contact-us';
import { Route, Routes } from 'react-router';
import NavBar from './genrall components/navBar';
import ProfilePage from './profile/profilePage';
import CartPage from './cart/cartPage';
import SignInPage from './SignInPage/SignInPage';
import Error404 from './error404';
import ProductDetails from './product/ProductDetails';
import Footer from './genrall components/footer';

function App() {

  return (
    <>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<ContactUsPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/sign-in' element={<SignInPage/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='*' element={<Error404/>}/>
      </Routes>

      <Footer/>

    </>
  )
}

export default App
