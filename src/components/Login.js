// basic imports
import React from "react";
import { Link } from "react-router-dom";

// images imports
import line from "../images/login/login_hr.png";
import google from "../images/login/google_login.png";
import background from "../images//login/left_background_login.png";
import login_logo from "../images/login/logo_login.png";
import brand_name from "../images/login/right_text_login.png";
import bubble from "../images/login/right_top_login.png";


// css import
import "../css/login.css";

// main component
const Login = () => {

  return (
    <div className="login_cont">
      <div className="login_left">
        <div className="login_wrapper">
          <p className="login_heading">Log in</p>
          <input className="login_inputs" type="email" placeholder="Email" />
          <input
            className="login_inputs"
            type="password"
            placeholder="Password"
          />
          <Link to="/login" className="login_forget_password">
            Forget Password?
          </Link>
          <button type="submit" className="login_signin_button">
            Sign in
          </button>
          <div className="login_lines">
            <img width="130px" src={line} alt="hr" />
            <span>OR</span>
            <img width="130px" src={line} alt="hr" />
          </div>
          <button className="login_google_button"  >
            <span>
              <img src={google} alt="google" className="login_google_icon" />
            </span>
            <span>Continue with google</span>
          </button>
        </div>
        <img src={background} alt="background" className="login_background" />
      </div>
      <div className="login_right">
        <div className="login_bubble_wrapper">
          <img src={bubble} alt="bubble" className="bubble" />
        </div>
        <div className="login_logo_wrapper">
          <div className="login__logos">
            <img src={login_logo} alt="logo" className="login_logo" />
            <img src={brand_name} alt="brandname" className="login_brand_name" />
          </div>

          <div className="login_content_wrapper">
            <p style={{ textAlign: 'center', color: '#fff' }}>
              <strong>New Here?</strong> Sign up & Buy our<br />best products.
            </p>
            <Link to="/"  className="from_login_to_signup" style={{height:'40px'}}><button className="from_login_to_signup">Sign in</button></Link>
            
          </div>
        </div>

      </div>
    </div>
  );
};

// component exported
export default Login;
