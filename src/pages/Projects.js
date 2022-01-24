import { gustApp, chitter, classNotes, acebook, newsforce, fontApp, countries, licence } from '../data/projectData';
import ProjectItem from '../components/ProjectItem';

export default function Projects() {
  const projects = [gustApp, chitter, classNotes, acebook, newsforce, fontApp, countries, licence];

  return (
    <div className="flex-wrap w-full bg-amber-100 fcc lg:flex-row">
      {projects.map((project, index) => {
        return (
          <div key={index} className="w-5/6 m-6 lg:w-5/12 fcc">
            <div className="space-x-2 fr">
              <div className="space-y-2 fc">
                <ProjectItem className="relative w-full cursor-pointer " project={project} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
