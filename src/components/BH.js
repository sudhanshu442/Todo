import React,{useState,useEffect} from 'react'

import { TextField} from '@mui/material'
import {  useNavigate,useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import {addUser,getUsers,delUser} from '../cervices/api';
import { Button, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { Link } from 'react-router-dom';
import {withStyles} from "@mui/styles";

const apiUrl = 'http://localhost:3001/users';

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
const initialValues={
    title:'',
    body:'',
}
const BH = ({classes}) => {
    const [user,setUser]=useState(initialValues);
    const [record,setRecords]=useState([]);
    const {id}=useParams();

    const navigate=useNavigate();

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
      }
    const handleSubmit = async () => {
        await addUser(user);
        // navigate('/b');
        alert("Data saved successfully");
        getUserDetails();
        setUser(initialValues);


    };
    useEffect(() => {
        getUserDetails();
      }, []);
      const getUserDetails=async()=>{
        let response=await getUsers();
        setRecords(response.data);
      }
      const handleEdit=async(id)=>{

        navigate(`/edit/${id}`);
        console.log(id);
      }
      const handleDelete=async(id)=>{
        await delUser(id);
        getUserDetails();  
     }
  return (
    <>
    <Box sx={{m:'2% auto 0 auto', height:'350px', width:'250px', border:'1px solid black' , display:"flex",
    justifyContent:"center",
    alignItems:"center"}}>

    <div className={classes.add}>
        <h1>ADD</h1>
        <TextField name="title" value={user.title} onChange={(e)=>onValueChange(e)} label="Title" variant="standard" />
        <br/>
        <TextField name="body" value={user.body}  onChange={(e)=>onValueChange(e)} label="body" variant="standard" />
        <br/>
        <Button onClick={()=>handleSubmit()} variant="contained">Submit</Button>
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
            record && record.length>0?
            record.map((record, blogIndex) => (
              <TableRow>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.title}</TableCell>
                <TableCell>{record.body}</TableCell>
                <Button onClick={()=> handleEdit(record.id)} 
                // component={Link} to={`edit/${record.id}`} 
                variant="contained"
                 style={{marginRight:'10px',marginTop:'8px',lineHeight:'20px'}}>EDIT</Button>

                <Button onClick={() => handleDelete(record.id)} style={{marginTop:'8px',lineHeight:'20px',}} variant="contained" color="error">DELETE</Button>
            </TableRow>
            )):"NO DATA"
          }
        </TableBody>
      </Table>
    </div>
    </>
  )
}

export default withStyles(styles)(BH);