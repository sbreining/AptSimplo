import { useState } from 'react';
import './App.css';
import DropdownInput from './DropdownInput/DropdownInput';
import ProductList from './ProductList/ProductList';
import products from './SimploAPI';

function App() {
  const products = callSimploApi();

  const [count, setCount] = useState(products.length);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AptSimplo</h1>
        <p>The simpler, less functional, uglier AptDeco!</p>
        <div className="input-container"><DropdownInput onKeyPress={setCount} /></div>
      </header>
      <body className="App-body">
        <ProductList count={count} products={products}/>
      </body>
    </div>
  );
}

function callSimploApi() {
  return products;
}

export default App;
