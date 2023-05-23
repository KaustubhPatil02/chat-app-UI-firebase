/* eslint-disable no-unused-vars */
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

function App() {
  const {currentUser} = useContext(AudioContext)
  // console.log(currentUser)
  const ProtectedRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to ="/src/routes/Login.jsx"/>
    }
  }
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
          <ProtectedRoute>
            <Home />
            </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          

        </Route>
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
