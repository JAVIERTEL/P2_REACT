
import Header from './Header.js';
import SearchPage from './SearchPage.js';
import Product from './Product.js';
import NoMatch from './NoMatch.js';
import config from './config/config.js';
import { mockdata } from './constants/products.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route} from "react-router-dom"
import './App.css';
function App() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const download = async () => {
    let lista_productos;
    if(config.use_server){
			const res = await fetch(config.server_url);
			lista_productos = await res.json();
      setProductos(lista_productos.products);
    }else{
      lista_productos = mockdata.products;
      setProductos(lista_productos);
    }}
  useEffect(() => {
    async function fetchData() {
      await download();
				
			setTimeout(()=>{
				setLoading(false);
			},500);		
    }
    fetchData();
  }, []); //No pongo nada para que solo se ponga cuando recargue la página
  return (
    <div className="App">
      {loading 
      ? <img src={process.env.PUBLIC_URL + "/spinner.gif"} 
      className="spinner" id="loading" alt="spinner" />
      : <div>
          <Header/>
          <Routes>
            <Route path="/" element={<SearchPage theproducts={productos}/>}/>
            <Route path="/products/:productId" element={<Product product={productos}/>}/>
            <Route path="*" element={<NoMatch/>} />
          </Routes>
        </div>
      }
    </div>
  );
}
export default App;
