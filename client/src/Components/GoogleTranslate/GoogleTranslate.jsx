import React, { useEffect } from 'react';
import './GoogleTranslate.css';
import { Link } from 'react-router-dom';

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (!window.google || !window.google.translate) {
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
      }
    };
    addGoogleTranslate();
  }, []);

  return (
    <div className='GoogleTranslate-Main-Box'>
      <h2>The Dropdown below will change the language of the page.</h2>
      <h3>*Refresh the page before you use it*</h3><br />
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
