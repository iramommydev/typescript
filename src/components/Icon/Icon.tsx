import ICONS, { TIconType } from './Icon.data';

interface IconProps {
  className?:string;
  icon?: TIconType;
}

const Icon: React.FC<IconProps> = ({ className = [], icon='kyiv' }) => {
  return (
    <svg className={`inline-block stroke-0 stroke-current fill-current ${className}`} viewBox='0 0 32 32'>
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;