import React, { useState } from 'react'

function Card({id,image,info,price,name,removeTour}) {

    const [readMore,setReadMore]=useState(false)
    const description = readMore ? info :`${info.substring(0,200)}...`
  return (
    <div className='card'>
        <img  className="image" src={image} alt="" />

        <div className='tour-info'>
            <div className="tour-details">
                <h4 className="tour-price" >$ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            <div className="description">{description}
            <span className="read-more" onClick={()=>{setReadMore(!readMore)}}>{readMore ? `Show Less`:`Read More`}</span></div>

        </div>
        <button className="btn-red" onClick={()=>{removeTour(id)}}>Not Interseted</button>

    </div>
  )
}

export default Card