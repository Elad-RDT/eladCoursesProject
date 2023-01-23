import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useContext, useState } from "react";
import { HomeContext } from "./homePageFunc";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import JavascriptIcon from "@mui/icons-material/Javascript";
import { sizing, style } from "@mui/system";

const images = [
  "https://codelearn.io/CodeCamp/CodeCamp/Upload/Course/cf55489ccd434e8c81c61e6fffc9433f.jpg",
  "https://miro.medium.com/max/1024/1*YQgaKfVzK-YpxyT3NYqJAg.png",
  "https://www.oracle.com/oce/press/assets/CONT2F6AE229113D42EC9C59FAED5BAA0380/native/og-social-java-logo.gif",
  "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
  "https://www.ondat.io/hubfs/Docker.png",
  "https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png",
  "https://www.thedataschool.com.au/wp-content/uploads/2022/12/Sql_data_base_with_logo.png",
];

const icons = [
  "https://img.icons8.com/color/512/python.png",
  "https://img.icons8.com/color/512/javascript--v1.png",
  "https://img.icons8.com/ios/512/java-coffee-cup-logo.png",
  "https://img.icons8.com/color/512/react-native.png",
  "https://img.icons8.com/fluency/512/docker.png",
  "https://img.icons8.com/color/512/mongodb.png",
  "https://img.icons8.com/external-outline-juicy-fish/512/external-sql-coding-and-development-outline-outline-juicy-fish.png",
];

const HomePage = () => {
  const { addCourse } = useContext(HomeContext);

  //attrbiutes of the subscribe card for any subject
  const [open, setOpen] = useState(false);
  const [openJS, setOpenJS] = useState(false);
  const [openJava, setOpenJava] = useState(false);
  const [openReact, setOpenReact] = useState(false);
  const [openMongo, setOpenMongo] = useState(false);
  const [openDocker, setOpenDocker] = useState(false);
  const [openSQL, setOpenSQL] = useState(false);

  ///functions of the handle open and close subscribe card
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenJS = () => {
    setOpenJS(true);
  };

  const handleCloseJS = () => {
    setOpenJS(false);
  };

  const handleClickOpenJava = () => {
    setOpenJava(true);
  };

  const handleCloseJava = () => {
    setOpenJava(false);
  };

  const handleClickOpenReact = () => {
    setOpenReact(true);
  };

  const handleCloseReact = () => {
    setOpenReact(false);
  };

  const handleClickOpenDocker = () => {
    setOpenDocker(true);
  };

  const handleCloseDocker = () => {
    setOpenDocker(false);
  };

  const handleClickOpenMongo = () => {
    setOpenMongo(true);
  };

  const handleCloseMongo = () => {
    setOpenMongo(false);
  };

  const handleClickOpenSQL = () => {
    setOpenSQL(true);
  };

  const handleCloseSQL = () => {
    setOpenSQL(false);
  };

  ///function to add a course
  const handlePython = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleClose();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "python";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleClose();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleClose();
      }
    }
  };

  const handleJavascript = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleCloseJS();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "javascript";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleCloseJS();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleCloseJS();
      }
    }
  };

  const handleMongo = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleCloseMongo();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "mongo";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleCloseMongo();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleCloseMongo();
      }
    }
  };

  const handleDocker = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleCloseDocker();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "docker";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleCloseDocker();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleCloseDocker();
      }
    }
  };

  const handleSQL = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleCloseSQL();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "SQL";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleCloseSQL();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleCloseSQL();
      }
    }
  };

  const handleJava = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleCloseJava();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "java";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleCloseJava();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleCloseJava();
      }
    }
  };

  const handleReact = async (event) => {
    event.preventDefault();

    if (localStorage.length === 0) {
      console.log("local storage is empty");
      alert("You should Login to the site first");
      handleCloseReact();
      window.location.href = "/login";
    } else {
      try {
        let newVal = "react";
        await addCourse(newVal);
        alert(
          'Course Submited. you can now move to "My Courses" to see all the courses you submited for'
        );
        handleCloseReact();
        console.log("hello");
      } catch {
        alert("You have already submited to this course");
        handleCloseReact();
      }
    }
  };

  return (
    <div className="d1">
      <Slide>
        <div className="each-slide-effect" style={{ height: "80vh" }}>
          {/* <div style={{ 'backgroundImage': `url(${images[0]})`, backgroundPositionY:-300}}> */}
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundPositionY: -220,
              backgroundPositionX: 120,
              backgroundSize: "1300px",
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fbcc00" }}
                onClick={handleClickOpen}
              >
                Add Me To Python
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <form action="" onSubmit={handlePython}>
                  <DialogTitle
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[0]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "whitesmoke" }}>
                    <DialogContentText>
                      To subscribe to Python course, please enter your credit
                      card details here. We will send updates occasionally!
                    </DialogContentText>

                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "silver" }}>
                    <Button onClick={handleClose} variant="contained">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#fbcc00" }}
                    >
                      Subscribe Me To Python!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {/* <button className='btn btn-warning' style={{marginTop:'2%'}} onClick={handlePython}>Add Me To Python</button> */}
          </div>
          <div id="pythonImage">
            <p style={{ marginTop: "2%" }}>
              "Are you looking to expand your programming skills? Join our
              Python course and discover the power of this versatile programming
              language. Our course is designed to give you a solid foundation in
              Python, from basic syntax to more advanced concepts. Not only will
              you learn the fundamentals of Python, but you'll also gain
              valuable experience through hands-on projects and exercises. Two
              major benefits of taking this course include the ability to
              analyze and visualize data more effectively, and the ability to
              build more robust and efficient scripts for automating tasks.
              Don't miss this opportunity to learn from experienced
              professionals and take your programming abilities to the next
              level. Sign up today!"
            </p>
          </div>
        </div>

        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[1]})`,
              backgroundPositionY: -850,
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "black" }}
                onClick={handleClickOpenJS}
              >
                Add Me To JavaScript
              </Button>
              <Dialog id="js" open={openJS} onClose={handleCloseJS}>
                <form action="" onSubmit={handleJavascript}>
                  <DialogTitle
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[1]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "white" }}>
                    <DialogContentText>
                      To subscribe to JavaScript course, please enter your
                      credit card details here. We will send updates
                      occasionally!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                      required
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "gray" }}>
                    <Button
                      id="canclejs"
                      onClick={handleCloseJS}
                      variant="contained"
                      style={{ backgroundColor: "black" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#fbcc00", color: "black" }}
                    >
                      Subscribe Me To JavaScript!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {/* <button className='btn btn-dark' style={{marginTop:'2%'}}onClick={handleJavascript}>Add Me To Javascript</button> */}
          </div>
          <div id="jsImage">
            <p style={{ marginTop: "2%", color: "white" }}>
              Take your web development skills to the next level by joining our
              comprehensive JavaScript course. Whether you're a beginner or have
              some experience, our course will provide you with the knowledge
              and skills needed to master the language and build dynamic,
              interactive web applications. From basic syntax to advanced
              concepts such as asynchronous programming and object-oriented
              programming, our course covers it all. Two major benefits of
              taking this course include being able to create highly responsive
              and interactive user interfaces, and the ability to build
              full-stack web applications using JavaScript on both the front-end
              and back-end. Don't miss out on this opportunity to learn from
              industry experts and advance your career. Sign up now!
            </p>
          </div>
        </div>

        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[2]})`,
              backgroundPositionY: -950,
              backgroundPositionX: -50,
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "black" }}
                onClick={handleClickOpenJava}
              >
                Add Me To Java
              </Button>
              <Dialog id="js" open={openJava} onClose={handleCloseJava}>
                <form action="" onSubmit={handleJava}>
                  <DialogTitle
                    style={{ backgroundColor: "gray", color: "white" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[2]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "whitesmoke" }}>
                    <DialogContentText>
                      To subscribe to Java course, please enter your credit card
                      details here. We will send updates occasionally!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                      required
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "whitesmoke" }}>
                    <Button
                      id="canclejs"
                      onClick={handleCloseJava}
                      variant="contained"
                      style={{ backgroundColor: "black" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "gray" }}
                    >
                      Subscribe Me To Java!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {/* <button className='btn btn-dark' style={{marginTop:'2%'}} onClick={handleJava}>Add Me To Java</button> */}
          </div>
          <div id="javaImage">
            <p style={{ marginTop: "2%", color: "white" }}>
              Are you ready to take your programming skills to the next level?
              Join our Java course and learn the ins and outs of one of the most
              popular programming languages in the world. Not only will you gain
              a strong understanding of the language, but you will also learn
              valuable skills such as object-oriented programming and how to
              develop robust and efficient applications. By taking this course,
              you will have the opportunity to work on real-world projects,
              giving you hands-on experience and preparing you for a career in
              the tech industry. Don't miss out on this opportunity to enhance
              your programming skills and become a Java expert. Sign up for our
              Java course today!
            </p>
          </div>
        </div>

        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[3]})`,
              backgroundPositionY: -1000,
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#61DAFB", color: "black" }}
                onClick={handleClickOpenReact}
              >
                Add Me To React
              </Button>
              <Dialog open={openReact} onClose={handleCloseReact}>
                <form action="" onSubmit={handleReact}>
                  <DialogTitle
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[3]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "whitesmoke" }}>
                    <DialogContentText>
                      To subscribe to React course, please enter your credit
                      card details here. We will send updates occasionally!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                      required
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "whitesmoke" }}>
                    <Button
                      id="canclejs"
                      onClick={handleCloseReact}
                      variant="contained"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#61DAFB", color: "black" }}
                    >
                      Subscribe Me To React!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {/* <button className='btn btn-info' style={{marginTop:'2%'}} onClick={handleReact}>Add Me To React</button> */}
          </div>
          <div id="reactImage" style={{ backgroundColor: "#61DAFB" }}>
            <p style={{ marginTop: "2%", color: "black" }}>
              React is one of the most popular JavaScript libraries for building
              user interfaces. Our React course will teach you the basics of
              React and help you build your own web applications. By joining our
              course, you will learn how to create reusable UI components,
              manage the state and props of your components and how to use the
              latest features and best practices of React. You'll work on
              real-world projects and gain hands-on experience with the library.
              By the end of the course, you'll have the skills you need to
              create your own dynamic and responsive user interfaces. Some of
              the benefits of taking our course include the ability to build
              complex and scalable web applications, improved developer
              productivity, and ease of use. Don't miss out on this opportunity
              to become a React expert. Join our React course today!
            </p>
          </div>
        </div>

        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[4]})`,
              backgroundPositionY: -700,
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#2496ED", color: "white" }}
                onClick={handleClickOpenDocker}
              >
                Add Me To Docker
              </Button>
              <Dialog open={openDocker} onClose={handleCloseDocker}>
                <form action="" onSubmit={handleDocker}>
                  <DialogTitle
                    style={{ backgroundColor: "whitesmoke", color: "black" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[4]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "white" }}>
                    <DialogContentText>
                      To subscribe to Docker course, please enter your credit
                      card details here. We will send updates occasionally!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                      required
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "whitesmoke" }}>
                    <Button
                      id="canclejs"
                      onClick={handleCloseDocker}
                      variant="contained"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#2496ED", color: "white" }}
                    >
                      Subscribe Me To Docker!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {/* <button className='btn btn-primary' style={{marginTop:'2%'}} onClick={handleDocker}>Add Me To Docker</button> */}
          </div>
          <div id="dockerImage">
            <p style={{ marginTop: "2%", color: "white" }}>
              Docker is becoming a vital technology for developers, system
              administrators, and IT professionals. Our Docker course will give
              you the skills you need to manage and deploy your applications in
              a containerized environment. By joining our course, you will learn
              how to create, deploy and manage containers, you will also learn
              how to use Docker Compose and Docker Swarm for orchestration.
              You'll gain hands-on experience with real-world projects, allowing
              you to apply your new skills in a professional setting. Some of
              the benefits of taking our course include the ability to easily
              package and deploy applications, improved efficiency and
              scalability, and streamlined collaboration within teams. Don't
              miss out on the opportunity to become a Docker expert. Join our
              Docker course today!
            </p>
          </div>
        </div>

        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[5]})`,
              backgroundPositionY: -900,
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#00684A", color: "white" }}
                onClick={handleClickOpenMongo}
              >
                Add Me To MongoDB
              </Button>
              <Dialog open={openMongo} onClose={handleCloseMongo}>
                <form action="" onSubmit={handleMongo}>
                  <DialogTitle
                    style={{ backgroundColor: "#00684A", color: "white" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[5]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "whitesmoke" }}>
                    <DialogContentText>
                      To subscribe to MongoDB course, please enter your credit
                      card details here. We will send updates occasionally!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                      required
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "whitesmoke" }}>
                    <Button
                      id="canclejs"
                      onClick={handleCloseMongo}
                      variant="contained"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#00684A", color: "white" }}
                    >
                      Subscribe Me To Mongo!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            {/* <button className='btn' style={{marginTop:'2%', backgroundColor:'#00ED64'}} onClick={handleMongo}>Add Me To MongoDB</button> */}
          </div>
          <div id="mongoImage">
            <p style={{ marginTop: "2%", color: "white" }}>
              MongoDB is one of the most popular and widely used NoSQL databases
              available today. Join our MongoDB course and learn how to harness
              the power of this powerful tool. You will learn how to work with
              MongoDB's document-based data model, and how to use its flexible
              and powerful query language. Not only that but also you will learn
              how to scale MongoDB and deploy it in production environments.
              Some of the benefits you will gain from taking this course
              include: 1) the ability to handle and analyze large amounts of
              unstructured data and 2) the ability to work with data in
              real-time. Enroll in our MongoDB course today and start your
              journey towards becoming a proficient MongoDB developer.
            </p>
          </div>
        </div>

        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `url(${images[6]})`,
              backgroundPositionY: 40,
              backgroundPositionX: 270,
              backgroundSize: "900px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#DB7533" }}
                onClick={handleClickOpenSQL}
              >
                Add Me To SQL
              </Button>
              <Dialog id="sql" open={openSQL} onClose={handleCloseSQL}>
                <form action="" onSubmit={handleSQL}>
                  <DialogTitle
                    style={{ backgroundColor: "#DB7533", color: "white" }}
                  >
                    Subscribe{" "}
                    <img
                      src={icons[6]}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "10px",
                        marginTop: "-7px",
                      }}
                      alt=""
                    />
                  </DialogTitle>
                  <DialogContent style={{ backgroundColor: "whitesmoke" }}>
                    <DialogContentText>
                      To subscribe to SQL course, please enter your credit card
                      details here. We will send updates occasionally!
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Full Name"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="id"
                      label="ID Address"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="card"
                      label="Credit Card Number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="cvv"
                      label="CVV number"
                      type="text"
                      fullWidth
                      variant="standard"
                      required
                    />
                    <TextField
                      margin="none"
                      id="name"
                      label="Expiration Date"
                      type="month"
                      fullWidth
                      variant="filled"
                      defaultValue="2001-11"
                      required
                    />
                  </DialogContent>
                  <DialogActions style={{ backgroundColor: "whitesmoke" }}>
                    <Button
                      id="canclejs"
                      onClick={handleCloseSQL}
                      variant="contained"
                      style={{ backgroundColor: "black" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#DB7533" }}
                    >
                      Subscribe Me To SQL!
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>
          </div>
          <div id="sqlImage">
            <p style={{ marginTop: "2%", color: "white" }}>
              SQL is the backbone of data management and is an essential skill
              for any data professional. Our SQL course is designed to provide
              you with a solid understanding of the language, from basic SELECT
              statements to advanced joins and subqueries. You will learn how to
              work with databases, manipulate data, and create complex queries.
              By the end of the course, you will be able to design and implement
              a database from scratch. Some of the benefits you will gain from
              taking this course include: First the ability to work with and
              analyze large sets of data and Secondly the ability to extract and
              transform data for use in other applications. Join our SQL course
              today and start your journey towards becoming a proficient SQL
              developer.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default HomePage;
