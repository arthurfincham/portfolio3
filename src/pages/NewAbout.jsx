import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { Textfit } from 'react-textfit';
import CVButton from '../buttons/CVButton';
import GitHubButton from '../buttons/GitHubButton';
import LinkedInButton from '../buttons/LinkedInButton';
import ButtonWrapper from '../components/ButtonWrapper';

export default function NewAbout() {
  //
  const buttonClass =
    ' h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] lg:h-[90px] lg:w-[90px] xl:h-[100px] xl:w-[100px] dark:fill-gray-50';
  const textStyles = {
    width: '100%',
    marginTop: '5px',
  };
  const titleStyle = {
    width: '100%',
    lineHeight: '.7em',
  };
  const projectsStyle = {
    width: '100%',
    lineHeight: '.7em',
  };
  return (
    <>
      <Helmet>
        <title>arthur fincham | frontend developer</title>
        <meta
          name="description"
          content="front end developer at zzish, experience in react and phaser.js"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center h-[90%]">
        <div className="flex flex-col items-center 	 justify-center w-[90%] max-w-[1000px] leading-none mb-12 text-black dark:text-gray-50">
          <Textfit
            className="font-a1"
            style={titleStyle}
            mode="single"
            forceSingleModeWidth={true}
            max={200}
          >
            arthur fincham
          </Textfit>
          <Textfit
            className="font-a2 text-black dark:text-gray-50"
            style={textStyles}
            mode="single"
            forceSingleModeWidth={true}
            max={200}
          >
            frontend developer at{' '}
            <a
              href="https://www.zzish.com/"
              target="blank"
              className="text-fuchsia-600 "
              id="zzishLink"
            >
              zzish
            </a>
          </Textfit>
          <Textfit
            className="font-a2 "
            style={textStyles}
            mode="single"
            forceSingleModeWidth={true}
            max={200}
          >
            currently working with <span className="text-sky-400">react</span>{' '}
            and
            <span className="text-yellow-400"> phaser</span>
          </Textfit>
          <Textfit
            className="font-a2"
            style={textStyles}
            mode="single"
            forceSingleModeWidth={true}
            max={200}
          >
            to help accelerate learning in the classroom
          </Textfit>
        </div>
        <div className="flex w-[90%] sm:w-[75%] md:w-[62%] lg:w-[50%] justify-evenly">
          <ButtonWrapper label="github">
            <GitHubButton buttonClass={buttonClass} />
          </ButtonWrapper>
          <ButtonWrapper label="linkedin">
            <LinkedInButton buttonClass={buttonClass} />
          </ButtonWrapper>
          <ButtonWrapper label="cv">
            <CVButton buttonClass={buttonClass} />
          </ButtonWrapper>
        </div>
        <div className="flex flex-col items-center	mt-12 justify-center w-[70%] max-w-[400px] leading-none text-gray-800 dark:text-gray-100">
          <Textfit
            className="font-a3"
            style={projectsStyle}
            mode="single"
            forceSingleModeWidth={true}
            max={200}
          >
            find some of my older projects{' '}
            <NavLink
              className="font-a2 text-orange-400"
              id="oldProjectsLink"
              to="/projects"
            >
              here
            </NavLink>
          </Textfit>
        </div>
      </div>
    </>
  );
}
