import { iconSelector } from '../svgs/devIcons/iconSelector';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';
import PinIcon from '../svgs/PinIcon';
import ResponsiveImage from './ResponsiveImage';

export default function ProjectItem({ project, className }) {
  const [isClosed, setIsClosed] = useState(true);

  const [isPinned, setIsPinned] = useState(false);

  const [ref, bounds] = useMeasure();

  const capitalize = (str) => {
    return str.toUpperCase();
  };

  const handleEnter = () => {
    setIsClosed(!isClosed);
  };

  const handleExit = () => {
    if (!isClosed) {
      setIsClosed(!isClosed);
    }
  };

  const handleClick = () => {
    setIsPinned(!isPinned);
    if (isPinned) {
      setIsClosed(!isClosed);
    }
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
    borderTop: infoMaster() ? 'none' : 'solid',
    borderTopWidth: infoMaster() ? '0' : '0.1em',
  });

  const pinStyle = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: '25px',
  };

  const Link = ({ url, text }) => {
    return (
      <div className="h-auto p-1 px-2 rounded-t-lg shadow-lg bg-amber-50 hover:bg-amber-100">
        <a href={url} target="blank" className="text-sm font-mono3">
          {text}
        </a>
      </div>
    );
  };

  return (
    <div className="overflow-hidden rounded-lg shadowTop fcc">
      <div className="relative items-end justify-between w-full px-4 pt-2 overflow-hidden rounded-t-lg shadowTop bg-amber-100 fr">
        <div className="space-x-2 fr ">
          <Link url={project.repoURL} text="GitHub" />
          {project.liveLink ? <Link url={project.liveLink} text="Site" /> : ''}
        </div>
        <div className="items-center space-x-1 fr">
          {isPinned ? <PinIcon styles={pinStyle} className="w-[15px] h-[15px] mb-1 " /> : ''}
          <span className="text-xl font-a1">{project.title}</span>
        </div>
      </div>
      <div className={className} onMouseEnter={handleEnter} onMouseLeave={handleExit} onClick={handleClick}>
        <ResponsiveImage image={project.imagePath} />
        <animated.div style={infoStyle} className="absolute bottom-0 w-full overflow-hidden shadow-lg bg-amber-100">
          <div ref={ref} className="w-full px-2 pb-4">
            <div className="w-full p-3 py-6 space-y-2 text-sm font-a3 fc">
              {project.description.map((point, index) => {
                return (
                  <span key={index} className="">
                    {point}
                  </span>
                );
              })}
            </div>
            <div className="fr">
              {project.stack.map((tool, index) => {
                return (
                  <div key={index} className="items-center justify-center px-2 space-x-2 fr">
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
