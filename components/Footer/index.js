import React from 'react';
import Link from 'next/link';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterLink = ({ children, goto }) => {
  return (
    <div>
      <div className="mt-8">
        <Link href={`${goto}`}>
          <p className="toabout capitalize cursor-pointer text-lg font-light text-gray-700 flex items-center hover:underline">
            {children}
          </p>
        </Link>
      </div>

      <br />

      <div className="flex mt-8 space-x-6">
        <a
          href="https://twitter.com/davak_01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter
            size={20}
            className="text-gray-700 hover:text-gray-900"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-akpughe-392241103/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={20}
            className="text-gray-700 hover:text-gray-900"
          />
        </a>
        <a
          href="https://github.com/Akpughe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub
            size={20}
            className="text-gray-700 hover:text-gray-900"
          />
        </a>
        <a
          href="https://instagram.com/just.skayte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram
            size={20}
            className="text-gray-700 hover:text-gray-900"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterLink;
