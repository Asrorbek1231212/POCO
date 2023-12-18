import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';
import { jadval } from './static';
function App() {
  return (
    <div className="App">
      <Navbar data={jadval}/>
      <Product data={jadval}/>
    </div>
  );
}

export default App;
