import React from 'react'

const Footer = () => {
    return (
        <footer className='container mx-auto p-10'>
        <div className="flex flex-col justify-center text-center items-center">
          <span className="font-bold text-4xl text-white py-5 border-t w-full inline-block px-10">
              Dastan D.
            </span>
            <div className="text-center text-white">Copyright © {new Date().getFullYear() + ` `} Made with love. All rights
        reserved.</div>
        </div>
      </footer>
    )
}

export default Footer
