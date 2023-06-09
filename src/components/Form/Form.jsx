


//

import { useState } from "react";
import validation from "../Validation/validations"


const Form = () => {  
    const [ errors, setError ] = useState({})

    const [ userData, setUserData] = useState({
        email: '',
        password: ''
    })



    const handleChange = (evento) => {
//Tenemos que retornar un objeto que pisamos
            //Nosotros piamos y copiamos estamos usando setUserData
        setUserData({
                    ...userData, //Con esta linea estas copiando toadas la spropiedades con el objeto ose el campo emao y passwodr :vacio
                  //Para acerlo dinamico necesitamos brackets
                  //Los brackets son propiedades de un objeto
                   [evento.target.name] : evento.target.value 
                })
                setError(validation({ //Me estar etornanado un objeto y que se guarde en el estao errors
                  
    ...userData, 
                     [evento.target.name] : evento.target.value 
                  }))
                
              }
  
  
              
            
    



return(
    <form>
    <h1>Soy el formulario</h1>
    
    
    
    <label htmlFor="email">Email </label>
    <input type="email" name="email"    
    value={userData.email}
    onChange={handleChange} />
    
    
    <hr/> 
    
    <label htmlFor="password">Contraseña</label>
    <input type="text" name="password"  
    value={userData.password}
    onChange={handleChange} /> 

    <button type ='submit'>Enviar</button>
    
    </form>
    
  
    )
}
export default Form;