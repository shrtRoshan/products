import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ProductsTable } from './ProductTable';

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

function App() {
  const [search, setSearch] = useState('');
  const [inStockOnly, setInStockOnly] =useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const toggleInStock = (e) =>{
    setInStockOnly(e.target.checked);
  }

  return (
    <div className='app'>
      <input placeholder='Search ...' onChange={handleChange} value={search}></input>
      <div>
        <input type='checkbox' onChange={toggleInStock} checked={inStockOnly} id='checkbox'></input>
        <label htmlFor='checkbox'>Show only products in stock</label>
      </div>
      <ProductsTable category='Fruits' products={products} />
    </div>
  );
}

export default App;
