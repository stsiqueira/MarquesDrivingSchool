import React from 'react'

const Testimonial = ({item}) => {
  return (
    <div className='testimonialContainer'>
      <div className='testimonialBox'>
        <p className='message'>{item.msg}</p>
        <h5 className='newDriver'>{item.name}</h5>
      </div>

    </div>
  )
}

export default Testimonial


