import React from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Reviewcard({ review }) {

    const filledStars = review.rating;
    const remainingStars = 5 - filledStars;
    return (
        <div className=' bg-slate-100 px-10 py-5 rounded-xl'>
            <h2>{review.user}</h2>
            <p>{review.comment}</p>
            <span className='flex mt-5'>
                {[...Array(filledStars)].map((_, index) => (
                    <AiFillStar color='red' key={index} />

                ))}
                {[...Array(remainingStars)].map((_, index) => (
                    <AiOutlineStar key={index} />
                ))}
            </span>

        </div>
    )
}
