import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const CourseContext = createContext();
const url = "http://localhost:3000/api/course";

const MyCourses = (props) => {
  const { children } = props;
  const [myCourses, setMyCourses] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  async function getCourses() {
    let decodeUserID = "";
    if (localStorage.length > 0) {
      let token = localStorage.getItem("token");
      let decodedToken = jwtDecode(token);
      decodeUserID = decodedToken.userID;
      try {
        const res = await axios.get(
          `http://localhost:3000/api/course/${decodeUserID}`
        );
        console.log(res.data.rows);
        setMyCourses(res.data.rows);
      } catch (err) {
        console.log(err);
      }
    }
  }

  const deleteCourse = async (courseName) => {
    if (
      window.confirm(
        "Are you sure you want to leave the course? Refund after a 5% charge will return to you in 5 days",
        "",
        "className=confirm-dark"
      )
    ) {
      alert("Course deleted");
      try {
        let token = localStorage.getItem("token");
        let decodedToken = jwtDecode(token);
        let userId = decodedToken.userID;
        const res = await axios.delete("http://localhost:3000/api/course", {
          data: {
            course_name: courseName,
            users_id: userId,
          },
        });
        getCourses();
        return res.data;
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ getCourses, myCourses, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export default MyCourses;
