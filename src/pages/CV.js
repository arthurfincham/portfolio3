import { makers, kcl, rga } from '../data/cvData';
import PDF from '../data/ArthurFincham_CV_2022.pdf';
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

  const testvar = process.env.REACT_APP_TEST_VAR;

  const Header = ({ text }) => {
    return <span className="mt-4 text-lg text-gray-500 font-mono2">{text}</span>;
  };

  return (
    <div className="w-full fcc">
      <div className="w-11/12 h-auto p-12 mb-12 bg-white shadow-xl fc max-w-[800px]">
        <div className="relative fc sm:items-center">
          <h1 className="text-3xl">Arthur Fincham</h1>
          <span className="font-mono2">arthurfincham@me.com</span>
          <span className="font-mono2">London, UK</span>
          <a
            href={PDF}
            target="blank"
            className="w-[60px] h-[60px] absolute right-0 bg-gray-100 rounded-lg border-[.12em] border-black hover:bg-gray-200 fcc"
          >
            <PDFIcon className="z-10 w-full h-full " />
          </a>
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
        <p className="text-black bg-red-100">{testvar}</p>
        <Item props={rga} />
      </div>
    </div>
  );
}
