import React from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Reviewcard() {
    return (
        <div className=' bg-slate-100 px-10 py-5 rounded-xl'>
            <h2>username</h2>
            <p>Review asdfhjkhasdfhfjo asfhkoljadfioo</p>
            <span className='flex mt-5'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />

            </span>

        </div>
    )
}
