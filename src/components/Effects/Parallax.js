import React from 'react'

export default function Parallax({ value }) {
  return (
    <div className='parallax-container' style={{ width: '100%' }}>
      <div className='parallax'>
        <img src={value} alt='Page Banner' />
      </div>
    </div>
  )
}
