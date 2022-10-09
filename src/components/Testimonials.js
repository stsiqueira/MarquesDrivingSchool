import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const testmonialArray = [
    {
      name:"Thiago Siqueira",
      msg:"Fabio is extremely patient and easy to work with. You will not only learn but also make a friend.Fabio is extremely patient and easy to work with. You will not only learn but also make a friend."
  },
  {
    name:"Hanna Heather",
    msg:"Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard. Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard.Fabio works hard."
}]
  return (
    <div className='testimonialsContainer'>
      <h2> Testimonials</h2>
      <div className='testimonialsCarrousel'>

      {
        testmonialArray.map((item, index)=>{
          return(
            <Testimonial key={index} item={item}/>
            )
          })
        }
        </div>
    </div>
  )
}

export default Testimonials
