import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Sidebar from './Sidebar'

const Navbar = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleShow = (event) => {
    setShow(!show);
  };

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
    <>
    {show && (
        <>
          <AnimatePresence>
            <motion.div
              initial={false}
              animate={{
                x: 0,
              }}
             
             
              // transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
              // transition={{ delay: 1 }}
              transition={{
                delay: 0.5,
                x: { duration: 0.5 },
                default: { ease: "linear" }
              }}
              className={`dim w-full h-screen fixed z-[9999] left-0 bottom-0 `}
            >
              {' '}
              <Sidebar show={show} close={handleShow} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0.5, duration: 0.3 }}
              close={handleShow}
              // className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
            />
          </AnimatePresence>
        </>
      )}
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
          <Link href='/resume'>
          <li className={`${
                router.pathname === '/resume' ? 'hidden' : 'relative'
              }`}>
            <a className="font-light nav-item cursor-pointer">Resume</a>
          </li>
          </Link>
          <Link href="/contact">
          <li className={`${
                router.pathname === '/contact' ? 'hidden' : 'relative'
              }`}>
            <a className="font-light nav-item cursor-pointer">Contact</a>
          </li>
          </Link>
        </ul>
      </div>
      <div className="sm:hidden block">
        <button className="navbar-toggler" onClick={handleShow}>
          <span className="navbar-toggler-icon">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
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
    </>
  );
};

export default Navbar;
