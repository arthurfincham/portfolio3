import AwsLogo from './AwsLogo';
import BootstrapLogo from './BootstrapLogo';
import HerokuLogo from './HerokuLogo';
import JestLogo from './JestLogo';
import MaterialUiLogo from './MaterialUiLogo';
import PostgresqlLogo from './PostgresqlLogo';
import RailsLogo from './RailsLogo';
import ReactLogo from './ReactLogo';
import SinatraLogo from './SinatraLogo';
import TailwindLogo from './TailwindLogo';
import Triangle from './Triangle';

export const iconSelector = (iconName, className) => {
  switch (iconName) {
    case 'Rails':
      return <RailsLogo className={className} />;
    case 'React':
      return <ReactLogo className={className} />;

    case 'PSQL':
      return <PostgresqlLogo className={className} />;

    case 'Heroku':
      return <HerokuLogo className={className} />;

    case 'Jest':
      return <JestLogo className={className} />;

    case 'AWS':
      return <AwsLogo className={className} />;

    case 'Bootstrap':
      return <BootstrapLogo className={className} />;

    case 'MaterialUi':
      return <MaterialUiLogo className={className} />;

    case 'Sinatra':
      return <SinatraLogo className={className} />;

    case 'Tailwind':
      return <TailwindLogo className={className} />;
    default:
      return <Triangle className={className} />;
  }
};
