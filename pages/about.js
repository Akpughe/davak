import Layout from '../components/Layout';
import React from 'react';
import Link from 'next/link';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineDribbble
} from 'react-icons/ai';
import FooterLink from '../components/Footer';

const About = () => {
  return (
    <Layout>
      <div className="my-12 sm:px-0 px-6">
        <h1 className="font-bold text-5xl my-8 capitalize">About me.</h1>

        <article>
          <ul className="timeline">
            <li className="mt-2">
              <div className="flex justify-between mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/Akpughe"
                  className="flex items-center text-lg hover:underline"
                >
                  Engineering{' '}
                  <small className="-mt-1 ml-1">
                    <AiFillGithub />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/Akpughe"
                  className="underline text-base font-normal"
                >
                  View Github
                </a>
              </div>
              <p className="text-lg font-light leading-7 ">
                First impressions matter in business, and a well-designed
                website is essential to capitalize on them. A great website must
                also be useful and user-friendly in addition to being visually
                appealing. I can create slick, aesthetically pleasing websites
                while also coming up with clever answers to technical problems
                thanks to my background as a programmer. I am familiar with
                contemporary building methods in addition to having significant
                understanding of acknowledged technical standards.
                {/* In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar. */}
              </p>
            </li>

            <li className="mt-2">
              <div className="flex justify-between mb-4">
                <a
                  className="flex items-center text-lg hover:underline"
                >
                  Design{' '}
                  <small className="-mt-1 ml-1"><AiOutlineDribbble /></small>
                </a>
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/Akpughe"
                  className="underline text-base font-normal"
                >
                  View Github
                </a> */}
              </div>
              <p className="text-lg font-light leading-7 ">
                I design, even though I{"'"}m probably not the traditional designer
                sitting in front of a figma board tweaking pixels. You{"'"}ll find
                me engrossed in stylesheets, adjusting font sizes and thinking
                about layouts. I{"'"}m dedicated to making fluid user
                experiences while being stylish.
              </p>
            </li>
          </ul>
        </article>

        <FooterLink goto="/projects">Lets Continue To Projects</FooterLink>

      </div>
    </Layout>
  );
};

export default About;
