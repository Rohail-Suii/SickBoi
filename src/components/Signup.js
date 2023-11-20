// basic imports
import { React, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {Link} from 'react-router-dom';
import axios from 'axios';
// importing css
import '../css/signup.css';

// images imports 
import left_top from "../images/signup/left_top_signup.png";
import right_back from "../images/signup/right_background_signup.png";
import signup_logo from "../images/signup/logo_signup.png";
import text from "../images/login/right_text_login.png";


// main component
const Signup = () => {
  //states
  const [registerFullName, setregisterFullName] = useState("");
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users/signup', {
        username: registerFullName,
        email: registerEmail,
        password: registerPassword
      });

      // Handle successful signup, e.g., redirect or show a success message
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup failed:', error.response.data.message);
      // Handle failed signup, e.g., show an error message
    }
  };
  

  return (
    <div className='signup_container'>
      <div className='left_signup'>
        <div className='left_top_wrapper'>
          <img src={left_top} alt='imageS' className='left_top' />
        </div>
        <div className='signup_content'>
          <p className='signup_heading'>
            Sign up
          </p>
          <input placeholder='Full Name' className='signup_inputs' name='fullname' onChange={(event) => {
            {
              setregisterEmail(event.target.value);
            }
          }} />
          <input placeholder='Email' className='signup_inputs' name='email' onChange={(event) => {
            {
              setregisterEmail(event.target.value);
            }
          }} />
          <input placeholder='Password' className='signup_inputs' name='password' onChange={(event) => {
            {
              setregisterEmail(event.target.value);
            }
          }} />
          <input placeholder='Confirm Password' className='signup_inputs' name='confirm_password' />
          <button onClick={handleSignup} className='submit_details_btn'>Sign up</button>
        </div>
      </div>
      <div className='right_signup'>
        <div >
          <img src={right_back} alt='rightSMTH' className='background' />
        </div>
        <div className='right_content'>
          <div className='signup_logo_wrapper'>
            <img src={signup_logo} alt='logoo' className='signup_logo' />
          </div>
          <div className='textandbtn'>
            <p style={{textAlign: 'center'}}>
              <strong>Have account?</strong> Log in & Buy <br/> our best products.
            </p>
            <Link to="/login"><button className='signup_to_login_btn'>Log in</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
};


// component exported
export default Signup;