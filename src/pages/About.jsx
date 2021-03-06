import React from 'react';
import { Helmet } from 'react-helmet';
import GitHub from '../svgs/GitHub';
import LinkedIn from '../svgs/LinkedIn';

export default function About() {
  const buttonClasses =
    'w-[150px] h-[60px] shadow-lg bg-white hover:bg-amber-50 rounded-lg fcc ';
  return (
    <>
      <Helmet>
        <title>About | Arthur Fincham Software Developer</title>
        <meta
          name="description"
          content="I am a full-stack developer with an eye for design. Makers Academy grad with experience building projects in Ruby on Rails and React."
        />
      </Helmet>
      <div className="w-full h-4/5 sm:h-3/5 dark:text-white ">
        <div className="px-8 space-y-12 sm:space-y-0 fcc sm:flex-row xl:mr-24 min-h-[80vh]">
          <div className="w-full sm:w-2/3">
            <div className="max-w-[90ch] fc text-left sm:text-right  sm:items-end">
              <h1 className="text-6xl sm:text-8xl md:text-9xl">
                arthur fincham
              </h1>
              <p className="max-w-[34ch] text-2xl md:text-3xl font-a3">
                i am a{' '}
                <span className="text-indigo-600 dark:text-[#4F47E5] ">
                  full-stack developer
                </span>{' '}
                with an eye for design. Makers Academy grad. currently enjoying{' '}
                <span className="text-indigo-600 dark:text-[#4F47E5]">
                  Ruby on Rails
                </span>{' '}
                and{' '}
                <span className="text-indigo-600 dark:text-[#4F47E5] ">
                  React
                </span>
                .
              </p>
            </div>
          </div>
          <div className="w-full space-x-3 sm:space-x-0 sm:space-y-8 sm:w-1/2 frc sm:flex-col">
            <GitHub className={buttonClasses} />
            <LinkedIn className={buttonClasses} />
          </div>
        </div>
      </div>
    </>
  );
}
