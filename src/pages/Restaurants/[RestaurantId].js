import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Reviewcard from '@/Components/Reviewcard'

export default function RestaurantPage() {
    const router = useRouter()


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

                    <button className='bg-red-600 px-6 py-3 rounded-lg' onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
                </div>

            </nav>

            <div className='grid grid-cols-2  bg-cover bg-no-repeat h-[88.5vh]'>
                <div className='bg-red-100  bg-fixed bg-cover bg-[url("https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=8pARCDQkmc8X6SUnWQBY7MAdYVBSxbH8PBS3sJxLOiE=")]'>

                </div>
                <div className='p-16'>
                    <h1 className='text-4xl font-bold'>Restaurant Name</h1>
                    <p className='text-slate-500 text-xl'>Location of the Restaurant</p>

                    <button className='bg-red-600 text-white px-10 py-3 mt-10 rounded-xl mr-4'>Book a Table</button>
                    <button className='bg-red-600 text-white px-10 py-3 mt-10 rounded-xl mr-4'>Order Food</button>

                    <div className='grid grid-cols-2 gap-10 mt-10'>
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />
                        <Reviewcard />

                    </div>

                </div>




            </div>


        </>
    )
}
