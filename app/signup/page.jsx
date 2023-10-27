'use client'
import React, { useContext, useState } from 'react'
import { RiGoogleFill, RiLoginBoxLine } from 'react-icons/ri'
import Link from 'next/link'
import Loading from '../loading'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import { Context } from '@/app/context/ContextProvider'
const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [token, setToken] = useContext(Context);
    const handleSubmit = async () => {
        try {
            setLoading(true);
            const res = await axios.post("api/signup", { name, email, password })
            const data = await res.data;
            const resToken = await axios.get("api/me");
            const dataToken = await resToken.data
            setToken(dataToken)
            if (data.success) {
                toast.success(data.message);
                router.push('/dashboard');
            }
            if (!data.success) {
                toast.error(data.message)
                router.reload();
            }
            setLoading(false);
        }
        catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    return (loading ? (<Loading />) : <><Navbar />
        <div className='w-[100vw] flex justify-center items-center h-[92vh] md:h-[90vh] bg-slate-100'>
            <div className='py-0 md:py-10 w-full h-full  md:w-[70%] shadow-xl rounded-none md:rounded-3xl bg-white md:h-[90%] px-0 md:px-10  flex'>
                <div className=' w-full md:w-[60%] bg-sky-100 rounded-3xl md:rounded-none md:rounded-s-3xl flex justify-center items-center'>
                    <div className=' w-full h-full px-10 md:px-4 py-10 md:py-0  md:w-[70%] md:h-[100%] gap-4 flex flex-col'>
                        <div className='pt-10  font-extrabold text-4xl text-slate-700/70'>
                            SignUp
                        </div>
                        <div>
                            <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder={"Enter Your Name"} className='p-2.5 shadow-md rounded my-5 text-xl md:text-lg border-b-[5px] border-blue-300 duration-300 bg-blue-50 transition-all font-semibold focus:border-b-[7px] text-black focus:w-full w-[80%] md:w-[90%] focus:outline-none' />
                            <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={"Enter Your Email"} className='p-2.5 shadow-md rounded my-5 text-xl md:text-lg border-b-[5px] border-blue-300 duration-300 bg-blue-50 transition-all font-semibold focus:border-b-[7px] text-black focus:w-full w-[80%] md:w-[90%] focus:outline-none' />
                            <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder={"Enter Your Password"} className='p-2.5 shadow-md rounded my-5 text-xl md:text-lg border-b-[5px] border-blue-300 duration-300 bg-blue-50 transition-all font-semibold focus:border-b-[7px] text-black focus:w-full w-[80%] md:w-[90%] focus:outline-none' />
                        </div>
                        <div className='w-[10rem] h-[2.7rem] shadow-xl mt-2 rounded-md hover:bg-blue-500 transition-colors bg-blue-400 flex items-center cursor-pointer justify-center text-slate-100'>
                            <div className=' flex justify-center items-center '>
                                <button onClick={handleSubmit} className=' text-lg md:text-base font-bold uppercase px-2 '>
                                    Continue
                                </button>
                                <div>
                                    <RiLoginBoxLine className='md:text-base text-2xl' />
                                </div>
                            </div>
                        </div>
                        <div className=' bg-blue-400 shadow-xl hover:bg-blue-500 transition mt-10 rounded-xl p-2 flex justify-center items-center'>
                            <div className=' text-lg md:text-base font-bold uppercase text-white px-3 '>
                                GOOGLE
                            </div>
                            <div>
                                <RiGoogleFill color='white' className='md:text-base text-2xl' />
                            </div>
                        </div>
                        <div className='flex gap-1 p-3 justify-center items-center font-semibold text-lg text-black/60 md:hidden'>
                            <div>
                                Already have an accounts?
                            </div>
                            <Link href='/login' className='hover:underline '>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <div id='color' className=' w-[40%] md:flex hidden rounded-e-3xl  bg-blue-300 justify-center items-center'>
                    <div className='p-6 h-full flex-col justify-center flex py-20 items-center'>
                        <div className='text-4xl flex justify-center  w-full h-[20%] font-sans font-extrabold text-black/70'>
                            <div>
                                Notify
                            </div>
                        </div>
                        <div className='flex w-full h-[80%]'>
                            <div className='text-lg  text-center font-medium text-black/80 font-serif'>
                                <div>
                                    Unlock a world of possibilities by joining our community. Sign up today and be a part of something extraordinary.
                                </div>
                                <div className=' w-full h-full justify-start pt-7  flex text-left flex-col text-base'>
                                    <div>
                                        📝 Create,edit,and organize notes in one place
                                    </div>
                                    <div>
                                        🔐 Secure Login and SignUp features
                                    </div>
                                    <div>
                                        👥 Collaborate with others and share notes
                                    </div>
                                    <div>
                                        🌟 Experience the power of digital notes
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-1 p-3 flex-col justify-center items-center font-semibold text-lg text-black/80'>
                            <div>
                                Already have an accounts?
                            </div>
                            <Link href='/login' className='hover:underline text-xl '>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </>
    )
}

export default Page