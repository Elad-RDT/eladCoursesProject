import React from "react";
import { useContext } from "react";
import { useFormik } from "formik";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { PasswordContext } from "./changePassword";

const AppChangePassword = () => {
  const { changeMyPassword, errorMsg, setErrorMsg } =
    useContext(PasswordContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      currentPassword: "",
      newPassword: "",
      anotherNewPassword: "",
    },
  });

  const handelsubmitUser = (e) => {
    e.preventDefault();
    let newVal = formik.values;
    changeMyPassword(newVal);
    setTimeout(() => {
      formik.handleReset();
    }, 3000);
  };
  return (
    <div id="dadPassword">
      <div class="containerPassword animated-container">
        <div class="screenPassword">
          <div class="screen__content">
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                color: "black",
              }}
            >
              <h1 style={{ fontSize: "30px" }}>Password</h1>
            </div>
            <form
              class="login"
              onSubmit={(e) => {
                handelsubmitUser(e);
              }}
            >
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
                <i class="login__icon fas fa-user"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Current password"
                  name="currentPassword"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                />
              </div>

              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="New Password"
                  name="newPassword"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                />
              </div>

              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="New Password Again"
                  name="anotherNewPassword"
                  value={formik.values.anotherNewPassword}
                  onChange={formik.handleChange}
                />
              </div>

              <button class="button login__submitPassword" type="submit">
                <span class="button__text">Change My Password</span>
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
            <span class="screen__background__shape screen__background__shape4Password"></span>
            <span class="screen__background__shape screen__background__shape3Password"></span>
            <span class="screen__background__shape screen__background__shape2Password"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppChangePassword;
