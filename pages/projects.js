import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import FooterLink from '../components/Footer';
import { RadioGroup } from '@headlessui/react';
import ProjectCard from '../components/ProjectCard';
import PROJECT_DATA from '../Data/projects'

const Projects = () => {
  const [selected, setSelected] = useState('All');
  const [projects, setProjects] = useState(PROJECT_DATA)

  console.log('projects', projects)
  return (
    <Layout>
      <div className="my-12 sm:px-0 px-6">
        <h1 className="font-bold text-5xl my-8">Projects.</h1>

        <div>
          <RadioGroup
            value={selected}
            onChange={setSelected}
            // onClick={(e)=> filter(e)}
          >
            <RadioGroup.Label className="sr-only">
              Filter feedback
            </RadioGroup.Label>
            <div className="flex flex-wrap -ml-2 -mb-2">
              {['All'].map((option) => (
                <RadioGroup.Option
                  key={option}
                  value={option}
                  className={({ checked }) =>
                    `px-4 py-1 rounded-lg font-medium text-sm ml-2 mb-2 cursor-pointer ${
                      checked ? 'bg-[#4760e7]' : 'bg-[#f2f4ff]'
                    }`
                  }
                >
                  {({ checked }) => (
                    <RadioGroup.Label
                      as="a"
                      className={`font-medium  ${
                        checked ? 'text-white' : 'text-[#4760e7]'
                      }`}
                    >
                      {option}
                    </RadioGroup.Label>
                  )}
                  {/* {option} */}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="m-auto pt-10">
          {/* projects grid */}
          <div className="project_grid">
            {projects.map((project) => {
              return (

            <div key={project.id} className="card p-2.5">
              <ProjectCard project={project} {...project} />
            </div>
              )
            })}
          </div>
          {/* end projects grid */}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
