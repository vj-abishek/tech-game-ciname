import React from 'react'

export default function Footer() {
  return (
    <footer className='page-footer' style={{ backgroundColor: '#2B2B52' }}>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>TechGameCinema</h5>
            <p className='grey-text text-lighten-4'>
              Tech Made Simple For Everyone.
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Social Media</h5>
            <ul>
              <li>
                <a
                  href=' https://www.instagram.com/_its_me_elisha/'
                  style={{ color: '#fff' }}
                  target="blank"
                >
                  <i
                    className='fa fa-instagram'
                    style={{ fontSize: '30px' }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href='  https://www.facebook.com/elisha.kumar.73157'
                  style={{ color: '#fff' }}
                  target="blank"
                >
                  <i
                    className='fa fa-facebook'
                    style={{ fontSize: '30px', marginTop: '5px' }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/Elisha14198874?s=08'
                  style={{ color: '#fff' }}
                  target="blank"
                >
                  <i
                    className='fa fa-twitter'
                    style={{ fontSize: '30px', marginTop: '5px' }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          © 2019 TechGameCinema
          <a className='grey-text text-lighten-4 right' href='#!'>
            More Links
          </a>
        </div>
      </div>
    </footer>
  )
}
