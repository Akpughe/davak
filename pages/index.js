import Layout from '../components/Layout';
import FooterLink from '../components/Footer';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div className="">
        <div className="my-12 sm:px-0 px-6">
          <h1 className="font-bold text-6xl my-8">I{"'"}m David Akpughe</h1>

          <div className="mt-8 space-y-4">
            <p className="text-lg font-light text-gray-700">
              Frontend developer and Javascript engineer. I enjoy creating
              frontend solutions that are reliable, scalable, and have excellent
              user experiences.
            </p>
            <p className="text-lg font-light text-gray-700">
              Working with my hands to make magic happen on the internet. View
              my{' '}
              <a onClick={() => router.push('/projects')}>
                <button className="btn_template">Projects </button>
              </a>
              ,{' '}
              <a className="">
                <button className="btn_template">Resume </button>
              </a>
              ,
              <a className="">
                <button className="btn_template">Contact me </button>
              </a>{' '}
              or send me an email at{' '}
              <a>
                <button className="btn_template sm:mt-0 mt-1">
                  davidakpughe2@gmail.com{' '}
                </button>
              </a>
              .
            </p>
          </div>

          <FooterLink goto="/about">See more about me</FooterLink>
        </div>
      </div>
    </Layout>
  );
}
