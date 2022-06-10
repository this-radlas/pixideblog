import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }: { post: any }) => {
  console.log(post);

  return (
    <div className="shadow-lg rounded-lg p-0 pb-12 mb-8">
      <div className="relative overflow-hidden pb-80 mb-6">
        <img className="object-top absolute h-80 w-full object-cover rounded-t-lg " src={post.featuredImage.url} alt={post.title} />
      </div>
      <div className="px-8">
        <h3 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-center">{post.excerpt}</p>

        <div className="flex justify-start mt-10">
          <img className="mr-4" width="30px" height="30px" src={post.author.photo.url} alt={post.author.photo.name} />
          <div>
            <div>{post.author.name}</div>
            <div>{post.author.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
