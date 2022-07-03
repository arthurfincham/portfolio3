import React from 'react';
import { Helmet } from 'react-helmet';
import { Textfit } from 'react-textfit';
import CVButton from './buttons/CVButton';
import GitHubButton from './buttons/GitHubButton';
import LinkedInButton from './buttons/LinkedInButton';
import ButtonWrapper from './components/ButtonWrapper';

export default function Page() {
  const buttonClass = 'w-[100px] h-[100px] dark:fill-gray-50';
  const textStyles = {
    width: '100%',
    marginTop: '5px',
  };
  const titleStyle = {
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
        <div className="flex w-[50%] justify-evenly">
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
      </div>
    </>
  );
}
