import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="shadow-lg rounded-lg p-8 mb-2 bg-primary">
      <h3 className="text-2xl mb-8 font-semibold border-b pb-4 text-white-3 font-display">
        Categories
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3 mx-2 text-lg font-regular font-display text-white-3">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
