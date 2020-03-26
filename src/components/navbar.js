import React from 'react'

export default function navbar() {
  return (
    <nav style={{ backgroundColor: '#2B2B52' }}>
      <div className='nav-wrapper container'>
        <div
          className='brand-logo'
          style={{ fontFamily: "'Ubuntu', sans-serif" }}
        >
          TechGameCinema
        </div>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href=' https://www.instagram.com/_its_me_elisha/'>
              <i
                className='fa fa-instagram'
                style={{ fontSize: '30px', marginRight: '15px' }}
              ></i>
            </a>
          </li>
          <li>
            <a href='  https://www.facebook.com/elisha.kumar.73157'>
              <i
                className='fa fa-facebook'
                style={{ fontSize: '30px', marginRight: '15px' }}
              ></i>
            </a>
          </li>
          <li>
            <i
              className='fa fa-twitter'
              style={{ fontSize: '30px', marginRight: '15px' }}
            ></i>
          </li>
        </ul>
      </div>
    </nav>
  )
}
