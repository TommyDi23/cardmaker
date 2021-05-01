import React from "react";

const NavBar = () => {
  return (
    <div
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <h2 className="pl-8">logo</h2>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <div className="flex flex-row">
          <p className="pl-8"> about </p>
          <p className="pl-8"> get started </p>
          <p className="pl-8"> FAQ </p>
          <p className="pl-8"> login </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
