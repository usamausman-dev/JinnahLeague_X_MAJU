import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'

export default function Restaurants() {

    const [restaurants, setRestaurants] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3000/api/GetAllRestaurant')
            .then(function (response) {
                setRestaurants(response.data.data)
            }).catch((e) => {
                console.log(e)
            })



    }, [])
    return (
        <>
            <section>
                <h1 className='text-center my-20 text-5xl font-semibold'>Restaurants</h1>
            </section>

            <div className='grid grid-cols-4 px-32 gap-10 mb-20'>
                {
                    restaurants.length > 0 && restaurants.map((v, k) => <RestaurantCard key={k} restaurantData={v} />)
                }


            </div></>
    )
}
