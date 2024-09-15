import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='About-Main-Box'>
        <div className='About-Box'>
            <br />
            <h2 style={{textAlign:'center', fontFamily:'"Nunito", sans-serif'}}>Fruit.Ai</h2>
            <br />
            <p style={{fontSize:'small', textAlign:'center', fontFamily:'"Nunito", sans-serif', color:'grey'}}>Whether you're looking to discover new fruits,<br />
            understand their nutritional values, or find the <br />
            perfect fruit for your diet, our AI-driven chatbot is <br />
            here to assist. We provide personalized fruit <br />
            recommendations tailored to your health needs, <br />
            making it easier for you to integrate the best <br />
            fruits into your daily routine</p>
            <br />
            <br />
            <div className='About-Button-Box'>
                <button className='About-Button'>ABOUT</button>
            </div>
            <br />

        </div>

    </div>
  )
}

export default About