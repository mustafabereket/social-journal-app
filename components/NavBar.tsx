import Link from "next/link";
import React from "react";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-gray-800 text-white fixed top-0">
      <div className="ml-4">
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>
      <div className="mr-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/sign-up">
              <span>Sign Up</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
