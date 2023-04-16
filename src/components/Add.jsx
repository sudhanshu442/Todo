import React,{useState,useEffect} from 'react'

import { TextField} from '@mui/material'
import {  useNavigate,useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {withStyles} from "@mui/styles";
const styles={
  margin:0,
  add:{
    margin:'auto',
    gap:'10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  home:{
    width:'80%',
    margin:'20px auto 0 auto',
    gap:'10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

}
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const Add = ({classes}) => {
    const {id}=useParams();
    const [records, setRecords] = useState({
      id:id,
      title:'',
      description:'',
    });
    const [title, setTitle] = useState('t');
    const [description, setDescription] = useState('d');
    const navigate=useNavigate();
    const handleTitleChange=(e)=>{

      setTitle(e.target.value);
    }
    const handleDescChange=(e)=>{
      setDescription(e.target.value);
    }
    useEffect(() => {
      fetch(apiUrl).then(res=>res.json()).then(data=>(setRecords(data)
        )).catch(err=>console.log(err));
    }, []);
    // const getUser=async(data)=>{
    //   const response=await getUser(id);
    //   setRecords(response.data);
    // }
  const handleDelete = async(id) => {
    await fetch(`${apiUrl}/${id}`,{method:'DELETE'});
    const updatedRecords = records.filter((records) => records.id !== id);
    setRecords(updatedRecords);
    setTitle("");
    setDescription("");
  }

  const handleEdit = (id) => {
    const updatedPost = { title, description };
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = records.map((post) =>
          records.id === id ? { ...records, ...data } : records
        );
        setRecords(updatedPosts);
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.log(error));
    navigate(`/edit/${records.id}`,{records});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, description };
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      const newPost = await response.json();
      setRecords([...records, newPost]);
      setTitle("");
      setDescription("");
      navigate('/');
    } else {
      console.log("Failed to add post");
    }
  };


    // const handleSubmit=async(e)=>{
    // e.preventDefault();
    // const data ={title,description};
    // const response = await fetch(apiUrl, {
      // method: "POST",
      // body: JSON.stringify(data),
      // headers: {
        // "Content-type": "application/json; charset=UTF-8",
      // },
    // });
    // navigate('/')
  // }
  
    
    
    
      
  return (
    <>
    <Box sx={{m:'2% auto 0 auto', height:'350px', width:'250px', border:'1px solid black' , display:"flex",
    justifyContent:"center",
    alignItems:"center"}}>

    <div className={classes.add}>
        <h1>ADD</h1>
        <TextField value={title} onChange={(e)=>handleTitleChange(e)} label="Title" variant="standard" />
        <br/>
        <TextField value={description} onChange={(e)=>handleDescChange(e)}label="description" variant="standard" />
        <br/>
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
    </div>
    <br/>
  





    
    
    </Box>

    <div className={classes.home}>
      <br />
      <Table>
        <TableHead className={classes.th}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Decription</TableCell>
            <TableCell>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            records && records.length>0?
            records.map((records, blogIndex) => (
              <TableRow>
                <TableCell>{records.id}</TableCell>
                <TableCell>{records.title}</TableCell>
                <TableCell>{records.description}</TableCell>
                <Button onClick={() => handleEdit(records.id)} variant="contained"
                 style={{marginRight:'10px',marginTop:'8px',lineHeight:'20px'}}>EDIT</Button>

                <Button onClick={() => handleDelete(records.id)} style={{marginTop:'8px',lineHeight:'20px',}} variant="contained" color="error">DELETE</Button>
            </TableRow>
            )):"NO DATA"
          }
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default withStyles(styles)(Add);