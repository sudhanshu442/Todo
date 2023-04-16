import React ,{useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./components/Header.tsx";
import Home from "./components/Home";
import Add from './components/Add';
import Edit  from './components/Edit';
import Dialog from './components/MwDialog';
import './styles/Add.css';
import './styles/Edit.css'
import './styles/home.css'
import Dialogmw from './components/MwDialog';
import BH from './components/BH';
import Todo from './components/Todo.jsx';
import Tdo from './components/Tdo.jsx';

// import "./styles/Todo.css";
const App=()=>{
  return (
    <>
    <Router>
      {/* <Header/> */}
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/add"   element={<Add name="ADD"/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/dialog" element={<Dialogmw/>}/>
        <Route path="/bh" element={<BH/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/tdo" element={<Tdo/>}/>

        
        
      </Routes>
    </Router>
    </>
  )
}

export default App;
