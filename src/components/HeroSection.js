import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Wheat - 62390.mp4' autoPlay loop muted />
      <p>Welcome to</p>
      
      <h1>VAD CROP SCIENCE</h1>
      
      <div className='hero-btns'>
      <Link to='/about-us' className='btn-mobile'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ABOUT US
        </Button>
      </Link>
      <a href = "https://youtu.be/WQkSt_3hsLY">
        <Button
          // className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          //onClick={<a href=""/>}
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
