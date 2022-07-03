import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TailSpin } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';

import ProjectItem from '../components/ProjectItem';
import {
  gustApp,
  chitter,
  classNotes,
  acebook,
  newsforce,
  fontApp,
  countries,
  licence,
} from '../data/projectData';

export default function Projects() {
  const projects = [
    gustApp,
    chitter,
    classNotes,
    acebook,
    newsforce,
    fontApp,
    countries,
    licence,
  ];

  const [loading, setLoading] = useState(true);

  const imagesLoaded = [];

  const addImage = (image) => {
    imagesLoaded.push(image);
    if (imagesLoaded.length > 7) {
      setLoading(false);
    }
  };

  const loadingStyle = {
    opacity: loading ? 0 : 1,
  };
  return (
    <>
      <Helmet>
        <title>projects | arthur fincham frontend developer</title>
        <meta name="description" content="some of my older projects" />
      </Helmet>
      <div className="flex flex-col items-center">
        <NavLink
          className="font-a2 text-xl mt-4 text-orange-500"
          id="projectsBackButton"
          to="/"
        >
          back
        </NavLink>
        <div className="flex-wrap w-full bg-white dark:bg-gray-900 fcc lg:flex-row">
          {loading && (
            <div className="w-full fcc">
              <TailSpin color="#4F47E6" height={80} width={80} />
            </div>
          )}
          {projects.map((project, index) => {
            return (
              <div key={index} className="w-5/6 m-6 lg:w-5/12 fcc">
                <div className="space-x-2 fr">
                  <div className="space-y-2 fc">
                    <ProjectItem
                      style={loadingStyle}
                      className="relative w-full cursor-pointer "
                      project={project}
                      addImage={addImage}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
