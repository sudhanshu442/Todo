import {Box, List, ListItem,IconButton ,Grid,TextField,InputAdornment} from '@mui/material'
import DeleteIcon  from '@mui/icons-material/Delete' 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'
import {withStyles} from "@mui/styles";
const styles={
    margin:'0',
    padding:'0',
    boxSizing:'border-box',
    scrollBehavior: 'smooth',
    fontFamily:'Roboto',
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
        left:'9px',
  },
  text: {
    left: '10px',
    right: '10px',
    '@media screen and (min-width:375px)': {
      
        flex: '1 0 100%',
        width: '100%',
        flexDirection: "row",
        margin: '0 0 12px 0',
  },
  },
  todolist:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        position:'relative',
        gap:'1rem',
    },
    last:{
        bottom:'0',
        color:'#fff',
        position:'absolute',
        left:'0',
        right:'0',
        '@media (min-width:500px)': {
            flex: '1 0 100%',
            width: '100%',
            flexDirection:"row",
            margin: '0 0 12px 0',
      }
    },
    tbt:{
      width:"340px",
        '@media (min-width:375px)': {
          flex: '1 0 100%',
          width: '100%',
          flexDirection:"row",
          margin: '0 0 12px 0',

      },
    },
  }

const Tdo = ({classes}) => {
  return (
    <>
    <Grid className={classes.app} spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}} style={{backgroundColor:'#1e223d'}}>
      <header >
            <h1 className={classes.hdr}>TODO LIST</h1><br/>
        </header>
        <Grid item xs={12} xl={12} md={12} className={classes.todolist}>
          <List >
          <ListItem>
             <TextField className={classes.num} placeholder="1" style={{ marginRight: '15px',backgroundColor:'purple',borderRadius:'9px'}} sx={{width:'60px'}}/>
          <TextField className={classes.text} type="text" style={{backgroundColor:'purple',borderRadius:'9px'}} sx={{width:'280px'}}
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
    <ListItem>
          <TextField className={classes.num} placeholder="1" style={{ marginRight: '15px',backgroundColor:'purple',borderRadius:'9px'}} sx={{width:'60px'}}/>
          <TextField  className={classes.text} style={{backgroundColor:'purple',borderRadius:'9px'}} sx={{width:'280px'}}
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
    <footer item xs={12} xl={12} md={12} className={classes.last}>
    <List>
        <ListItem>
        <TextField className={classes.tbt} placeholder="write" style={{backgroundColor:"purple",borderRadius:"9px"}}
     InputProps={{
  endAdornment: (
    <InputAdornment position="end">
      <IconButton aria-label="keyboardArrowUp" size="small" style={{backgroundColor:'#fff',color:"#000",borderRadius:'10px'}}>
        <KeyboardArrowUpIcon />
      </IconButton>
    </InputAdornment>
  ),
}} />
        </ListItem>
    </List>
</footer>      
</Grid>
</>
  )
}

export default withStyles(styles)(Tdo);