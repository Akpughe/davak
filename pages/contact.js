import Layout from '../components/Layout';
import React from 'react';
import Link from 'next/link';
import FooterLink from '../components/Footer';

const Contact = () => {
  return (
    <Layout>
      <div className="my-12 sm:px-0 px-6">
        <h1 className="font-bold text-5xl my-8 capitalize">Contact</h1>
        <p className="font-light text-lg pb-4">
          Get in touch or shoot me an email directly on{' '}
          <a className="font-bold" href="mailto:davidakpughe2@gmail.com">
            davidakpughe2@gmail.com
          </a>
        </p>{' '}
        <br />
        <form className=" sm:w-3/5 w-full" action="">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="form-control w-full block py-6 px-5 border border-[#ced4da] rounded mb-8 outline-none font-light"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="form-control w-full block py-6 px-5 border border-[#ced4da] rounded mb-8 outline-none font-light"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="5"
              className=" w-full block py-6 px-5 border border-[#ced4da] rounded mb-8 outline-none font-light"
              placeholder="Message"
              ariaRequired="true"
              required=""
              spellCheck="false"
            ></textarea>
          </div>

          <div>
            <button className="bg-black py-4 px-10 rounded text-white font-light">
              Send Message
            </button>
          </div>
        </form>
        <FooterLink goto="/">Go Back Home</FooterLink>
      </div>
    </Layout>
  );
};

export default Contact;
