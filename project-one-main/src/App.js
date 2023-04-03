import React, { useContext } from "react";
import Header from './Header';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import TinderCards from './TinderCards';
import TinderCards2 from "./TinderCards2";
import Chats from "./Chat Folder/Chats";
import ChatScreen from "./Chat Folder/ChatScreen";
import Map from "./Map";
import Navbar from "./RegisterPage";
import Gasprices from "./Gasprices";
import Chats2 from "./Chat Folder/Chats2";
import './App.css';
import Chat from "./Chat Folder/Chat";
import Register from "./Register folder/Register";
import Logout from "./Register folder/Logout";
import {auth} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "./Context folder/AuthContext";
import Login from "./Register folder/Login";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Chat Folder/Components Folder/Home";


function App() {
  


  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={
            <div>
              <Header/>
              <ProtectedRoute>
                <TinderCards />  
              </ProtectedRoute>
                       
              {/*<SwipeButtons />*/}
            </div>} 
          />

          <Route path="/Login_page" element = {
          <div>
            <Header backButton="/"/>
            <LoginPage/>
           
           </div>}
          />
          <Route path="Register" element = {
            <div>
              <Header backButton="/"/>
              <RegisterPage/>
            </div>
          }/>
           

          <Route path="/Gasprice" element = {
          <div>
            <Header backButton ="/Login_page"/>
            <Gasprices/>
            </div>}/>
            

          <Route path="/chat" element={
            <div>
              <Header backButton="/" />
              <ProtectedRoute>
                <Home />
                </ProtectedRoute>
                
            </div>} 
          />
          <Route path="/chat/:person" element={
            <div>
              <Header backButton="/chat" />
               
              <ProtectedRoute>
                <ChatScreen/>
                </ProtectedRoute>
                
            </div>}   
          />
          <Route path="/map" element={
            <div>
              <Header backButton="/" />
              <Map />
            </div>} 
          />
        
          </Routes>   
      </Router>
    </div>
  );
}

export default App;
