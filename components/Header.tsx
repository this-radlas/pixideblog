import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "Travel", slug: "travel" },
  { name: "Nomad", slug: "nomad" },
];

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto px-10 mb-8 ">
        <div className="border-b w-full inline-block border-black-400 py-8 ">
          <div className="md:float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl text-black">Blog</span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
