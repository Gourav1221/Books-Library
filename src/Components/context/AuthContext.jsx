import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
    const data = {
      email,
      password
    }
    console.log(data)
    axios.post("https://reqres.in/api/login",data)
    .then(({data}) => {
      setToken(data.token);
    })
    .catch((error) => {
      console.log(error);
    })
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("")
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
