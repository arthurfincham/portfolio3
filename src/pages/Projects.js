import { gustApp, chitter, classNotes, acebook, newsforce, fontApp, countries, licence } from '../data/projectData';
import ProjectItem from '../components/ProjectItem';
import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Projects() {
  const projects = [gustApp, chitter, classNotes, acebook, newsforce, fontApp, countries, licence];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const loadingStyle = {
    opacity: loading ? 0 : 1,
  };
  return (
    <div className="flex-wrap w-full bg-amber-100 fcc lg:flex-row">
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
                <ProjectItem style={loadingStyle} className="relative w-full cursor-pointer " project={project} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
