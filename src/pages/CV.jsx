import React from 'react';
import {Helmet} from 'react-helmet'
import PDF from '../data/Arthur_Fincham_CV.pdf';
import { makers, kcl, rga } from '../data/cvData';
import PDFIcon from '../svgs/PDFIcon';

export default function CV() {
  const Item = ({ props }) => {
    return (
      <div className="w-full my-4">
        <h1 className="text-2xl">{props.title}</h1>
        <div className="flex justify-between text-lg">
          <h3 className="font-a2">{props.subTitle}</h3>
          <h3 className="font-a2">{props.dates}</h3>
        </div>
        <ul className="text-sm">
          {props.points.map((point, index) => {
            return (
              <li key={index} className="pl-2 my-2 leading-6 cvPoint font-a4">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Header = ({ text }) => {
    return <span className="mt-4 text-lg text-gray-500 font-mono2">{text}</span>;
  };

  return (
    <>
      <Helmet>
        <title>CV | Arthur Fincham Software Developer</title>
        <meta name="description" content="Please find my CV where you can see further information about my education and experience. Link to a PDF version available." />
        <meta name="keywords" content="developer, programmer, coding, full-stack, react, arthur, fincham, Arthur Fincham, London, react, React, Rails"/>
      </Helmet>
      <div className="w-full fcc">
        <div className="w-11/12 h-auto p-4 sm:p-12 mb-12 bg-white dark:bg-slate-200 shadow-xl fc max-w-[800px] relative">
          <div className="sm:relative fc sm:items-center">
            <h1 className="text-3xl">Arthur Fincham</h1>
            <span className="font-mono2">arthurfincham@me.com</span>
            <span className="font-mono2">London, UK</span>
            <a
              href={PDF}
              target="blank"
              data-testid="cvPDFLink"
              className="w-[60px] h-[60px] absolute right-3 sm:right-0 bg-gray-100 rounded-lg border-[.12em] border-black hover:bg-gray-200 fcc"
            >
              <PDFIcon className="z-10 w-full h-full " />
            </a>
          </div>
          <Header text="ABOUT ME" />
          <p className="my-2 text-sm leading-6 font-a4">
          I&apos;m Arthur, a recent graduate from Maker&apos;s Academy. Since I finished university in May 2021, working on Ruby and Javascript, I&apos;ve been
          practicing my coding skills every day to prepare myself for a role as a Full Stack Engineer. At the moment my focus is on React; making an
          effort to challenge myself and learn more. As a naturally good communicator, I&apos;d love to join a team that collaborates to deliver impactful
          tech.
          </p>
          <Header text="EDUCATION" />
          <Item props={makers} />
          <Item props={kcl} />
          <Header text="EXPERIENCE" />
          <Item props={rga} />
        </div>
      </div>
    </>
  );
}
