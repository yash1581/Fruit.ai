import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-main-box'>
      <br />
      <h1 className='Home-Heading'>Fruit.Ai</h1>
      <br />
      <p style={{color:'white', textAlign:'center', fontFamily:'"Open Sans", sans-serif', fontWeight:'bold'}}>"Be Healthy!"</p>
      <br />
      <br />
      <br />
      <div className='Block-One'>
        <Link to='/Chat' style={{textDecoration:'none'}}><div className='Chat'><span className='Chat-Box-Title'>Chat.</span></div></Link>
        <Link to="/GoogleTranslate"><div className='Translator'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/512px-Google_Translate_logo.svg.png" alt="google translator" className='Google-Translator-Logo' /></div></Link>
      </div>
      <br />
      <br />
      <div className='Block-Two'>
      <Link to='/Faq' style={{textDecoration:'none'}}><div className='Faq'><span className='Faq-Box-Title'>Faqs</span></div></Link>
        <Link to='/About' style={{textDecoration:'none'}}><div className='About'><span className='About-Box-Title'>About</span></div></Link>
      </div>

    </div>
  )
}

export default Home