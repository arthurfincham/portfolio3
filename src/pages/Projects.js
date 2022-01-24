import { gustApp } from '../data/projectData';
import { iconSelector } from '../svgs/devIcons/iconSelector';

export default function Projects() {
  const projects = [gustApp];

  return (
    <div className="w-full fcc">
      {projects.map((project, index) => {
        return (
          <div key={index} className="w-5/6 fcc max-w-[900px]">
            <div className="space-x-4 fr">
              <img src={project.imagePath} width="500" className="w-1/2 rounded-lg shadow-lg" />
              <div className="items-end w-1/2 fc">
                <p className="text-sm font-mono3">{project.subTitle}</p>
                <h2 className="text-4xl font-a1">{project.title}</h2>
                <div className="w-auto p-3 bg-white rounded-lg shadow-lg fc">
                  {project.description.map((point) => {
                    return <span>{point}</span>;
                  })}
                </div>
                <div className="fr">
                  {project.stack.map((tool) => {
                    return (
                      <div className="items-center fr">
                        {iconSelector(tool)}
                        <span>{tool}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
