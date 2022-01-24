import { iconSelector } from '../svgs/devIcons/iconSelector';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';
import PinIcon from '../svgs/PinIcon';

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
    borderTop: infoMaster() ? 'none' : 'solid',
    borderTopWidth: infoMaster() ? '0' : '0.1em',
  });

  const pinStyle = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: '25px',
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
      <div className="flex items-center h-auto p-1 px-2 space-x-1 bg-white border-[.1em] border-black  border-b-0 rounded-t-lg shadow-md ">
        {children}
      </div>
    );
  };

  const LinkTab = ({ children }) => {
    return <div className="h-auto p-1 px-2 bg-white border-[.1em] border-black  border-b-0 rounded-t-lg shadow-lg hover:bg-gray-100">{children}</div>;
  };

  return (
    <div className="rounded-lg border-[.1em] border-black fcc overflow-hidden">
      <div className="items-end w-full px-4 pt-2 space-x-2 bg-amber-50 border-black  border-b-[.1em] rounded-t-lg  fr  overflow-hidden relative">
        <Tab>
          <span className="text-xl font-mono1">{project.title}</span>
        </Tab>
        <LinkTab>
          <a href={project.repoURL} target="blank" className="text-sm font-mono3">
            GitHub
          </a>
        </LinkTab>
        {project.liveLink ? <Link url={project.liveLink} /> : ''}
        {isPinned ? <PinIcon styles={pinStyle} className="w-[25px] h-[25px] absolute right-3 top-3" /> : ''}
      </div>
      <div className={className} ref={imageRef} onMouseEnter={handleEnter} onMouseLeave={handleExit} onClick={handleClick}>
        <img src={project.imagePath} className="w-full rounded-b-lg shadow-lg projectImage" />
        <animated.div style={infoStyle} className="absolute bottom-0 w-full overflow-hidden shadow-lg bg-amber-50 border-t-[.1em] border-black">
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
