import { useState } from 'react';
import './App.css';

import { Entrypage } from '../src/Pages/Entrypage';
import { Headers } from '../src/components/Headers';
import { Loginpage } from '../src/Pages/Loginpage';
import list from './list.png'
import { Registerpage } from './Pages/Registerpage';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { StartPage } from './Pages/StartPage';


function App() {
  const [user, setLoginUser] = useState({})

  return (
    <>
    <Router>
    <Headers user={user} setLoginUser={setLoginUser} image = {list}/>
    <Routes>
          <Route exact path="/login" element = {<Loginpage setLoginUser = {setLoginUser}/>}/>
          <Route exact path="/register" element = {<Registerpage/>}/>
          <Route exact path="/main" element = {<StartPage/>}/>
          <Route exact path="/" element = {user && user._id?<StartPage/>:<Entrypage/>}/>
    </Routes>
  </Router>    
    </>
  );
}

export default App;

