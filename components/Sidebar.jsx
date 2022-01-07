import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from "../services";

const Sidebar = ({isOpen, toggle}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories));
    }, []);
    
    return (
        <div className={isOpen ? 'flex flex-col p-4 bg-black text-white text-lg sidebar' : 'hidden'} onClick={toggle}>
          {categories.map((category) => (
            <p className='m-2 tracking-wider' key={category.name}>
            <Link key={category.slug} href={`/category/${category.slug}`} onClick={toggle} isOpen={isOpen} >
                {category.name}
            </Link>
            </p>
          ))}
        </div>
    )
}

export default Sidebar
