import React from 'react'

const Pie = ({ prc,title }) => {
  const dashArray = ((prc * 2) * Math.PI) 
  const dashOffset = dashArray - (dashArray * prc) / 100
  return (
    <div className='pie-container'>
      <svg with="200" height="200" viewBox='0 0 220 220'>
        <circle cx="100" cy="100" fill="none" strokeWidth="15px" r="85" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#AA367C" />
            <stop offset="100%" stop-color="#4A2FBD" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          fill="none"
          strokeWidth="15px"
          r="85"
          stroke="url(#gradient)"
          style={{
            strokeDasharray: dashArray, 
            strokeDashoffset: dashOffset,
            strokeLinecap: "round"
           }}
        />
        <text x="45%" y="48%" dominant-baseline="middle" text-anchor="middle" fontSize="45px" fill='#fff'>{prc}%</text>
      </svg>
      <h5>{title}</h5>
    </div>
  )
}

export default Pie
