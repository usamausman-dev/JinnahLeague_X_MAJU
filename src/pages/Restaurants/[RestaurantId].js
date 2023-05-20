import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Reviewcard from '@/Components/Reviewcard'
import axios from 'axios'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function RestaurantPage() {
    const router = useRouter()
    const [restaurant, setRestaurant] = useState([])
    const [reviewText, setReviewText] = useState('')
    const [rating, setRating] = useState('')
    const { data: session, status } = useSession()

    const payload = {
        id: router.query.RestaurantId
    }

    useEffect(() => {
        if (router.query.RestaurantId) {
            axios.post('/api/GetRestaurantById', payload)
                .then(function (response) {
                    setRestaurant(response.data.data)
                    console.log(response.data.data)
                })
                .catch(function (error) {
                    console.log(error.response);
                });

        }

    }, [router.query.RestaurantId])



    const addReview = () => {
        const payload = {
            restaurantId: router.query.RestaurantId,
            comment: reviewText,
            rating: rating,
            userId: session
        }

        console.log(payload)
        const headers = {
            'Content-Type': 'application/json',
        }

        axios.post('/api/AddReviews', payload, {
            headers: headers
        })
            .then(function (response) {
                if (response.status === 201) {
                    alert("Review Added Successful")
                }
            })
            .catch(function (error) {
                console.log(error.response);
            });

    }






    return (
        <>
            <Head>
                <title>Restaurant - {router.query.RestaurantId}</title>
            </Head>



            <nav className='shadow-xl flex justify-between bg-white text-white px-10 py-5 sticky top-0'>
                <div className='text-2xl text-black font-bold'>
                    <span className='text-red-600'>Yep.</span> Restaurant
                </div>

                <div className='flex justify-centers items-centers'>
                    {
                        status === 'authenticated' ?
                            (
                                <button className='bg-red-600 px-6 py-3 rounded ml-2' onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
                            )
                            :
                            (
                                <>
                                    <Link className='bg-red-600 px-6 py-3 rounded-lg ml-2' href="/login">Login</Link>
                                    <Link className='bg-slate-100 text-red-600 font-bold border-2 border-red-600 px-6 py-3 rounded-lg ml-2' href="/login">Sign Up</Link>
                                </>
                            )
                    }


                </div>

            </nav>

            <div className=''>

                {
                    restaurant.map((val, key) => <div key={key} className='grid grid-cols-2  bg-cover bg-no-repeat h-[88.5vh]'>
                        <div className='bg-red-100  bg-fixed bg-cover bg-[url("https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=8pARCDQkmc8X6SUnWQBY7MAdYVBSxbH8PBS3sJxLOiE=")]'>

                        </div>
                        <div className='p-16'>
                            <h1 className='text-4xl font-bold'>{val.name} , Table -  ({val.numOfTable})</h1>
                            <p className='text-slate-800 text-xl'>{val.address}</p>
                            <p className='text-slate-500 text-xl mt-4'>{val.description}</p>


                            {
                                status === 'authenticated' ?
                                    (
                                        <>
                                            <button className='bg-red-600 text-white px-10 py-3 mt-10 rounded-xl mr-4'>Book a Table</button>
                                            <button className='bg-red-600 text-white px-10 py-3 mt-10 rounded-xl mr-4'>Order Food</button>


                                            <p className='text-slate-900 text-lg font-bold mt-8'> Write Review:</p>

                                            <div className='mt-5 bg-slate-200 p-16 rounded-xl'>

                                                <input type='text' className='bg-slate-100  w-[30vw] p-4 rounded' value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder='Please Write Your Valuable Reviews' />
                                                <div className='my-4'>
                                                    <div className='my-2 font-bold text-black'>Rate Us</div>
                                                    <input className='bg-slate-100  w-[30vw] p-4 rounded' value={rating} onChange={(e) => setRating(e.target.value)} type='number' min={'1'} max={'5'} />
                                                </div>

                                                <button className='bg-red-600 p-4 mt-2  rounded-lg text-white' onClick={addReview}>Add Review</button>
                                            </div></>
                                    ) : (null)
                            }







                            <div className='grid grid-cols-2 gap-10 mt-10'>

                                {
                                    val.reviews.map((v, k) => <Reviewcard review={v} key={k} />)
                                }
                            </div>

                        </div>
                    </div>


                    )
                }





            </div>


        </>
    )
}
