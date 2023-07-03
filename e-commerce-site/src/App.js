
import Home from './pages/Home';
import './styles/homepage.css';
import About from './pages/About';
import Productlist from './pages/Productlist';
import ProductView from './pages/Productview';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';




function App() {
  return (
    <div>
     <Home /><br/><br/>
     <About/><br/><br/>
     <Productlist/><br/><br/>
     <ProductView/><br/><br/>
     <Cart/><br/><br/>
     <Checkout/>
  
    </div>
  );
}

export default App;