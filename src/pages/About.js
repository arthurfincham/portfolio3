import GitHub from '../svgs/GitHub';
import LinkedIn from '../svgs/LinkedIn';

export default function About() {
  const buttonClasses = 'w-[150px] h-[60px] border-black border-[.1em] shadow-lg bg-amber-200/10 hover:bg-amber-200/50 rounded-lg fcc';
  return (
    <div className="items-center justify-center w-full mx-auto md:mx-0  md:space-x-12 space-y-8  md:space-y-0 h-3/5 fcc md:flex-row max-w-[1000px] mr-24">
      <div className="w-auto md:items-end frc md:flex-column">
        <div className="max-w-[45ch]">
          <h1 className="text-6xl md:text-right md:text-7xl">arthur fincham</h1>
          <p className="text-lg md:text-right font-a3">
            i am a full-stack developer with an eye for design. Makers Academy grad. currently enjoying Ruby on Rails and React.
          </p>
        </div>
      </div>
      <div className="items-start w-auto space-x-6 md:space-x-0 md:space-y-6 frc sm:flex-col">
        <GitHub className={buttonClasses} />
        <LinkedIn className={buttonClasses} />
      </div>
    </div>
  );
}
