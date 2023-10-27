'use client'
import React, { useEffect, useState } from 'react'
import Note from '../components/Note'
import Button from '../components/Button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import NewNote from '../components/NewNote'
import Loading from '../loading'
import Link from 'next/link'
const Page = () => {
    const [loading, setLoading] = useState(false);
    const [notes, setNotes] = useState();
    const router = useRouter();
    const handleClick = () => {
        console.log("click")
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
            toast.error(error.message);
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
    return (loading ? (<Loading />) :
        <div className='w-full  bg-slate-100 overflow-scroll min-h-[92vh] md:min-h-[90vh] '>
            <div className='flex gap-4 w-full h-full flex-wrap justify-center p-5'>
                {notes && notes.length === 0 ? (<NewNote />) : notes && notes.map((item) => (<Note onClick={() => handleDelete(item._id)} key={item._id} id={item._id} title={item.title} description={item.description} />))}
            </div>
            <Link href="/newnote">
                <Button /></Link>
        </div >
    )
}

export default Page