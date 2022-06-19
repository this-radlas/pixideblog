import React from "react";
import moment from "moment";

const PostDetail = ({ post }: { post: any }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="relative overflow-hidden">
        <img src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full rounded-t-lg" />
      </div>
      <div className="p-8">
        <div className="flex items-center mb-8 w-full">
          {post.author && (
            <div className="flex items-center lg:mb-0 lg:w-auto mr-8">
              <img alt={post.author.name} height="30px" width="30px" className="align-middle rounded-full" src={post.author.photo.url} />
              <p className="inline align-middle text-gray-600 ml-2 text-md font-semibold">{post.author.name}</p>
            </div>
          )}
          <div className="flex items-center font-medium text-gray-600 whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="whitespace-nowrap">{moment(post.createdAt).format("DD, MMM, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <p className="content" dangerouslySetInnerHTML={{ __html: post.content.html }}></p>
      </div>
    </div>
  );
};

export default PostDetail;
