import { uni, makers, theory, backend, frontend } from '../data/educationData';
import { Backend, Bootcamp, Frontend, Theory, UniHat } from '../svgs/education/eduSVGExporter';

export default function Education() {
  const boot = [makers, theory, backend, frontend];

  const iconPicker = (iconName, className) => {
    switch (iconName) {
      case 'makers-icon':
        return <Bootcamp className={className} />;
      case 'theory-icon':
        return <Theory className={className} />;
      case 'backend-icon':
        return <Backend className={className} />;
      case 'react-icon':
        return <Frontend className={className} />;
    }
  };

  const flexDirection = (index) => {
    return index % 2 === 0 ? 'fr' : 'frr';
  };

  const MonoText = ({ children }) => {
    return <h3 className="tracking-wider text-white code-font text-md">{children}</h3>;
  };

  const MonoWrapper = ({ children }) => {
    return <div className="flex items-center justify-between w-full">{children}</div>;
  };

  const CardWrapper = ({ children }) => {
    return <div className="fc space-y-2 bg-orange-200 w-full max-w-[600px] px-4 py-3 rounded-lg my-2 mb-5">{children}</div>;
  };

  return (
    <div className="w-full fcc h-full mt-[120px] px-4">
      <div className="w-auto">
        <MonoWrapper>
          <MonoText>KCL</MonoText>
          <MonoText>2018-2021</MonoText>
        </MonoWrapper>
        <CardWrapper>
          <div className="items-center justify-between frr">
            <span>{uni.title}</span>
            <UniHat className="w-1/4" />
          </div>
          <span className="text-sm">{uni.description}</span>
        </CardWrapper>
        <MonoWrapper>
          <MonoText>MAKERS ACADEMY</MonoText>
          <MonoText>2021</MonoText>
        </MonoWrapper>
        {boot.map((item, index) => (
          <CardWrapper key={index}>
            <div className={`${flexDirection(index)} items-center justify-between`}>
              <span>{item.title}</span>
              {iconPicker(item.iconAlt, 'w-1/4 stroke-black')}
            </div>
            <span className="text-sm">{item.description}</span>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
}
