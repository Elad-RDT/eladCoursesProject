import React from "react";
import { useContext } from "react";
import { useFormik } from "formik";
import { AuthContext } from "./login";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const AppLogin = () => {
  const { err, setErr, checkUser, be, setBe } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handelsubmitUser = (e) => {
    e.preventDefault();
    let newVal = formik.values;
    checkUser(newVal);
    setTimeout(() => {
      formik.handleReset();
    }, 3000);
  };
  return (
    <div id="dad">
      <div class="container animated-container">
        <div class="screen">
          <div class="screen__content">
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                color: "black",
              }}
            >
              <h1>Log in</h1>
            </div>
            <form
              class="login"
              onSubmit={(e) => {
                handelsubmitUser(e);
              }}
            >
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>

              <div class="login__field">
                <i class="login__icon fas fa-email"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>

              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <br />
                <br />
                <br />

                <b>
                  {" "}
                  <a
                    href="http://localhost:3001/changepassword"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Want to change your password?
                  </a>
                </b>
              </div>
              <button class="button login__submit" type="submit">
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
              <br />

              <label htmlFor="" style={{ color: "white" }}>
                {err}
              </label>
            </form>

            <div class="social-login">
              <br />
              <br />
              <br />
              <br />

              <div class="social-icons">
                <a
                  href="https://www.instagram.com/"
                  class="social-login__icon fab fa-instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/"
                  class="social-login__icon fab fa-facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  class="social-login__icon fab fa-twitter"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLogin;
