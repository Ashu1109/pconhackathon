'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { Context } from '@/app/context/ContextProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
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
    return (
        <div className='w-full flex justify-between px-8 md:px-10 shadow-3xl  items-center h-[8vh] md:h-[10vh] bg-blue-200'>
            <div className=' font-extrabold text-slate-600 text-2xl md:text-3xl'>
                Notify
            </div>
            {token && (<div onClick={handleLogout} className='w-20 h-10 bg-blue-500 flex justify-center items-center rounded-xl shadow-lg font-semibold text-blue-200'><button>Logout</button></div>)}
        </div>
    )
}

export default Navbar