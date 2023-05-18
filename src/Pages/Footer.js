import React, { useEffect } from 'react';
import {AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import {FaViber} from 'react-icons/fa'
import rlogo from '../icons/naturalbardhlogo.png'


const Footer = () => {
  useEffect(() => {
    const adjustFooterPosition = () => {
      const footer = document.querySelector('footer');
      const footerHeight = footer.offsetHeight;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      if (bodyHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
      } else {
        footer.style.position = 'static';
      }
    };

    adjustFooterPosition();

    window.addEventListener('resize', adjustFooterPosition);

    return () => {
      window.removeEventListener('resize', adjustFooterPosition);
    };
  }, []);
  

  return (
    <footer>
      {
    <div className='copy'>
        <a href='https://www.facebook.com/NaturalFerizaj/' target='blank'><AiFillFacebook /></a>
        <a href='https://www.instagram.com/naturalrestaurant/' target='blank'> <AiFillInstagram /> </a>
        <a href='tel:+38344473473'> <FaViber/> </a>
        <h3 id='copy'>&copy; All rights reserved &nbsp;
        <img src={rlogo} 
        alt='rlogo'
        style={{width:"190px"}}
        /></h3>
    </div>
        }
    </footer>
  );
};

export default Footer;
