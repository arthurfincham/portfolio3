import { iconSelector } from '../svgs/devIcons/iconSelector';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';
import PinIcon from '../svgs/PinIcon';
import PlusIcon from '../svgs/PlusIcon';

export default function ProjectItem({ project, className }) {
  const [isClosed, setIsClosed] = useState(true);

  const [isPinned, setIsPinned] = useState(false);

  const [ref, bounds] = useMeasure();

  const [imageRef, imageBounds] = useMeasure();

  const capitalize = (str) => {
    return str.toUpperCase();
  };

  const handleEnter = () => {
    setIsClosed(!isClosed);
  };

  const handleExit = () => {
    setIsClosed(!isClosed);
  };

  const handleClick = () => {
    setIsPinned(!isPinned);
  };

  const infoMaster = () => {
    if (isPinned) {
      return false;
    } else if (!isClosed) {
      return false;
    } else {
      return true;
    }
  };

  const infoStyle = useSpring({
    height: infoMaster() ? 0 : bounds.height,
  });

  const pinStyle = {
    fill: isPinned ? 'black' : 'none',
    stroke: isPinned ? '#FFF4C7' : 'black',
    strokeWidth: isPinned ? '5px' : '25px',
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
    return (
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
        onClick={handleClick}
        className="flex items-center h-auto p-1 px-2 space-x-1 border-2 border-b-0 rounded-t-lg shadow-lg cursor-pointer bg-amber-100 hover:bg-amber-300/40"
      >
        {children}
      </div>
    );
  };

  const LinkTab = ({ children }) => {
    return <div className="h-auto p-1 px-2 border-2 border-b-0 rounded-t-lg shadow-lg bg-amber-100 hover:bg-amber-300/40">{children}</div>;
  };

  return (
    <div className="border-2 rounded-lg fcc">
      <div className="items-end w-full px-4 pt-2 space-x-2 border-b-2 rounded-t-lg shadow-lg bg-amber-50 fr">
        <Tab>
          {isClosed ? <PlusIcon className="w-[20px] h-[20px] scale-[1.3]" /> : <PinIcon styles={pinStyle} className="w-[20px] h-[20px]" />}
          <span className="text-xl font-mono1">{project.title}</span>
        </Tab>
        <LinkTab>
          <a href={project.repoURL} target="blank" className="text-sm font-mono3">
            GitHub
          </a>
        </LinkTab>
        {project.liveLink ? <Link url={project.liveLink} /> : ''}
      </div>
      <div className={className} ref={imageRef}>
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
