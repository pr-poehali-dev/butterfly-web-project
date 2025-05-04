
import { LucideProps, icons } from 'lucide-react';
import { ComponentProps, FC } from 'react';

export interface IconProps extends LucideProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
}

const Icon: FC<ComponentProps<'svg'> & IconProps> = ({
  name,
  fallback = 'CircleAlert',
  ...props
}) => {
  const LucideIcon = icons[name] || icons[fallback];
  return <LucideIcon {...props} />;
};

export default Icon;
