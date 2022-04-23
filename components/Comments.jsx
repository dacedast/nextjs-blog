import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";
import { comment } from "postcss";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comment.length > 0 && (
        <div className="cards shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 font-body text-black ">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              className="border-b border-gray-100 mb-4 pb-4"
              key={comment.createdAt}
            >
              <p className="mb-4 font-body text-black">
                <span className="font-semibold font-body text-black">
                  {comment.name}
                </span>{" "}
                on {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full font-body text-black">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
