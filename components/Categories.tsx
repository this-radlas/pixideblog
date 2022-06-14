import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([] as any[]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="shadow-lg rounded-lg p-6 mb-8 bg-white">
      <h4 className="text-lg font-semibold mb-3">Categories</h4>
      <ul className="flex flex-col list-inside list-disc">
        {categories.map((category) => (
          <li>
            <Link key={category.slug} href={`/category/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
