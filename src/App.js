import './App.css';

import Cards from './components/Cards.jsx';
import Nav from './components/Nav'
import { useState } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';




//En la terminal poner ::npm install axios
import axios from 'axios';

function App() {
   const location =useLocation();
   let [characters, setCharacters] = useState([]);


   

   function onSearch (id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
   
      .then(({data}) => {
         const char = characters?.find(e=> e.id === data.id)
         if (char) {
            alert("estoy listo")
         } else if(data.id !== undefined) {
             setCharacters(characters =>[... characters,data]);
         }
         else {
            alert('personaje no encontrado')
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }


   return (
      <div>
     {
     location.pathname !=='/'? <Nav onSearch={onSearch}/>:null
      }
   <Routes>

  <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
  <Route path="/about" element={<About/> }/>
  <Route path="/detail/:id" element={<Detail/> }/> 
  <Route path="/" element={<Form/>}/>

  </Routes>
  </div>

   );
}





export default App;
