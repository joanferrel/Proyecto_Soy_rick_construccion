
import Card from "./Card";
{/* 4 a-MAPEAR SE LLAMA en data.js hay informacion donde por cada uno se creara
una tarjeta*/}


{/* 3 Estaremos reutilizando al elemento cards para 
que se a el contenedor de todaslas cards*/}
{/* Cards sera un componenete padre */}
export default function Cards({ characters, onClose }) {
   return (
      <div>
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}
