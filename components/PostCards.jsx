import React from 'react'
import moment from "moment";
import Link from "next/link";

const PostCards = ({post}) => {
    return (
        <div className='card rounded-lg shadow-2xl w-full mb-8'>
            <div className="flex flex-col md:flex-row">
            <img 
                src={post.featuredImage.url}
                alt={post.title}
                className=' h-60 object-cover w-full md:w-1/3'
            />
            <div className="p-8 flex flex-col justify-between">
                <h2 className="text-3xl font-extrabold mb-5 text-center md:text-left title2"><Link href={`/post/${post.slug}`}>{post.title}</Link></h2>
                <p className='text-l text-center md:text-left title2 mb-4'>{post.excerpt}</p>
                <Link href={`/post/${post.slug}`}>
                    <span className="text-black border-l secondary title2 py-2 px-4 mt-4 text-center text-l w-30 self-center md:self-start cursor-pointer">Continue Reading</span>
                </Link>
            </div>
            </div>
            <footer className="md:flex text-center items-center justify-center mb-8 w-full py-3 px-2 text-xs text-gray-500 bg-gray-100 rounded-b-md">
                <div className="flex items-center mb-3 justify-center md:mb-0 w-full md:w-auto mr-8">
                <img
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full "
                    src={post.author.photo.url}
                />
                <p className="inline align-middle text-gray-700 ml-2 text-md ">
                    {post.author.name}
                </p>
                </div>
                <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-black-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
            </footer>
        </div>
    )
}

export default PostCards
