import React from 'react'

const FoodCard = ({image,title,subtitle,price}) => {
    
  return (
<div className="card w-96 bg-base-100 shadow-xl mx-auto my-2">
  <figure>
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <p className='text-start text-slate-200 me-auto'>Price :${price}</p>
    <h2 className="card-title">{title}</h2>
    <p>{subtitle}</p>
    <div className="card-actions">
      <button className="btn btn-primary uppercase">Add To Cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard
