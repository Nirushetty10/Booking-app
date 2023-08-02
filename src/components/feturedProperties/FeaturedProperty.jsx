import React from 'react';
import "./featuredProperty.scss";

const data = [
    {
        id: 1,
        name : "Hotel taj",
        location : "Yashvanthpura, Bangalore",
        image : "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
        rating : 9.2,
        price : 2000
    },
    {
        id: 2,
        name : "Hotel Mayur",
        location : "Majestic, Bangalore",
        image : "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
        rating : 8.8,
        price : 1500
    },
    {
        id: 3,
        name : "Hotel Akash",
        location : "RajajiNagar, Bangalore",
        image : "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
        rating : 8.1,
        price : 1000
    },
    {
        id: 4,
        name : "Hotel Nayana",
        location : "JP Nagar, Bangalore",
        image : "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=",
        rating : 8.7,
        price : 1400
    },
]

const FeaturedProperty = () => {
  return (
    <div className='featuredPropertList'>
        {data.map(property => {
            return <div key={property.id} className='featuredPropertyListItem'>
                <img src={property.image} alt="properties" className='featuredProprtiesImage' />
                <div className="featuredPropertyListtitle">
                    <h1>{property.name}</h1>
                    <h2>{property.location}</h2>
                    <div className="rating">
                       {property.rating}
                    </div>
                </div>
                <div className="featuredPropertyPrice">
                    <span>starting from </span>
                    <span className='price'>₹ { property.price}</span>
                    </div>
            </div>
        })}
    </div>
  )
}

export default FeaturedProperty