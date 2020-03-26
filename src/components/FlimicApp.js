import React, { useEffect } from 'react'

export default function Main() {
  useEffect(() => {
    document.title = 'Flimic Pro App Free Download'
    return undefined
  })
  return (
    <div className='container' style={{ padding: '10px' }}>
      <div className='row'>
        <img
          className='col s12 m3'
          src='https://lh3.googleusercontent.com/RbJPza4n97TCYEO48P-gqrgQWzwv2sySmuk3vMT2nisX1ugJfDn6wRr2rr7gdDDgROw=s180-rw'
          alt='Flimic Pro App'
          style={{ borderRadius: '10px' }}
        />
        <h5 className='col s6 m6'>
          FiLMiC Pro: Professional HD Manual Video Camera
        </h5>

        <button
          className='col s6 btn'
          style={{ marginTop: '10px', backgroundColor: '#2B2B52' }}
        >
          Download For Free
        </button>

        <p className='col s12'>
          FiLMiC Pro v6 is the most advanced HD video recorder ever made, with a
          fully manual DSLR camera. The FiLMiC Pro camcorder app has been
          enhanced with cutting-edge capabilities and the most responsive manual
          camera interface available on Android to help you achieve the highest
          quality of video clips, music videos, short films or even feature
          movies. FiLMiC Pro has been used in more high profile video & film
          projects than any other video app, including critically acclaimed
          movies like Tangerine and short clips like DragonBorne. FiLMiC Pro is
          the most renowned professional manual 4K HD camera and video recording
          app, with accolades to date including: Best Video Camera App - Best
          App Ever Awards Best Video Camera App - TUAW, Editors Pick Best App
          Ever finalist - Tap! Magazine Gizmodo Essential App 5 Stars, Editors
          Review, cnet.com App of the Week: Time.com/Techland Editors Choice -
          Wired, Film Riot, Macworld FiLMiC Pro camcorder version v6 continues
          this tradition by providing film, movie & video makers, newscasters,
          teachers, vloggers, artists and musicians, and any other type of
          professionals who know their way around a DSLR manual camera, with the
          capability to shoot, record in a true LOG gamma curve on supported
          devices. LOG allows for greater tonal range and flexibility in post
          production setting your smartphone’s capabilities on par with camera
          equipment costing thousands more.
        </p>
      </div>
    </div>
  )
}
