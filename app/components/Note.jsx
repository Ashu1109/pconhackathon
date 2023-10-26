import React from 'react'
import '../globals.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiBallPenLine, RiShareBoxLine } from 'react-icons/ri'
const Note = ({ title, description }) => {
    const showMenu = () => {

    }
    return (
        <>
            <div className='w-96 shadow-xl md:hover:scale-105 transition duration-100 p-5 h-60 rounded-xl flex bg-blue-100'>
                <div>
                    <div>
                        <div className=' text-lg font-extrabold'>
                            Title
                            <div className='text-slate-800/80 text-base'>
                                {title.substring(0, 10)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div onClick={showMenu} className='  my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <RiBallPenLine size={24} />
                            </button>
                        </div>
                        <div className='   my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
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
                <div>
                    <div className='p-4 text-lg font-semibold text-slate-800 /75'>
                        <div className='py-1'>
                            Descrtiption
                        </div>
                        <div className='text-slate-800/50 text-base'>
                            {description.substring(0, 150)}
                        </div>
                    </div>
                </div>
                {/* <div className=' text-lg font-extrabold'>
                    Title
                    <div className='text-slate-800/80 text-base'>
                        {title}
                    </div>
                </div>
                <div className='p-4 text-lg font-semibold text-slate-800 /75'>
                    Descrtiption
                    <div className='text-slate-800/50 text-base'>
                        {description.substring(0, 150)}
                    </div>
                    <div className=' relative bottom-36 right-20 '>
                        <div onClick={showMenu} className='  my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <RiBallPenLine size={24} />
                            </button>
                        </div>
                        <div className='  my-2  hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <RiShareBoxLine size={24} />
                            </button>
                        </div>
                        <div className='   my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <AiOutlineDelete size={24} />
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Note