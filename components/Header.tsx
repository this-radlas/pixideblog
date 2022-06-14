import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([] as any[]);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-slate-200">
      <div className="container mx-auto px-5 mb-8">
        <div className="border-b w-full py-5 ">
          <div className="inline-block">
            <Link href="/">
              <span className="cursor-pointer font-semibold text-2xl text-black">CZECH NOMAD</span>
            </Link>
          </div>
          <button className="float-right inline-flex p-3 -mt-2 md:p-0 md:mt-0 md:hidden outline-none -ml-3" onClick={handleClick}>
            {active ? (
              <svg className="w-6 h-6" fill="none" stroke="#333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                <path
                  d="M4.722 3.295l4.277 4.278 4.28-4.278a1.008 1.008 0 011.426 1.427l-4.279 4.277 4.279 4.28a1.008 1.008 0 01-1.427 1.426L9 10.426l-4.277 4.279a1.008 1.008 0 01-1.427-1.427L7.573 9 3.295 4.722a1.008 1.008 0 011.427-1.427z"
                  fill="#333"
                />
              </svg>
            )}
          </button>
          <div className={`md:float-left md:contents w-full ${active ? "hidden" : "mt-5"}`}>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <div className="md:float-right mt-1 align-middle md:ml-4 font-semibold cursor-pointer">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
