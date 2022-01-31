import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import { TailSpin } from 'react-loader-spinner';
import ProjectItem from '../components/ProjectItem';
import { gustApp, chitter, classNotes, acebook, newsforce, fontApp, countries, licence } from '../data/projectData';

export default function Projects() {
  const projects = [gustApp, chitter, classNotes, acebook, newsforce, fontApp, countries, licence];

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
        <title>Projects | Arthur Fincham Software Developer</title>
        <meta name="description" content="A collection of my favorite developement projects including work with React, Express, Ruby on Rails and Sinatra." />
        <meta name="keywords" content="developer, programmer, coding, full-stack, react, arthur, fincham, Arthur Fincham, London, react, React, Rails"/>
      </Helmet>
      <div className="flex-wrap w-full bg-amber-100 dark:bg-slate-900 fcc lg:flex-row">
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
                  <ProjectItem style={loadingStyle} className="relative w-full cursor-pointer " project={project} addImage={addImage} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
