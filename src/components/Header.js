import React, {useState, useEffect} from 'react';

// import components
import Nav from './Nav';
import Socials from './Socials';

// import logo
import LogoWhite from '../assets/img/header/logo-white.png';

// import motion
import { motion } from 'framer-motion';

// import variants
import { staggerContainer,fadeIn } from '../variants';

// header variants


export const navVariants = {
 
  
}

const Header = () => {
  // update the state of the header
  const [isActive, setIsActive] = useState(false);

  // nav state
  const [nav, setNAv] = useState(false);

  // event listener
  useEffect(() => {
    // when a scroll event occurs
    window.addEventListener('scroll', () => {
      // if window is scrolled more than 50px
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return(
    <></>
  )
}