import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto p-10">
      <div className="flex flex-col justify-center text-center items-center">
        <span className="font-extrabold text-4xl py-5 text-secondary font-display">
          RYOTA
        </span>
        <div className="text-center text-md text-secondary font-body">
          Copyright © {new Date().getFullYear() + ` `} Made with love. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
