'use client'
import React, { useEffect, useState } from 'react'
import Note from '../components/Note'
import Button from '../components/Button'
import axios from 'axios'
import toast from 'react-hot-toast'
import NewNote from '../components/NewNote'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import SkeletonCard from '../components/SkeletonCard'

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState();
    const [search, setSearch] = useState("");
    const handleClick = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`api/search?search=${search}`);
            const { data } = await res.data;
            setNotes(data)
            setLoading(false)
        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            const res = await axios.delete(`/api/note?id=${id}`);
            const data = await res.data;
            handleLoad();
            if (data.success) {
                toast.success(data.message);
            }
            if (!data.success) {
                toast.error(data.message);
            }
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }
    const handleLoad = async () => {
        try {
            setLoading(true)
            const res = await axios.get("api/notes");
            const data = res.data;
            setNotes(data.allNotes.sort(data.allNotes.createdAt));
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleLoad()
    }, [])
    return (
        <>
            <Navbar search={search} onClick={handleClick} setSearch={setSearch} />
            <div className='w-full  bg-slate-100 overflow-scroll min-h-[92vh] md:min-h-[90vh] '>
                <div className='flex gap-4 w-full mt-24 md:mt-0 h-full flex-wrap justify-center p-5'>
                    {loading ? (<><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></>) : notes && notes.length === 0 ? (<><NewNote /></>) : notes && notes.map((item) => (<><Note onClick={() => handleDelete(item._id)} key={item._id} time={item.createdAt} id={item._id} title={item.title} description={item.description} /></>))}
                </div>
            <Link href="/newnote">
                <Button /></Link>
            </div >
        </>
    )
}

export default Page