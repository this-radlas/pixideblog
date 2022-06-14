import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import { getFeaturedPosts } from "../services";

const FeaturedCard = () => {
  const [featuredPosts, setFeaturedPosts] = useState([] as any[]);

  useEffect(() => {
    getFeaturedPosts().then((result) => setFeaturedPosts(result));
  });

  return (
    <div className="shadow-lg rounded-lg p-6 mb-8 bg-white">
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold mb-3">Favorite posts</h4>
        {featuredPosts.map((post) => (
          <div key={post.title} className="flex items-center w-full">
            <div className="w-10 flex-none">
              <Link href={`/post/${post.slug}`}>
                <img
                  alt={post.title}
                  height="100px"
                  width="100px"
                  className="object-cover h-10 w-10  align-middle rounded-full"
                  src={post.featuredImage.url}
                />
              </Link>
            </div>
            <div className="flex-grow ml-4">
              <Link href={`/post/${post.slug}`} className="text-sm">
                {post.title}
              </Link>
              <p className="text-gray-500 text-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedCard;
