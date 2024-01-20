import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom'

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App(){
  return (

    
    <Container className="d-flex align-items-center 
    justify-content-center"    
    style = {{ minHeight: "100vh"}}>
      <div className="w-100" style = {{ maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path = "/" element = {<Dashboard/>} />
              <Route path = "/signup" element ={<SignUp/>} />
              <Route path = "/login" element = {<Login/>} />
              
            </Routes>

            

          </AuthProvider>
        </Router>
        
      </div>
    </Container>
    
  )
    
    
  
}

export default App;
