import Lista from './Lista.js'
import { useState } from 'react';
import Location from './Location.js';
export default function SearchPage(props){
    const [filtro, setFiltro] = useState("");
    const [valor, setValor] = useState("All");
    const [lista, setLista] = useState(props.theproducts);
    const change = (e) => {
        let val=e.target.value;
        filtrado(val,filtro);
        setValor(val);
    };
    const filtrado = (selector,filtro) => {
        let filter=props.theproducts;
        if(selector != "All"){
           filter=(filter.filter((element)=>{
              if(element.category == selector){ 
                  return(element)
              }
          }))
        }
        if(filtro){
          filter=(filter.filter((element)=>{
              return(
                  element.title.toLowerCase().includes(filtro.toLowerCase())
              )
          }))
        }
        setLista(filter);
      }
    const optionMap = () => {
        let array=[];
        let seleccion = "";
        array = props.theproducts.filter((element)=>{
            if(seleccion != element.category){
                seleccion=element.category;
                return element;
            }
        });
        return(array);
    }
    let filtrados = optionMap();
    return(<div>
        <Location/>
        <h2 id="catalogo">Catálogo</h2>
        <ul className="container">
        <li id="busqueda">
            <p>Buscar: </p>
            <input id="filtro" value={filtro} placeholder="Escriba lo que quiere buscar" onChange={(e) => setFiltro(e.target.value)}></input><br/>
            <button id="buscador" onClick={() => filtrado(valor,filtro)}>Buscar</button>
        </li>
        <li>
            <p className="filtros">Filtrar: </p>
            <select id="selector" name="filtros" value={valor} onChange={(e) => change(e)}>
                <option value="All">All</option>
                {filtrados.map((element)=>{
                        return <option key={element.category} value={element.category}>{element.category}</option>
                })
                }
            </select>
        </li>
        </ul>
        <Lista lista={lista}/>
    </div>
    )     }