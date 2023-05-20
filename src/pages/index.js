import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useSession, signOut } from 'next-auth/react'
import Restaurants from '@/Components/Restaurants'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status } = useSession()

  console.log(status)
  return (
    <>

      <section className='h-[100vh]   bg-cover bg-[url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")]' >

        <nav className='shadow-xl flex justify-between text-white px-10 py-5'>
          <div className='text-2xl font-bold'>
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


        <div className=' h-[80vh] w-3/4 px-20  py-40'>
          <h1 className='text-white text-5xl font-bold '>
            Welcome to the Restaurant
          </h1>
          <p className='text-white my-10 text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className='bg-red-600 px-6 py-3 text-white font-semibold rounded-lg'>Explore Restaurants</button>
        </div>
      </section>

      <Restaurants />
    </>

  )
}
