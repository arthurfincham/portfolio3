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

export const iconSelector = (iconName) => {
  switch (iconName) {
    case 'Rails':
      return <RailsLogo />;
    case 'React':
      return <ReactLogo />;

    case 'PSQL':
      return <PostgresqlLogo />;

    case 'Heroku':
      return <HerokuLogo />;

    case 'Jest':
      return <JestLogo />;

    case 'AWS':
      return <AwsLogo />;

    case 'Bootstrap':
      return <BootstrapLogo />;

    case 'MaterialUi':
      return <MaterialUiLogo />;

    case 'Sinatra':
      return <SinatraLogo />;

    case 'Tailwind CSS':
      return <TailwindLogo />;
    default:
      return <Triangle />;
  }
};
