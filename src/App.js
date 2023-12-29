import { Router } from 'react-router-dom';
import './App.css';
import Products from './pages/products/products';

function App() {
  return (<Router>
    <Route path='/products' element={<Products />} />
  </Router>)
}

export default App;