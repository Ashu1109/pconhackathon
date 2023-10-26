'use client'
import React from 'react'
import { BiPlus } from 'react-icons/bi'

const Button = ({ onClick }) => {
    return (
        <div className=' absolute right-10 bottom-10  hover:scale-110 transition w-16 h-16 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
            <button onClick={onClick} className=' font-extrabold'>
                <BiPlus size={24} />
            </button>
        </div>
    )
}

export default Button