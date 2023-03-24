import React from 'react'

interface CardProps {
    title: string;
    image: string;
    subtitle: string;
    description: string
}

const Card = ({ description, image, subtitle, title }: CardProps) => {
  return (
    <div className='card'>
        <div className='image' style={{ backgroundImage: `url(${image})`}}/>
        <div className='info'>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card