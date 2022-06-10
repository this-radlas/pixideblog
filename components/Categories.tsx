import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="shadow-lg rounded-lg p-0 p-8 mb-8 bg-white">
      <h4 className="text-2xl font-semibold mb-3">Categories</h4>
      {categories.map((category) => (
        <Link key={category.slug} href={`/${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
