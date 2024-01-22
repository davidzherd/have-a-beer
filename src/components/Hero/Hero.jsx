import React from 'react';
import './hero.css'
import heroImage from '../assets/horizontal-beer.jpg';
const Hero = ()=>{

    return(
        <div className='hero'>
            <img src={heroImage} alt='Hero-image' />
        </div>
    );
}
export default Hero;