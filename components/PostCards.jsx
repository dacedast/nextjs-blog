import React from 'react'
import moment from "moment";
import Link from "next/link";
import Image from 'next/image';

const PostCards = ({post}) => {
    return (
        <div className='card rounded-lg w-full mb-8 border'>
            <div className="flex flex-col md:flex-row">
                    <Image
                        src={post.featuredImage.url}
                        alt={post.title}
                        unoptimized
                        width={300}
                        height={300}
                        placeholder="empty"
                        className='h-60 object-cover w-full md:w-1/3'
                    />            
            <div className=" flex flex-col w-full justify-between">
                <h2 className="text-3xl font-bold mb-5 text-center md:text-left title2 p-4"><Link href={`/post/${post.slug}`}>{post.title}</Link></h2>
                <p className='text-xl text-center md:text-left title3 mb-4 p-4'><Link href={`/post/${post.slug}`}>{post.excerpt}</Link></p>
                <footer className="md:flex text-center items-center justify-center w-3/3 py-3 px-2 text-xs text-gray-500 bg-gray-100 rounded-b-md">
                <div className="flex items-center mb-3 justify-center md:mb-0 w-full md:w-auto mr-8">
                <img
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full "
                    src={post.author.photo.url}
                />
                <p className="inline align-middle text-black ml-2 text-md ">
                    {post.author.name}
                </p>
                </div>
                        <div className="font-medium text-black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mr-2 text-black"
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
                {/* <Link href={`/post/${post.slug}`}>
                    <span className="text-black opacity-90 border-l border-black title2 py-2 px-4 mt-4 text-center text-l w-30 self-center md:self-start cursor-pointer">Continue Reading</span>
                </Link> */}
            </div>
            </div>
            
        </div>
    )
}

export default PostCards
