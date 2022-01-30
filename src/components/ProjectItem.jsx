import React, { useState } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { iconSelector } from '../svgs/devIcons/iconSelector';
import PinIcon from '../svgs/PinIcon';
import ResponsiveImage from './ResponsiveImage';

export default function ProjectItem({ project, className, style, addImage }) {
  const mobile = window.innerWidth < 400;

  const [isClosed, setIsClosed] = useState(true);

  const [isPinned, setIsPinned] = useState(false);

  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });

  const [prevRef, prevBounds] = useMeasure({ polyfill: ResizeObserver });

  const capitalize = (str) => {
    return str.toUpperCase();
  };

  const handleEnter = () => {
    if (!mobile) {
      setIsClosed(!isClosed);
    }
  };

  const handleExit = () => {
    if (!mobile) {
      if (!isClosed) {
        setIsClosed(!isClosed);
      }
    }
  };

  const handleClick = () => {
    if (mobile) {
      setIsClosed(!isClosed);
    } else {
      setIsPinned(!isPinned);
      if (isPinned) {
        setIsClosed(!isClosed);
      }
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
    maxHeight: prevBounds.height,
    height: infoMaster() ? 0 : bounds.height,
    borderTop: infoMaster() ? 'none' : 'solid',
    borderTopWidth: infoMaster() ? '0' : '0.1em',
  });

  const pinStyle = {
    fill: 'none',
    stroke: 'black',
    strokeWidth: '25px',
  };

  const Link = ({ url, text,  testID }) => {
    return (
      <div className="h-auto p-1 px-2 rounded-t-lg shadow-lg bg-amber-50 hover:bg-amber-100 dark:bg-slate-700">
        <a href={url} target="_blank" className="text-sm dark:text-white font-mono3" data-testid={testID} rel="noreferrer">
          {text}
        </a>
      </div>
    );
  };

  return (
    <div style={style} className="overflow-hidden rounded-lg shadowTop fcc">
      <div className="relative items-end justify-between w-full px-4 pt-2 overflow-hidden rounded-t-lg shadowTop bg-amber-100 fr dark:bg-slate-700/40">
        <div className="space-x-2 fr ">
          <Link url={project.repoURL} text="GitHub"  testID={`${project.title}-GitHubLink`} />
          {project.liveLink ? <Link url={project.liveLink} text="Site"  testID={`${project.title}-LiveSiteLink`} /> : ''}
        </div>
        <div className="items-center space-x-1 fr">
          {isPinned ? <PinIcon styles={pinStyle} className="w-[15px] h-[15px] mb-1 " /> : ''}
          <span className="text-xl font-a1 dark:text-white">{project.title}</span>
        </div>
      </div>
      <div className={className} onMouseEnter={handleEnter} onMouseLeave={handleExit} onClick={handleClick} ref={prevRef}>
        <ResponsiveImage image={project.imagePath} addImage={addImage} />
        <animated.div style={infoStyle} className="absolute bottom-0 w-full overflow-hidden shadow-lg bg-amber-100 dark:bg-slate-800 dark:text-white">
          <div ref={ref} className="w-full px-2 pb-4">
            <div className="w-full p-3 py-6 space-y-1 text-xs sm:text-sm sm:space-y-2 font-a3 fc">
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
                  <div key={index} className="items-center justify-center w-full px-2 space-x-2 fr">
                    {mobile ? '' : iconSelector(tool, 'w-1/5 h-auto')}
                    <span className="text-xs sm:text-sm font-mono3">{capitalize(tool)}</span>
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
