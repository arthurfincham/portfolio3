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
      <a href={url} className="text-sm font-mono3">
        LIVE SITE
      </a>
    );
  };

  const subTitleStyle = {
    height: imageBounds.height,
  };

  return (
    <div className="items-end space-x-1 fr">
      <div style={subTitleStyle} className="w-auto text-sm rotateElement fcc">
        <p className="text-xl font-mono3">{project.subTitle}</p>
      </div>
      <div className="fcc">
        <div className="items-center justify-between w-full px-2 fr">
          <h2 className="text-4xl font-a1">{project.title}</h2>
          <a href={project.repoURL} className="text-sm font-mono3">
            GITHUB
          </a>
          {project.liveLink ? <Link url={project.liveLink} /> : ''}
        </div>
        <div className={className} onMouseEnter={handleEnter} onMouseLeave={handleExit} ref={imageRef}>
          <img src={project.imagePath} className="w-full rounded-lg shadow-lg projectImage" />
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
    </div>
  );
}
