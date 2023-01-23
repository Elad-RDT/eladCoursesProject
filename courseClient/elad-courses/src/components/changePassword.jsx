import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const PasswordContext = createContext();
const url = "http://localhost:3000/api/changepassword";
const ChangePassword = (props) => {
  const { children } = props;
  const [errorMsg, setErrorMsg] = useState("welcome there");

  async function changeMyPassword(body) {
    try {
      const response = await axios.put(url, body);
      setErrorMsg("Password Changed");
      setTimeout(() => {
        setErrorMsg("PasswordChanged");
      }, 2000);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
      setTimeout(() => {
        setErrorMsg("welcome there");
      }, 15000);

      return response.data;
    } catch (error) {
      setErrorMsg("Try again");
      setTimeout(() => {
        setErrorMsg("welcome there");
      }, 3000);
      console.error(error);
      throw error;
    }
  }

  return (
    <PasswordContext.Provider value={{ changeMyPassword, errorMsg }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default ChangePassword;
