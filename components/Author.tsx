import React from "react";

const Author = ({ author }: { author: any }) => {
  console.log(author);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6  flex items-center mt-5">
      <div className="flex-none mr-6">
        <img width="65px" height="65px" className="rounded-full" src={author.photo.url} alt={author.name} />
      </div>
      <div className="">
        <h3 className="font-semibold text-xl mb-1">{author.name}</h3>
        <p className="line-clamp-2">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
