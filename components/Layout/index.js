import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='m-auto max-w-4xl'>{children}</main>
    </div>
  );
};

export default Layout;
