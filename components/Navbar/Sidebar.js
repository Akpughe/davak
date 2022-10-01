import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr';
import { useRouter } from 'next/router';

const Sidebar = ({ close }) => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white h-full">
        <div className="flex justify-end items-center pt-14 sm:px-24 px-12 cursor-pointer">
          <div onClick={close}>
            <GrClose size={25} color="#fefefe" />
            {/* close */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px- space-y-8">
          <div className="mt-3">
            <Link href="/">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`sidebar-text cursor-pointer ${
                  router.pathname === '/'
                    ? 'border-b border-black'
                    : 'opacity-50'
                }`}
              >
                {/* <a > */}
                Home
                {/* </a> */}
              </motion.button>
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/about">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`sidebar-text cursor-pointer ${
                  router.pathname === '/about'
                    ? 'border-b border-black'
                    : 'opacity-50'
                }`}
              >
                About
              </motion.button>
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/projects">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`sidebar-text cursor-pointer ${
                  router.pathname === '/projects'
                    ? 'border-b border-black'
                    : 'opacity-50'
                }`}
              >
                Projects
              </motion.button>
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/resume">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`sidebar-text cursor-pointer ${
                  router.pathname === '/resume'
                    ? 'border-b border-black'
                    : 'opacity-50'
                }`}
              >
                Resumé
              </motion.button>
            </Link>
          </div>
          <div className="mt-5">
            <Link href="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`sidebar-text cursor-pointer ${
                  router.pathname === '/contact'
                    ? 'border-b border-black'
                    : 'opacity-50'
                }`}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
