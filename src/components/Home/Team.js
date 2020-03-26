import React from 'react'

export default function Team() {
  return (
    <div className='row' style={{marginLeft:'7%'}}>
      <div className='col s12 '>
        <h6
          className='center-align blue-text text-darken-3'
          style={{ fontWeight: '700' }}
        >
          OUR CREATIVE TEAM
        </h6>
        <h2 className='center-align' style={{ fontWeight: '700' }}>
          Meet The Team
        </h2>
        <p className='center-align'>
          Meet the people behind TechGameCinema. Super Cool team of super cool
          platform!
        </p>
        <div className='row center-align'>
          <div className='col s12 m4' style={{padding:'28px'}}>
            <div
              className=' col s12 m1'
              style={{
                width: ' 210px',
                height: ' 210px',
                border: ' 4px solid #276aff',
                borderRadius: ' 50%',
                position: 'relative'
              }}
            >
              <img
                src='00000PORTRAIT_00000_BURST20191006175730987 (3).jpg'
                alt='Elisha. Host of Our Team'
                //   style={{ borderRadius: '50%', position: 'absolute' }}
                style={{
                  width: '195px',
                  height: '195px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                  marginLeft: '-7px',
                  marginTop: '2px'
                }}
              />
              <h5 className='center-align'>ELISHA</h5>
            </div>
          </div>
          <div className='col s12 m4' style={{padding:'28px'}}>
            <div
              className=' col s12 m1'
              style={{
                width: ' 210px',
                height: ' 210px',
                border: ' 4px solid #276aff',
                borderRadius: ' 50%',
                position: 'relative'
              }}
            >
              <img
                src='COLOR_POP1.jpg'
                alt='ABISHEK, Editor and Manager'
                //   style={{ borderRadius: '50%', position: 'absolute' }}
                style={{
                  width: '195px',
                  height: '195px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                  marginLeft: '-7px',
                  marginTop: '2px'
                }}
              />
              <h5 className='center-align' >ABISHEK</h5>
            </div>
          </div>
          <div className='col s12 m4' style={{padding:'28px'}}>
            <div
              className=' col s12 m1'
              style={{
                width: ' 210px',
                height: ' 210px',
                border: ' 4px solid #276aff',
                borderRadius: ' 50%',
                position: 'relative'
              }}
            >
              <img
                src='IMG_20191106_073503_287097375338466340.jpg'
                alt='Elisha. Host of Our Team'
                //   style={{ borderRadius: '50%', position: 'absolute' }}
                style={{
                  width: '195px',
                  height: '195px',
                  borderRadius: '50%',
                  verticalAlign: 'middle',
                  marginLeft: '-7px',
                  marginTop: '2px'
                }}
              />
              <h5 className='center-align' style={{ fontWeigh: '700' }}>
                THOMAS RAJ
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
