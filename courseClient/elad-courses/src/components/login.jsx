import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();
const url = "http://localhost:3000/api/auth";

function AuthPasswordsProvider(props) {
  const [name, setName] = useState("");
  const { children } = props;
  const [err, setErr] = useState("Welcome there");
  const [be, setBe] = useState("");

  const checkUser = async (body) => {
    console.log(body);
    try {
      const response = await axios.post(url, body, {});
      localStorage.setItem("token", JSON.stringify(response.data));
      console.log(response);
      localStorage.setItem("name", body.name);

      setErr("User Confirmed");
      setTimeout(() => {
        setErr(`Welcome ${body.name} 🔓 `);
      }, 1000);
      setTimeout(() => {
        setErr("welcome there");
      }, 5000);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setErr("Invalid User try again");
      setTimeout(() => {
        setErr("welcome there");
      }, 3000);
      return err;
    }

    const header = async (body) => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const decodeName = decodedToken.name;
        setName(decodeName);
        console.log(name);
      } catch {
        setName("");
      }
    };
  };

  return (
    <AuthContext.Provider value={{ err, setErr, checkUser, be, setBe }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthPasswordsProvider;
