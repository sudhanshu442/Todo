import axios from 'axios';

const apiUrl = 'http://localhost:3001/users';


export const addUser= async(data) => {
    
  try{
    return await axios.post(apiUrl,data);

  }catch(err){
    console.log(err);
  }
}
export const getUsers=async()=>{
  try{
    return await axios.get(apiUrl);

  }catch(err){
    console.log(err);
  }
}
export const getUser=async(data)=>{
  try{
    return await axios.get(`${apiUrl}/${data}`);
  }catch(err){
    console.log(err);
  }
}

export const editUser=async(data,id)=>{
  try{
    return await axios.put(`${apiUrl}/${id}`,data);
  }catch(err){
    console.log(err);
  }
}
export const delUser=async(id)=>{
  try{
    return await axios.delete(`${apiUrl}/${id}`);
  }catch(err){
    console.log("del method",err.message);
  }
}
