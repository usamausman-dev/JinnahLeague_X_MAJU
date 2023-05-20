import React from 'react'

function RestaurantCard() {
    return (
        <div className='shadow-lg rounded-lg flex-col flex justify-between border-black-600/20 border-2' onClick={() => window.location = "/Restaurants/1234"}>
            <div>
                <img className='rounded' src="https://img.freepik.com/premium-vector/pattern-geometric-line-circle-abstract-seamless-blue-line_60284-53.jpg?w=2000" alt="cardImg" srcSet="" />
            </div>
            <div className='flex flex-col justify-around p-5 text-bold'>
                <div>Name</div>
                <div className=''><span className='text-red-500 font-medium'>Gulistan Colony Lyari Khi</span></div>
            </div>

        </div>
    )
}

export default RestaurantCard