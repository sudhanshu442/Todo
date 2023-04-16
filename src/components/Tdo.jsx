import {Box, List, ListItem,IconButton ,Grid,TextField,InputAdornment} from '@mui/material'
import DeleteIcon  from '@mui/icons-material/Delete' 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'
import {withStyles} from "@mui/styles";
const styles={
    margin:'0',
    padding:'0',
    boxSizing:'border-box',

    app:{
        '&::-webkit-scrollbar': {
            display: 'none',
          },
        color:'#fff',
        backgroundColor:'#1e223d',
        height:'calc(100vh - env(safe-area-inset-bottom))',
        paddingRight:'calc(env(safe-area-inset-right) + 16px)',
    },
    hdr:{
        margin:'0 0 0 12px',
    },
    num:{
        width:'70px',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    text:{
        width:'100%',
        flexGrow:'2',
        flexDirection:'row',
    },
    todolist:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        position:'relative',


    },
    last:{
        bottom:'0',
        color:'#fff',
        position:'absolute'
    },
    tt:{
        width:'100%',
    },
}
const Tdo = ({classes}) => {
  return (
    <>
    <Grid className={classes.app} spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}} style={{backgroundColor:'#1e223d'}}>
      <header >
            <h1 className={classes.hdr}>TODO LIST</h1>
            <br/>
        </header>
        <Grid item xs={12} xl={12} md={12} className={classes.todolist}>
          <List >
          <ListItem>
            
          <TextField  className={classes.num} placeholder="1" style={{marginRight: '15px',backgroundColor:'purple',borderRadius:'9px'}}/>
          <TextField className={classes.text} type="text" style={{backgroundColor:'purple',borderRadius:'9px'}}
      placeholder="Enter text"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="delete" size="small" style={{color:"#fff"}}>
              <DeleteIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} 
    />    
      {/* <div className="actions"> */}
                {/* <button><DeleteIcon xs={8}/></button> */}
      {/* </div> */}
    </ListItem>  
    <ListItem>
          <TextField className={classes.num} placeholder="1" style={{ marginRight: '15px',backgroundColor:'purple',borderRadius:'9px'}}/>
          <TextField  className={classes.text} style={{backgroundColor:'purple',borderRadius:'9px'}}
      type="text"
      placeholder="Enter text"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="delete" size="small" style={{color:"#fff"}}>
              <DeleteIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} 
    />      
   </ListItem>
    </List>
       </Grid>
    <Grid item xs={12} xl={12} md={12} className={classes.last}>
    <List>
        <ListItem>
        <TextField className={classes.tt} placeholder="write" style={{backgroundColor:"purple",borderRadius:"9px"}}
     InputProps={{
  endAdornment: (
    <InputAdornment position="end">
      <IconButton aria-label="keyboardArrowUp" size="large" style={{color:"#fff"}}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </InputAdornment>
  ),
}} />
        </ListItem>
    </List>
</Grid>      
</Grid>
</>
  )
}

export default withStyles(styles)(Tdo);