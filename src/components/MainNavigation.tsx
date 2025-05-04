
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Современное навигационное меню
const MainNavigation = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="main-navigation">
      <ul className="flex items-center gap-1 md:gap-2">
        {[
          { id: 'home', label: 'Главная', path: '/' },
          { id: 'about', label: 'О нас', path: '/about' },
          { id: 'programs', label: 'Программы', path: '/programs' },
          { id: 'gallery', label: 'Галерея', path: '/gallery' },
          { id: 'contacts', label: 'Контакты', path: '/contacts' }
        ].map((item) => (
          <li key={item.id}>
            <Link 
              to={item.path}
              className={`nav-item relative block px-4 py-2 text-sm md:text-base transition-all duration-300
                ${activeItem === item.id
                  ? 'text-primary font-semibold nav-item-active'
                  : 'text-gray-600 hover:text-primary'
                }`}
              onClick={() => setActiveItem(item.id)}
            >
              {item.label}
              {activeItem === item.id && (
                <span className="nav-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
