import Link from 'next/link'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiBallPenLine, RiShareBoxLine } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonCard = () => {
    return (
        <>
            <div className='md:w-[40vw] w-[90vw]  justify-around shadow-xl md:hover:scale-105 transition duration-100 p-5 h-60 rounded-xl flex bg-blue-200'>
                <div className=' min-w-[100px]'>
                    <div>
                        <div className=' text-base font-extrabold'>
                            Title
                            {/* <div className='text-slate-800/80 text-base'>
                                {title.substring(0, 10)}
                            </div> */}
                            <Skeleton />
                        </div>
                    </div>
                    <div>
                        {/* <div onClick={handleClick} className='  my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'> */}
                        {/* <button className=' font-extrabold'>
                                <RiBallPenLine size={24} />
                            </button> */}
                        {/* </div> */}
                        <Skeleton count={3} width={40} height={40} circle />
                        {/* <div onClick={onClick} className='   my-2 hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                            <button className=' font-extrabold'>
                                <AiOutlineDelete size={24} />
                            </button>
                        </div> */}
                        {/* <Link href={`whatsapp://send?text=${share}`}>
                            <div className='  my-2  hover:scale-110 transition  w-10 h-10 shadow-xl bg-blue-400 flex rounded-full justify-center items-center'>
                                <button className=' font-extrabold'>
                                    <RiShareBoxLine size={24} />
                                </button>
                            </div></Link> */}
                    </div>
                </div>
                <div className='max-w-[250px] min-w-[150px] overflow-scroll'>
                    <div className='px-4 py-2 text-lg font-semibold text-slate-800 /75'>
                        <div className='py-1'>
                            Descrtiption
                        </div>
                        <Skeleton count={5} />
                        {/* <div>
                            <div className='text-slate-800/50 overflow-scroll  text-base'>
                                {description.substring(0, 150)}
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='w-full text-xs md:text-base md:max-w-[150px] h-full flex flex-col'>
                    <div>
                        Date:<Skeleton />
                    </div>
                    <div>
                        Time:<Skeleton />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SkeletonCard