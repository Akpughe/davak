import React, { useState } from 'react';
import SidebarModal from '../SidebarModal';

const ProjectCard = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="" onClick={handleShow}>
        <div className="content_main relative object-cover rounded-xl flex items-end h-80 cursor-pointer ">
          <img
            src={project.imageUrl}
            alt="alt-here"
            className="w-full h-full object-cover rounded-xl img-lay"
          />
          <div className="content__slate px-6 py-8 mb-4 w-full rounded-br-xl rounded-bl-xl space-y-2 ">
            <h3 className="font-bold text-2xl">{project.title}</h3>
            <p className="text-base">{project.description}</p>
            <p className="flex flex-wrap">
              {project.technologies.map(
                (tech => <span className="block mb-1">{tech}</span>)
              )}
            </p>
          </div>
        </div>
      </div>

      <SidebarModal show={show} handleShow={handleShow} data={project} />
    </>
  );
};

export default ProjectCard;
