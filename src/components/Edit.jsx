import React,{useState,useEffect} from 'react'

import { TextField} from '@mui/material'
import {  useNavigate,useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import {getUser,editUser,delUser,getUsers} from '../cervices/api';
import { Button, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import { Link } from 'react-router-dom';
import {withStyles} from "@mui/styles";
import axios from 'axios';
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
    body:''
}
const Edit = ({classes}) => {
    const [user,setUser]=useState(initialValues);
    const [record,setRecords]=useState([]);
    const {id}=useParams();

    const navigate=useNavigate();
    useEffect(() => {
      getUserDetails();
      getUserData();


    }, []);
    // useEffect(()=>{
    // },[]);
    const getUserDetails=async()=>{
      let response=await getUsers();
      setRecords(response.data);
    }
  const getUserData=async()=>{
       const response=await getUser(id);
       setRecords(response.data);
       //console.log(response);
  }
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
      }
    const handleUpdate = async () => {
        await editUser(user,id);
        navigate('/bh');
    };
      const handleEdit=async(id)=>{

        // navigate(`/edit/${record.id}`);
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
        <h1>EDIT</h1>
        <TextField name="title" onChange={(e)=>onValueChange(e)}  value={record.title}variant="standard" />
        <br/>
        <TextField name="body" onChange={(e)=>onValueChange(e)} value={record.body} variant="standard" />
        <br/>
        <Button onClick={handleUpdate} variant="contained">Update</Button>
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
              <TableRow key={record.id}>
                <TableCell>{record.id}</TableCell>
                <TableCell>{record.title}</TableCell>
                <TableCell>{record.body}</TableCell>
                <Button component={Link} to={`edit/${record.id}`} variant="contained"
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

export default withStyles(styles)(Edit);