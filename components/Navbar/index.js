import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  let currentPath = router.pathname;
  console.log(router.pathname);

  // hide active pathname
  const hideActive = () => {
    if (router.pathname === currentPath) {
      return 'hidden';
    } else {
      return 'relative';
    }
  };

  return (
    <nav className="flex justify-between max-w-6xl m-auto py-[50px] sm:px-12 px-6">
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer">davak</h1>
      </Link>
      <div className="sm:block hidden">
        <ul className="flex space-x-8">
          <Link href="/about">
            <li
              className={`${
                router.pathname === '/about' ? 'hidden' : 'relative'
              }`}
            >
              <a className="font-light nav-item cursor-pointer">About</a>
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={`${
                router.pathname === '/projects' ? 'hidden' : 'relative'
              }`}
            >
              <a className="font-light nav-item cursor-pointer">Projects</a>
            </li>
          </Link>
          <li className="relative">
            <a className="font-light nav-item cursor-pointer">Resume</a>
          </li>
          <li className="relative">
            <a className="font-light nav-item cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>
      <div className="sm:hidden block">
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="1"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1.8em"
              width="1.8em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
