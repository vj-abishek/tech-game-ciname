import React from 'react'
// import history from '../services/history'
export default function Products(props) {
  const redirects = () => {
    console.log('redirect..')
    window.location.href = '/FlimicPro'
  }
  return (
    <div className='row' style={{ marginTop: '10px' }}>
      <div className='col s12'>
        <h6
          className='center-align blue-text text-darken-3'
          style={{ fontWeight: '700' }}
        >
          THINGS FOR EDUCATION
        </h6>
        <div className='col s12 m6 push-m1'>
          <img
            src='https://lh3.googleusercontent.com/RbJPza4n97TCYEO48P-gqrgQWzwv2sySmuk3vMT2nisX1ugJfDn6wRr2rr7gdDDgROw=s180-rw'
            alt='Flimic Pro App'
          />
        </div>
        <div className='col s12 m6 pull-m2'>
          <h5>FiLMiC Pro: Professional HD Manual Video Camera</h5>
          <button
            className='btn blue lighten-2'
            style={{ marginTop: '10px' }}
            onClick={redirects}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
