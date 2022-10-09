import React from 'react'

const Testimonial = ({item}) => {
  return (
    <div className='testimonialContainer'>
      <p className='message'>{item.msg}</p>
      <h5 className='newDriver'>{item.name}</h5>

    </div>
  )
}

export default Testimonial