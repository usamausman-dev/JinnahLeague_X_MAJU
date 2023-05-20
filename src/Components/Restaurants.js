import React from 'react'
import RestaurantCard from './RestaurantCard'

export default function Restaurants() {
    return (
        <>
            <section>
                <h1 className='text-center my-20 text-5xl font-semibold'>Restaurants</h1>
            </section>

            <div className='grid grid-cols-4 px-32 gap-10 mb-20'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />


            </div></>
    )
}
