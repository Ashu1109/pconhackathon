'use client'
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { Context } from '@/app/context/ContextProvider';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({ search, setSearch, onClick }) => {
    const [token, setToken] = useContext(Context);
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const res = await axios.get('/api/logout');
            const data = await res.data;
            setToken(null)
            if (data.success) {
                toast.success(data.message)
            }
            if (!data.success) {
                toast.error(data.message)
            }
            router.push("/login");
        } catch (error) {
            toast.error(error.message)
        }
    }
    const path = usePathname();
    return (
        <div className='w-full flex justify-between px-8 md:px-10 shadow-3xl  items-center h-[8vh] md:h-[10vh] bg-blue-300'>
            <div className=' font-extrabold text-slate-600 text-2xl md:text-3xl'>
                Notify
            </div>
            {
                path === "/dashboard" ? (<div className='md:w-[30vw] h-[8vh] rounded-3xl  p-2 md:flex absolute md:top-3 md:left-[35%] top-24 left-5 w-[75vw] justify-center items-center bg-blue-300'>
                    <input value={search} onChange={(e) => { setSearch(e.target.value) }} className='w-full  h-full rounded-3xl bg-blue-200 p-5 focus:outline-blue-500 placeholder:text-slate-600 placeholder:focus:scale-90 placeholder:transition placeholder:duration-300 text-lg font-semibold ' placeholder='Search' type="text" name="" id="" />
                    <button onClick={onClick} className='m-4 p-5 md:p-3 absolute -top-2 md:-top-1 md:left-[80%] bg-slate-600 rounded-full hover:scale-110 transition duration-200 '><FaSearch color='white' /></button>
                </div>) : (<></>)
            }
            <div>
                {token && (<div onClick={handleLogout} className='w-20 h-10 bg-blue-500 flex justify-center items-center rounded-xl shadow-lg font-semibold text-blue-200'><button>Logout</button></div>)}
            </div>
        </div>
    )
}

export default Navbar