import { gustApp } from '../data/projectData';
import ProjectItem from '../components/ProjectItem';

export default function Projects() {
  const projects = [gustApp];

  return (
    <div className="w-full fcc">
      {projects.map((project, index) => {
        return (
          <div key={index} className="w-1/2 fcc max-w-[900px]">
            <div className="space-x-2 fr">
              <div className="space-y-2 fc">
                <ProjectItem className="relative w-full " project={project} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
