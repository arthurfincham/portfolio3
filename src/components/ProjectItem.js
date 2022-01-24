import { iconSelector } from '../svgs/devIcons/iconSelector';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';

export default function ProjectItem({ project, className }) {
  const [isClosed, setIsClosed] = useState(true);

  const [ref, bounds] = useMeasure();

  const [imageRef, imageBounds] = useMeasure();

  const infoStyle = useSpring({
    height: isClosed ? 0 : bounds.height,
  });
  const capitalize = (str) => {
    return str.toUpperCase();
  };

  const handleEnter = () => {
    setIsClosed(!isClosed);
  };

  const handleExit = () => {
    setIsClosed(!isClosed);
  };

  const Link = ({ url }) => {
    return (
      <LinkTab>
        <a href={url} target="blank" className="text-sm font-mono3">
          Site
        </a>
      </LinkTab>
    );
  };

  const Tab = ({ children }) => {
    return <div className="h-auto p-1 px-2 border-2 border-b-0 shadow-lg rounded-t-xl bg-amber-100">{children}</div>;
  };

  const LinkTab = ({ children }) => {
    return <div className="h-auto p-1 px-2 border-2 border-b-0 shadow-lg rounded-t-xl bg-amber-100 hover:border-indigo-500">{children}</div>;
  };

  const subTitleStyle = {
    height: imageBounds.height,
  };

  return (
    <div className="border-2 rounded-lg fcc">
      <div className="items-end w-full px-4 pt-2 space-x-2 border-b-2 rounded-t-lg shadow-lg bg-amber-50 fr">
        <Tab>
          <span className="font-mono1">{project.title}</span>
        </Tab>
        <LinkTab>
          <a href={project.repoURL} target="blank" className="text-sm font-mono3">
            GitHub
          </a>
        </LinkTab>
        {project.liveLink ? <Link url={project.liveLink} /> : ''}
      </div>
      <div className={className} onMouseEnter={handleEnter} onMouseLeave={handleExit} ref={imageRef}>
        <img src={project.imagePath} className="w-full rounded-b-lg shadow-lg projectImage" />
        <animated.div style={infoStyle} className="absolute bottom-0 w-full overflow-hidden rounded-lg shadow-lg bg-amber-100">
          <div ref={ref} className="w-full px-2 pb-4">
            <div className="w-full p-3 py-6 space-y-2 text-sm font-a3 fc">
              {project.description.map((point) => {
                return <span className="">{point}</span>;
              })}
            </div>
            <div className="fr">
              {project.stack.map((tool) => {
                return (
                  <div className="items-center justify-center px-2 space-x-2 fr">
                    {iconSelector(tool, 'w-1/5 h-auto')}
                    <span className="text-sm font-mono3">{capitalize(tool)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}
