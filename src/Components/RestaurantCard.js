import React from 'react'

function RestaurantCard({ restaurantData }) {
    console.log(restaurantData)
    return (
        <div className='shadow-lg rounded-lg flex-col flex justify-between border-black-600/20 border-2' onClick={() => window.location = `/Restaurants/${restaurantData._id}`}>
            <div>
                <img className='rounded' src={restaurantData.photo} alt="cardImg" srcSet="" />
            </div>
            <div className='flex flex-col justify-around p-5 text-bold'>
                <div>{restaurantData.name}</div>
                <p>{restaurantData.description}</p>
                <div className=''><span className='text-red-500 font-medium'>{restaurantData.address}</span></div>
            </div>

        </div>
    )
}

export default RestaurantCard