import React, { useState } from 'react';
import './Login.css';
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { CiRead } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='wrapper'>
      <form action="">
        <br />
        <h1 className='Login-Heading'>Login</h1>
        <br />
        <p style={{textAlign:'center'}}>By signing in you are agreeing<br /> our <a href="#" style={{textDecoration:'none',color:'rgb(49, 180, 255)'}}>Term and privacy policy</a></p>
        <br />
        <p className='Login-Register'><a href="#" className='Login-Anchor'>Login</a><a href="#" className='Register-Anchor'>Register</a></p>
        <br />
        <div className='email-div'>
          <div className='input-box-email'>
            <HiOutlineMail className='icon'/>
            <input type="email" placeholder='Email' className='email-box' required />
          </div>
        </div>
        <br />
        <div className='register-box'>
          <div className='input-box-register'>
            <span className='register-underline'><FaLock className='icon'/ >
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='register-specific-box' id="password" required /></span>
            <label for="password" onClick={togglePasswordVisibility} style={{cursor: 'pointer'}}><CiRead className='icon'/></label>
          </div>
        </div>
        <br />
        <div className="remember-forgot">
          <label><input type="checkbox" name="" id="" required />Remember password</label>
          <a href="#" style={{textDecoration:'none',color:'rgb(49, 180, 255)',paddingLeft:'40px'}}>Forget Password?</a>
        </div>
        <br />
        <div className='Login-Button'>
          <Link to='/Home'><button type="submit"  className='Login-Button-Style'>Login</button></Link>
        </div><br />
        <p style={{textAlign:'center', color:'grey'}}>or connect with</p><br />
        <div className='logo-box'>
          <div><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s" alt="facebook" className='facebook-img' /></a></div>
          <div><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHP2W0X8Bj9Wwou8Y5Iv2q_Aa-nME9SMwEAA&s" alt="instagram" className='instagram-img'/></a></div>
          <div><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="pinterest" className='pinterest-img' /></a></div>
          <div><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin" className='linkedin-img'/></a></div>
        </div>
        <div className='fingerlogo'>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJCkLPYJ2tpe-Z4IiQp-3J4kuRzxNiBMMhMg-AkQmoYhiE0oUA" alt="fingerprint" className='fingerprint-logo' />
        </div>
      </form>
    </div>
  )
}

export default Login