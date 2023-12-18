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
      <h2>asror</h2>
    </div>
  );
}

export default App;
