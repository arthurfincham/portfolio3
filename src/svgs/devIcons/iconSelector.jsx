import AwsLogo from './AwsLogo';
import BootstrapLogo from './BootstrapLogo';
import HerokuLogo from './HerokuLogo';
import JestLogo from './JestLogo';
import MaterialUiLogo from './MaterialUiLogo';
import PostgresqlLogo from './PostgresqlLogo';
import RailsLogo from './RailsLogo';
import ReactLogo from './ReactLogo';
import CSS3Logo from './CSS3Logo';
import SinatraLogo from './SinatraLogo';
import AnimateCSSLogo from './AnimateCSSLogo';
import ExpressLogo from './ExpressLogo';
import TailwindLogo from './TailwindLogo';
import Triangle from './Triangle';

export const iconSelector = (iconName, className) => {
  switch (iconName) {
    case 'Rails':
      return <RailsLogo className={`${className} dark:fill-white`} />;
    case 'React':
      return <ReactLogo className={`${className} dark:fill-white`} />;

    case 'PSQL':
      return <PostgresqlLogo className={`${className} dark:fill-white`} />;

    case 'Heroku':
      return <HerokuLogo className={`${className} dark:fill-white`} />;

    case 'Jest':
      return <JestLogo className={`${className} dark:fill-white`} />;

    case 'AWS':
      return <AwsLogo className={`${className} dark:fill-white`} />;

    case 'Express':
      return <ExpressLogo className={`${className} dark:fill-white`} />;

    case 'Bootstrap':
      return <BootstrapLogo className={`${className} dark:fill-white`} />;

    case 'Material UI':
      return <MaterialUiLogo className={`${className} dark:fill-white`} />;

    case 'Sinatra':
      return <SinatraLogo className={`${className} stroke-black fill-transparent dark:fill-white`} />;

    case 'Animate.CSS':
      return <AnimateCSSLogo className={`${className}`} />;

    case 'CSS3':
      return <CSS3Logo className={`${className} fill-black dark:fill-white`} />;

    case 'Tailwind':
      return <TailwindLogo className={`${className} dark:fill-white`} />;
    default:
      return <Triangle className={`${className} dark:fill-white`} />;
  }
};
