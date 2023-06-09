

//Props : Es como ahora se llaman los atributos
import { Link } from "react-router-dom";
export default function Card({id,name,status,species,gender,origin
   ,image,onClose}) {

   return (



      
      <div>
         {/* 1 */}
         <button onClick={() => onClose(id)}>X</button>

         {/* Envolviendo el nonombre */}
         <Link to={`/detail/${id}`} >
         <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         {/* 2 */}
         <img src={image} alt='' /> 
      </div>
   );
}
