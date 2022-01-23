import { makers, kcl, rga } from '../data/cvData';
import { DownloadCV } from './CVpdf';
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
    <div>
      <DownloadCV />
      <div className="w-11/12 h-auto p-4 bg-white shadow-lg fc">
        <div className="fcc">
          <h1 className="text-3xl">Arthur Fincham</h1>
          <span className="font-mono2">arthurfincham@me.com</span>
          <span className="font-mono2">London, UK</span>
        </div>
        <Header text="ABOUT ME" />
        <p className="my-2 text-sm leading-6 font-a4">
          I'm Arthur, a recent graduate from Maker's Academy. Since I finished university in May 2021, working on Ruby and Javascript, I've been
          practicing my coding skills everyday to prepare myself for a role as a Full Stack Engineer. At the moment my focus is on React; making an
          effort to challenge myself and learn more everyday. As a naturally good communicator, I'd love to join a team that collaborates to deliver
          impactful tech.
        </p>
        <Header text="EDUCATION" />
        <Item props={makers} />
        <Item props={kcl} />
        <Header text="EXPERIENCE" />
        <Item props={rga} />
      </div>
    </div>
  );
}
