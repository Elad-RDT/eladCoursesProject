// import React from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { AuthContext } from "./login";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Bookmarks from "@mui/icons-material/Bookmarks";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import WindowIcon from "@mui/icons-material/Window";
import LogoutIcon from "@mui/icons-material/Logout";
import { CourseContext } from "./myCourses";

////active the menu button
const NavBar = () => {
  const { be, setBe } = useContext(AuthContext);
  const { getCourses } = useContext(CourseContext);

  useEffect(() => {
    console.log("be changed");
  }, [be]);

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <WindowIcon />
              </ListItemIcon>
              <ListItemText>Home page</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/signUp" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AppRegistrationIcon />
              </ListItemIcon>
              <ListItemText>Sign Up</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText>Log in</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          to="/myCourses"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem>
            <ListItemButton
              onClick={() => {
                getCourses();
              }}
            >
              <ListItemIcon>
                <Bookmarks />
              </ListItemIcon>
              <ListItemText>My Courses</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <ListItem>
          <ListItemButton
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              window.location.reload();
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Log Out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#ededf4" }}>
          <Toolbar>
            {/* icon of menu button with his funcnality */}
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    onClick={toggleDrawer(anchor, true)}
                    style={{ color: "black" }}
                  >
                    {" "}
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginLeft: "2%", color: "black" }}
            >
              <b style={{ fontFamily: "Abel" }}>
                {" "}
                welcome {localStorage.getItem("name")}{" "}
              </b>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  float: "right",
                }}
              >
                <b>RDTEAM Experts</b>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
