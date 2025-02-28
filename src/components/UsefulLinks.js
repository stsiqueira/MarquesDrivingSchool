import React from 'react'

const UsefulLinks = () => {
  return (
    <div className='usefulLinksContainer'>
      <h2> Useful links</h2>
       <ul>
          <a href='https://www.icbc.com/driver-licensing/documents/driver-full.pdf'>
            <li>Prepare for your knowledge test. 
            </li>
          </a>
          <a href=''>
            <li>You can also download the app.
            </li>
          </a>
          <a href='https://www.icbc.com/locators/Pages/default.aspx?type=1&subtype=0'>
            <li>Book your Knowledge Test.</li>
          </a>
          <a href='https://www.icbc.com/driver-licensing/documents/driver-full.pdf'>
          <li>Book your Road Test.</li>
          </a>
       </ul>
    </div>
  )
}

export default UsefulLinks
