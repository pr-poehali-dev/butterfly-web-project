
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ButterflyButtonProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
  onClick?: () => void;
}

const ButterflyButton = ({
  children,
  variant = 'default',
  size = 'default',
  href,
  onClick,
}: ButterflyButtonProps) => {
  return (
    <div className="group relative">
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        asChild={!!href}
        className="relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:shadow-md hover:shadow-primary/20"
      >
        {href ? <a href={href}>{children}</a> : children}
      </Button>
      <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="animate-butterfly-flying text-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 11.5913 17.3679 13.1174 16.2426 14.2426C15.1174 15.3679 13.5913 16 12 16C10.4087 16 8.88258 15.3679 7.75736 14.2426C6.63214 13.1174 6 11.5913 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4ZM12 4V2M4 12L2 14M20 12L22 14M6 20C7.5 18 9.5 17 12 17C14.5 17 16.5 18 18 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ButterflyButton;
