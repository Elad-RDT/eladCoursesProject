import React from "react";
import { useContext } from "react";
import { UsersContext } from "./signup";
import { useFormik } from "formik";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const AppSignUp = () => {
  const { addNewUser, errorMsg, setErrorMsg } = useContext(UsersContext);
  console.log(errorMsg);
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
    addNewUser(newVal);
    setTimeout(() => {
      formik.handleReset();
    }, 3000);
  };

  return (
    <div id="dadSignup">
      <div class="containerSignUp animated-containerSignUp">
        <div class="screenSignUp">
          <div class="screen__content">
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                color: "black",
              }}
            >
              <h1>Sign Up</h1>
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
              </div>
              <button
                class="button login__submit"
                type="submit"
                style={{ boxShadow: "0px 2px 2px cornflowerblue" }}
              >
                <span class="button__text" style={{ color: "black" }}>
                  Sign Up
                </span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
              <br />
              <label htmlFor="" style={{ color: "white", marginLeft: "15%" }}>
                {errorMsg}
              </label>
            </form>
            {/* <button  className='btn btn-dark' onClick={()=>{localStorage.removeItem('token')}} >log out</button> */}
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
            <span class="screen__background__shape screen__background__shape4SignUp"></span>
            <span class="screen__background__shape screen__background__shape3SignUp"></span>
            <span class="screen__background__shape screen__background__shape2SignUp"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppSignUp;
