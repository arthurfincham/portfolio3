import GitHub from '../svgs/GitHub';
import LinkedIn from '../svgs/LinkedIn';

export default function About() {
  const buttonClasses = 'w-[150px] h-[60px] border-black border-[.1em] shadow-lg bg-amber-200/10 hover:bg-amber-200/50 rounded-lg fcc';
  return (
    <div className="items-center justify-center w-full space-x-12 space-y-8 sm:space-y-0 h-3/5 fcc sm:flex-row">
      <div className="items-end w-1/2 fcc">
        <div className="max-w-[45ch]">
          <h1 className="text-right text-7xl">arthur fincham</h1>
          <p className="text-right">
            i am a full-stack developer with an eye for design. Makers Academy grad. currently enjoying Ruby on Rails and React.
          </p>
        </div>
      </div>
      <div className="items-start w-1/2 space-y-6 fcc">
        <GitHub className={buttonClasses} />
        <LinkedIn className={buttonClasses} />
      </div>
    </div>
  );
}
