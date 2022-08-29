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
    <nav className="flex justify-between max-w-6xl m-auto py-[50px] px-12">
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer">davak</h1>
      </Link>
      <div>
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
    </nav>
  );
};

export default Navbar;
