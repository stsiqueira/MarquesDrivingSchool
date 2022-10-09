import React from 'react'
import Hero from '../img/HeroImg.JPG';
const HeroImg = () => {
  return (
    <div className='HeroImgContainer'>
      <img src={Hero} alt="logo" className='hero-img'/>
    </div>
  )
}

export default HeroImg
