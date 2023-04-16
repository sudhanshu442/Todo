import { Button, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { WithStyles } from '@mui/styles'; 

const Home = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(data=>(setRecords(data))).catch(err=>console.log(err));
  
   
  }, []);
  useEffect(() => {
    const blogs = localStorage.getItem('blogs');
    setBlogs(JSON.parse(blogs));
  }, [blogs]);
  const handleDelete = (blogOutIndex) => {
    const _blogs = blogs.filter((blog, blogInIndex) => {
      if (blogInIndex !== blogOutIndex) {
        return blog;
      }
    })
    setBlogs(_blogs);
    localStorage.setItem('blogs', JSON.stringify(_blogs));
  }

  const handleEdit = (blogIndex) => {
    localStorage.setItem('editIndex', blogIndex);
    navigate('/edit');
  }
  return (
    <div className="home">
      <br />
      <Table>
        <TableHead className="th">
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Decription</TableCell>
            <TableCell>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {
            records.map((blog,blogIndex) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                {/* <TableCell>{blog.title}</TableCell> */}
                
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.description}</TableCell>
                <Button onClick={() => handleEdit(blogIndex)} variant="contained" style={{marginRight:10}}>EDIT</Button>

                <Button onClick={() => handleDelete(blogIndex)} variant="contained" color="error">DELETE</Button>



              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <br />
    </div>
  )
}

export default Home;
