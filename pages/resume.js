import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Resume = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="my-12 sm:px-0 px-6">
        <h1 className="font-bold text-5xl my-5 capitalize">Resumé.</h1>
        <p className="font-light text-lg pb-4">
          Reach out to me via my{' '}
          <a
            onClick={() => router.push('/contact')}
            className="font-semibold cursor-pointer hover:underline"
          >
            contact page
          </a>
          {', '}
          <a
            href="https://www.dropbox.com/s/fwn9werlug5u03p/David_Akpughe_Resume.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            view
          </a>{' '}
          or{' '}
          <a
            className="font-semibold hover:underline"
            href="https://www.dropbox.com/s/fwn9werlug5u03p/David_Akpughe_Resume.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            download the resume
          </a>
        </p>
        <br />
        <div >
          <iframe
            src="https://drive.google.com/file/d/19hvQ4LHpGV0_OTcrU9XWJdH5zPrUHZeJ/preview"
            //   width="740"
            //   height="980"
            allow="autoplay"
            className="sm:pr-0 pr-4"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
