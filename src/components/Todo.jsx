import {Box, List, ListItem,IconButton ,Grid,TextField,InputAdornment} from '@mui/material'
import DeleteIcon  from '@mui/icons-material/Delete' 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'

const Todo = () => {
  return (
    <>
    <Grid className="app" spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}}>
      <header>
            <h1>TODO LIST</h1>
            <br/>
        </header>
        <Grid item xs={12} xl={12} md={12} className='todo-list'>
          <List >
          <ListItem>
            
          <TextField type="number" placeholder="1" style={{ marginRight: '15px',backgroundColor:'purple',borderRadius:'6px'}}/>
          <TextField type="text" style={{backgroundColor:'purple',borderRadius:'6px'}}
      placeholder="Enter text"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} 
    />    
      <div className="actions">
                <button><DeleteIcon xs={8}/></button>
      </div>
    </ListItem>  
    <ListItem>
          <TextField type="number" placeholder="1" style={{ marginRight: '15px',backgroundColor:'purple',borderRadius:'6px'}}/>
          <TextField style={{backgroundColor:'purple',borderRadius:'6px'}}
      type="text"
      placeholder="Enter text"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} 
    />      
    <div className="actions">
                <button><DeleteIcon xs={8}/></button>
               </div>
          </ListItem>
    </List>

    
        
    </Grid>
    <Grid item xs={12} xl={12} md={12} className='last' >
    
          <TextField type="text" placeholder="write" style={{width:'100%',padding:"20px",backgroundColor: "purple",borderRadius:"6px"}}/>
          <div className="actions">
            <button><KeyboardArrowUpIcon xs={8}/></button>
          </div>
        </Grid>   
      </Grid>
    </>
  )
}

export default Todo