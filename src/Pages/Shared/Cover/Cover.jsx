import React from 'react'
import { Parallax } from 'react-parallax'

const Cover = ({img, title, subtitle}) => {
  return (
    <Parallax
    blur={{ min: -35, max: 35 }}
    bgImage={img}
    strength={-200}
>

<div className="hero lg:min-h-[700px] md:min-h-[60vh] sm:min-h-[50vh] min-h-[34vh]">
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md font-serif text-white">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{subtitle}</p>
    
    </div>
  </div>
</div>
</Parallax>
  )
}

export default Cover
