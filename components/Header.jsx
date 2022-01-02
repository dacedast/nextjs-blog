import React, { useState, useEffect} from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { getCategories } from "../services";
import Burger from "./Burger";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className="container mx-auto px-10 mb-8 relative">
      <div className="border-b w-full inline-block custom-border py-8">
        <div className="md:float-left block">
        
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white py-5 ">
              Fated
            </span>
          </Link>
          <div className="float-right md:hidden relative">
              <Burger isOpen={isOpen} toggle={toggle}/>
          </div>
        </div>
        
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer links">
                {category.name}
              </span>
            </Link>
          ))}
          </div>
      </div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
    </div>
  );
};

export default Header;
