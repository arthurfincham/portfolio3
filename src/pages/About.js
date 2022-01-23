import GitHub from '../svgs/GitHub';
import LinkedIn from '../svgs/LinkedIn';

export default function About() {
  const buttonClasses = 'w-[150px] h-[60px] border-black border-[.1em] shadow-lg bg-amber-200/10 hover:bg-amber-200/50 rounded-lg fcc';
  return (
    <div className="items-center w-full space-y-8 sm:space-y-0 pace-x-12 h-3/5 fcc sm:flex-row">
      <h1 className="w-1/2 text-right text-7xl">arthur fincham</h1>
      <div className="w-1/2 space-y-6 fcc">
        <GitHub className={buttonClasses} />
        <LinkedIn className={buttonClasses} />
      </div>
    </div>
  );
}
