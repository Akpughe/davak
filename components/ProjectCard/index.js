import React, { useState } from 'react';
import SidebarModal from '../SidebarModal';

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="" onClick={handleShow}>
        <div className="content_main relative object-cover rounded-xl flex items-end h-80 cursor-pointer ">
          <img
            src="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage"
            alt="alt-here"
            className="w-full h-full object-cover rounded-xl img-lay"
          />
          <div className="content__slate px-6 py-8 mb-4 w-full rounded-br-xl rounded-bl-xl space-y-2 ">
            <h3 className="font-bold text-2xl">Title here</h3>
            <p className="text-base">Description here</p>
            <p className="flex flex-wrap">
              <span className="block mb-1">html</span>
              <span className="block mb-1">css</span>
              <span className="block mb-1">javascript</span>
            </p>
          </div>
        </div>
      </div>

      <SidebarModal show={show} handleShow={handleShow} />
    </>
  );
};

export default ProjectCard;
