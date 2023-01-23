import * as React from "react";
import { useContext } from "react";
import { CourseContext } from "./myCourses";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";

const icons = [
  "https://img.icons8.com/color/512/python.png", //python
  "https://img.icons8.com/color/512/javascript--v1.png", //js
  "https://img.icons8.com/ios/512/java-coffee-cup-logo.png", //java
  "https://img.icons8.com/color/512/react-native.png", //react
  "https://img.icons8.com/fluency/512/docker.png", //docker
  "https://img.icons8.com/color/512/mongodb.png", //mongodb
  "https://img.icons8.com/external-outline-juicy-fish/512/external-sql-coding-and-development-outline-outline-juicy-fish.png", //sql
];

const AppCourses = () => {
  const { myCourses, deleteCourse } = useContext(CourseContext);
  console.log(myCourses);

  return (
    <div
      style={{
        background: "linear-gradient(90deg,cadetblue ,cornflowerblue)",
        minHeight: "91vh",
      }}
    >
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        Good luck on your new journey, ace it!
      </h1>

      {myCourses.map((item) => (
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(90deg, cadetblue ,cornflowerblue )",
            width: "50%",
            marginLeft: "25%",
            fontFamily:'Cabin'
          }}
        >
          <Card.Img
            variant="top"
            src={
              item.course_name.includes("python")
                ? icons[0]
                : item.course_name.includes("javascript")
                ? icons[1]
                : item.course_name.includes("java")
                ? icons[2]
                : item.course_name.includes("react")
                ? icons[3]
                : item.course_name.includes("docker")
                ? icons[4]
                : item.course_name.includes("mongo")
                ? icons[5]
                : item.course_name.includes("SQL")
                ? icons[6]
                : // default icon
                  icons[7]
            }
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "whitesmoke",
              borderRadius: "36px",
              
            }}
          />
          <Card.Body>
            <Card.Text>
              <b> Course Name:{" " + item.course_name}</b>
              <br />
              <b>
                {" "}
                rating:
                {" " + item.rating === 1
                  ? "⭐"
                  : item.rating === 2
                  ? "⭐⭐"
                  : item.rating === 3
                  ? "⭐⭐⭐"
                  : item.rating === 4
                  ? "⭐⭐⭐⭐"
                  : item.rating === 5
                  ? "⭐⭐⭐⭐⭐"
                  : "N/A"}
              </b>
              <br />

              <b>level:{" " + item.level}</b>
              <br />
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  deleteCourse(item.course_name);
                }}
              >
                I want to Leave
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AppCourses;
