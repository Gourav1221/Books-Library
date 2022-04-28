import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";


export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
   
          
        <Link to = "/">Home</Link>
        <Link to = "/about">about</Link>
        <Link to = "/book">Books</Link>


        {token ?  <Link to ="/logout">Logout</Link> : <Link to = "/login">Login</Link> }
     
     
        
        {/* keep all the NavLinks here */}
        
      </nav>
    </>
  );
};
