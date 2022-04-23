import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  return (
    <div className="shadow-lg rounded-lg p-8 mb-8 bg-primary">
      <h3 className="text-2xl mb-8 font-semibold border-b pb-4 font-display text-white-3">
        {slug ? "Related " : "Recents "}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Link href={`/post/${post.slug}`} key={post.title}>
              <img
                alt={post.title}
                height="50px"
                width="50px"
                className="align-middle rounded-full cursor-pointer"
                src={post.featuredImage.url}
              />
            </Link>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-xs text-white-3 opacity-80 font-regular font-body">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              <h3 className="text-lg font-regular font-display text-white-3 cursor-pointer">
                {post.title}
              </h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
