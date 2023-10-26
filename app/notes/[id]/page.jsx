'use client'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import { BiSave } from 'react-icons/bi'
const Page = ({ params }) => {
    const { id } = params;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <>
            <div className='w-[100vw] h-[92vh] md:h-[90vh] bg-white'>
                <div className='p-5  shadow-xl flex gap-3 bg-slate-100'>
                    <div className='text-xl font-extrabold'>
                        Title
                    </div>
                    <div className='w-full'>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className='p-2 shadow-md rounded text-xl md:text-lg duration-300 bg-blue-100 transition-all w-full font-semibold  text-black  focus:outline-none' />
                    </div>
                </div>
                <hr />
                <div className='w-full p-5 bg-slate-100'>
                    <div className='text-xl py-5 font-semibold '>
                        Description
                    </div>
                    <div className='w-full h-[70vh] md:h-[66vh] shadow-xl '>
                        <textarea onChange={(e) => { setDescription(e.target.value) }} value={description} className='w-full p-3 h-full rounded-lg bg-blue-100 focus:outline-none text-xl ' />
                    </div>
                </div>
            </div>
            <div className=' absolute right-10 bottom-10  hover:scale-110 transition w-16 h-16 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                <button className=' font-extrabold'>
                    <BiSave size={24} />
                </button>
            </div>
        </>
    )
}

export default Page