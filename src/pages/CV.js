import { makers, kcl, rga } from '../data/cvData';

export default function CV() {
  const CVItem = ({ props }) => {
    return (
      <div className="w-full">
        <h2 className="text-xl">{props.title}</h2>
        <div className="flex justify-between text-md">
          <h3>{props.subTitle}</h3>
          <p>{props.dates}</p>
        </div>
        <ul className="text-xs">
          {props.points.map((point) => {
            return <li className="pl-2 my-2 ml-[-.6em] border-l-2 border-black">{point}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="mt-[150px] sm:mt-0 w-11/12 h-auto px-4 bg-white shadow-lg fc">
      <CVItem props={makers} />
      <CVItem props={kcl} />
      <CVItem props={rga} />
    </div>
  );
}
