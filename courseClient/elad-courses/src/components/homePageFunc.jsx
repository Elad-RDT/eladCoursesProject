import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const HomeContext = createContext();
const url = "http://localhost:3000/api/course";

const HomePageFunc = (props) => {
  const { children } = props;
  const [courses, setCourses] = useState([]);

  const [id, setId] = useState("");
  let decodeUserID = "";

  const addCourse = async (val) => {
    console.log("im here");
    if (localStorage.length > 0) {
      console.log("im inside");
      let token = localStorage.getItem("token");
      console.log(token);
      let decodedToken = jwtDecode(token);
      console.log(decodedToken);
      decodeUserID = decodedToken.userID;
      // setId(decodeUserID);
      console.log(decodeUserID);
    }
    console.log(decodeUserID + "after the if");

    const body = { users_id: decodeUserID, course_name: val };
    console.log("walla");
    console.log("val:" + val);
    console.log(body);

    try {
      const response = await axios.post(url, body);
      console.log(response.data);
      setCourses([...courses, response.data]);
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <HomeContext.Provider value={{ addCourse }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomePageFunc;
