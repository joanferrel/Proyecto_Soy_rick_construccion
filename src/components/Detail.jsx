import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail =() =>{
    /*     3. crea un estado local con el nombre "character" que se inicialice como un objeto vacío.*/    
    const[character, setCharacter]=useState(null)
    
    
    
      /*   2.Importa el hook useParams y obten el id del personaje.: */
        const { id } = useParams()
    
    
        axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        // Procesar la respuesta exitosa aquí
      })
      .catch(error => {
        // Manejar el error de la solicitud aquí
        console.error(error);
      });
    
    
    
    
    
    
        useEffect(() => {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    
            console.log(data);
    
               if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]);
    
         
    
    
    
    
    
    
        return(
        //Tenmos que redenrizar cada una de la spropiedades de nuestro personajes
       <>
            <h1>Detail</h1>
            {
                //characters es el array de objetos segun lo que pusistes arriba preguntaramos(?) que si hay character rederizaras un div y si no haces algo(:)
                //Aca estamos recorriendo characteres
                character !== null ? (
                        //Con esto s eentra renderizando cada propiedad que es l objeto del persnaje
                        //Si est o es verdadero renderiza  ay ala origen e imagen 
                        <div>
                        <h2>name:{character.name}</h2>
                        <h2>Status:{character.status}</h2>
                        <h2>Species:{character.species}</h2>
                         {/* //Aveces los personajes que no tienen la propiedad origen  ya o hay que preguntar si existe es propiedad */}
                         <h2>Origin:{character.origin?.name}</h2>
                        <h2>Gender:{character.gender}</h2>
    
    
                       
                        <img src={character.image} alt={character.image} />
                        
                        
                        
                        </div>
    
                    )
                    //Aca le decimo s si no hay nada no muestres nada
                    :("")
                
    
    
            }
         
         </>)
    }
    export default Detail;