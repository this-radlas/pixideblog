import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
import moment from "moment";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([] as any[]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="shadow-lg rounded-lg p-6 mb-8 bg-white">
      <h4 className="text-lg font-semibold mb-3">{slug ? "Related Posts" : "Recent Posts"}</h4>
      <div className="flex flex-col">
        {relatedPosts.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-3">
            <div className="w-10 flex-none overflow-hidden">
              <Link href={`/post/${post.slug}`}>
                <img alt={post.title} className="object-cover h-10 w-10 align-middle rounded-full " src={post.featuredImage.url} />
              </Link>
            </div>
            <div className="flex-grow ml-4">
              <Link href={`/post/${post.slug}`} className="text-md">
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

export default PostWidget;
