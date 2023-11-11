import React from 'react'

const SectionTitle = ({heading, subHeading}) => {
  return (
<div className="w-full flex flex-col justify-center items-center">
    <h3 className="text-yellow-600 text-xl">---{heading}---</h3>
    <hr className='my-3 w-[424px] bg-slate-900 opacity-10  h-1'/>
    <p className="text-slate-300 md:text-5xl text-3xl">{subHeading}</p>
    <hr className='my-3 w-[424px] bg-slate-900 opacity-10  h-1'/>
</div>
  )
}

export default SectionTitle
