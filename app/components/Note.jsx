import React, { useState } from 'react'
import '../globals.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiBallPenLine, RiShareBoxLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
const Note = ({ onClick, id, title, description }) => {
    const router = useRouter();
    const handleClick = async () => {
        router.push(`/notes/${id}`);
    }
    return (
        <>
            <div className='md:w-[40vw] w-[90vw] shadow-xl md:hover:scale-105 transition duration-100 p-5 h-60 rounded-xl flex bg-blue-100'>
                <div>
                    <div>
                        <div className=' text-base font-extrabold'>
                            Title
                            <div className='text-slate-800/80 text-base'>
                                {title.substring(0, 10)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div onClick={handleClick} className='  my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <RiBallPenLine size={24} />
                            </button>
                        </div>
                        <div onClick={onClick} className='   my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <AiOutlineDelete size={24} />
                            </button>
                        </div>
                        <div className='  my-2  hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <RiShareBoxLine size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='px-4 py-2 text-lg font-semibold text-slate-800 /75'>
                        <div className='py-1'>
                            Descrtiption
                        </div>
                        <div>
                            <div className='text-slate-800/50 overflow-scroll  text-base'>
                                {description.substring(0, 150)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Note