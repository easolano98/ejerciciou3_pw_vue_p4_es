import axios from "axios"

export const buscarPlacaFachada=async(placa)=>{
    return await buscarPlaca(placa);
}


export const buscarTodosFachada=async()=>{
    return await buscarTodos()
    
}

const buscarTodos=async()=>{
    const data= axios.get(`http://localhost:8080/API/1.0/inventario/vehiculos/`).then(r=>r.data);

    return data
}

const buscarPlaca=async(placa)=>{

  const data= axios.get(`http://localhost:8080/API/1.0/inventario/vehiculos/${placa}`).then(r=>r.data);
  
  return data;

}