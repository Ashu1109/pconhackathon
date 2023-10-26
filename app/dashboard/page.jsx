'use client'
import React from 'react'
import Note from '../components/Note'
import Button from '../components/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiBallPenLine, RiShareBoxLine } from 'react-icons/ri'
const notes = [
    {
        title: "Physics.ksngf, lvks.rnf lkrvs.fmnv rlkfsm, ",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus alias sapiente obcaecati consequuntur ex eveniet ipsa pariatur veniam a, maxime minima qui nostrum magnam laborum quasi inventore enim est nemo. Vel suscipit obcaecati voluptates cumque molestiae tenetur, quae cum vitae explicabo nemo.Deleniti possimus repudiandae dignissimos et nam nihil consequuntur, dolore amet repellendus doloribus velit.Magnam quo non explicabo eaque. Illum impedit et necessitatibus.Totam asperiores, at atque, harum, ipsum saepe error molestias tempore fugit praesentium nisi hic ad optio mollitia nulla quas veritatis! Ipsam praesentium a at nostrum assumenda? Delectus magni quod aut quam.Omnis, cum.Unde dolorum sit enim ut vel ipsa, recusandae odit, a aperiam necessitatibus quidem nesciunt consequuntur, numquam quasi dolores corrupti quisquam excepturi! Temporibus, perferendis. Sit sunt molestias veniam necessitatibus atque beatae labore, repudiandae fugiat praesentium rerum debitis fugit quis animi optio, commodi dicta deserunt repellendus aperiam et inventore neque numquam obcaecati culpa doloribus.Deserunt"
    },
    {
        title: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus alias sapiente obcaecati consequuntur ex eveniet ipsa pariatur veniam a, maxime minima qui nostrum magnam laborum quasi inventore enim est nemo. Vel suscipit obcaecati voluptates cumque molestiae tenetur, quae cum vitae explicabo nemo.Deleniti possimus repudiandae dignissimos et nam nihil consequuntur, dolore amet repellendus doloribus velit.Magnam quo non explicabo eaque. Illum impedit et necessitatibus.Totam asperiores, at atque, harum, ipsum saepe error molestias tempore fugit praesentium nisi hic ad optio mollitia nulla quas veritatis! Ipsam praesentium a at nostrum assumenda? Delectus magni quod aut quam.Omnis, cum.Unde dolorum sit enim ut vel ipsa, recusandae odit, a aperiam necessitatibus quidem nesciunt consequuntur, numquam quasi dolores corrupti quisquam excepturi! Temporibus, perferendis. Sit sunt molestias veniam necessitatibus atque beatae labore, repudiandae fugiat praesentium rerum debitis fugit quis animi optio, commodi dicta deserunt repellendus aperiam et inventore neque numquam obcaecati culpa doloribus.Deserunt"
    },
    {
        title: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus alias sapiente obcaecati consequuntur ex eveniet ipsa pariatur veniam a, maxime minima qui nostrum magnam laborum quasi inventore enim est nemo. Vel suscipit obcaecati voluptates cumque molestiae tenetur, quae cum vitae explicabo nemo.Deleniti possimus repudiandae dignissimos et nam nihil consequuntur, dolore amet repellendus doloribus velit.Magnam quo non explicabo eaque. Illum impedit et necessitatibus.Totam asperiores, at atque, harum, ipsum saepe error molestias tempore fugit praesentium nisi hic ad optio mollitia nulla quas veritatis! Ipsam praesentium a at nostrum assumenda? Delectus magni quod aut quam.Omnis, cum.Unde dolorum sit enim ut vel ipsa, recusandae odit, a aperiam necessitatibus quidem nesciunt consequuntur, numquam quasi dolores corrupti quisquam excepturi! Temporibus, perferendis. Sit sunt molestias veniam necessitatibus atque beatae labore, repudiandae fugiat praesentium rerum debitis fugit quis animi optio, commodi dicta deserunt repellendus aperiam et inventore neque numquam obcaecati culpa doloribus.Deserunt"
    },
    {
        title: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus alias sapiente obcaecati consequuntur ex eveniet ipsa pariatur veniam a, maxime minima qui nostrum magnam laborum quasi inventore enim est nemo. Vel suscipit obcaecati voluptates cumque molestiae tenetur, quae cum vitae explicabo nemo.Deleniti possimus repudiandae dignissimos et nam nihil consequuntur, dolore amet repellendus doloribus velit.Magnam quo non explicabo eaque. Illum impedit et necessitatibus.Totam asperiores, at atque, harum, ipsum saepe error molestias tempore fugit praesentium nisi hic ad optio mollitia nulla quas veritatis! Ipsam praesentium a at nostrum assumenda? Delectus magni quod aut quam.Omnis, cum.Unde dolorum sit enim ut vel ipsa, recusandae odit, a aperiam necessitatibus quidem nesciunt consequuntur, numquam quasi dolores corrupti quisquam excepturi! Temporibus, perferendis. Sit sunt molestias veniam necessitatibus atque beatae labore, repudiandae fugiat praesentium rerum debitis fugit quis animi optio, commodi dicta deserunt repellendus aperiam et inventore neque numquam obcaecati culpa doloribus.Deserunt"
    },
    {
        title: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus alias sapiente obcaecati consequuntur ex eveniet ipsa pariatur veniam a, maxime minima qui nostrum magnam laborum quasi inventore enim est nemo. Vel suscipit obcaecati voluptates cumque molestiae tenetur, quae cum vitae explicabo nemo.Deleniti possimus repudiandae dignissimos et nam nihil consequuntur, dolore amet repellendus doloribus velit.Magnam quo non explicabo eaque. Illum impedit et necessitatibus.Totam asperiores, at atque, harum, ipsum saepe error molestias tempore fugit praesentium nisi hic ad optio mollitia nulla quas veritatis! Ipsam praesentium a at nostrum assumenda? Delectus magni quod aut quam.Omnis, cum.Unde dolorum sit enim ut vel ipsa, recusandae odit, a aperiam necessitatibus quidem nesciunt consequuntur, numquam quasi dolores corrupti quisquam excepturi! Temporibus, perferendis. Sit sunt molestias veniam necessitatibus atque beatae labore, repudiandae fugiat praesentium rerum debitis fugit quis animi optio, commodi dicta deserunt repellendus aperiam et inventore neque numquam obcaecati culpa doloribus.Deserunt"
    },
]
const page = () => {
    const handleClick = () => {
        console.log("click")
    }
    return (
        <div className='w-full  bg-slate-100 overflow-scroll h-full md:h-[90vh] '>
            <div className='flex gap-4 w-full h-full flex-wrap justify-center p-5'>
                {
                    notes.map((item, index) => (<Note key={index} title={item.title} description={item.description} />))
                }
            </div>
            <Button onClick={handleClick} />
        </div >
    )
}

export default page