
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FlyingButterfly from '@/components/FlyingButterfly';
import PatternBackground from '@/components/PatternBackground';
import MainNavigation from '@/components/MainNavigation';

const Index = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pale-blue via-cloud-white to-pale-blue page-transition">
      {/* Фоновые паттерны */}
      <PatternBackground />
      
      {/* Летающие бабочки */}
      <FlyingButterfly count={5} />
      
      {/* Облака верхний слой */}
      <div className="absolute top-40 right-1/4 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="cloud-sm"></div>
      </div>
      
      {/* Шапка */}
      <header className="container py-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center mb-6 md:mb-0">
            {/* Логотип */}
            <div className="w-16 h-16 mr-4">
              <img 
                src="/placeholder.svg" // Замените на реальный путь к логотипу
                alt="Незабудка логотип" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary">Незабудка</h1>
              <p className="text-sm text-gray-600">Детский сад</p>
            </div>
          </div>
          
          {/* Новое навигационное меню */}
          <MainNavigation />
        </div>
      </header>
      
      {/* Основной блок */}
      <main className="container mt-10 md:mt-20 relative z-10">
        {/* Герой-секция */}
        <section className="relative mb-32">
          <div className="absolute top-10 left-0 w-32 h-32 bg-primary rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-10 right-0 w-40 h-40 bg-secondary rounded-full opacity-10 blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Где дети <span className="text-secondary">растут</span> и <span className="text-accent">расцветают</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Мы создаем волшебное пространство, где каждый ребенок раскрывает свой потенциал в атмосфере заботы и творчества.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300">
                  Записаться на экскурсию
                  <Icon name="ChevronRight" className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-2 hover:border-accent hover:text-accent transition-all duration-300" asChild>
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-soft relative">
                <img 
                  src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Счастливые дети в детском саду"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Карточки преимуществ */}
        <section className="my-24">
          <h3 className="text-3xl font-bold text-center mb-16 text-primary">Наши особенности</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Heart",
                title: "Забота и внимание",
                desc: "Индивидуальный подход к каждому ребенку и его особенностям"
              },
              {
                icon: "PlayCircle",
                title: "Развивающие игры",
                desc: "Современные методики обучения через увлекательные игры"
              },
              {
                icon: "Flower2",
                title: "Экологическое воспитание",
                desc: "Уроки заботы о природе и окружающем мире"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow group transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-forget-me-not/10 rounded-full transition-all duration-500 group-hover:bg-forget-me-not/20"></div>
                
                <div className="mb-6 text-primary">
                  <div className="w-16 h-16 rounded-2xl bg-pale-blue flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                    <Icon name={item.icon} className="w-8 h-8" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-primary">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="ghost" className="rounded-full hover:bg-primary/10 group-hover:text-primary" asChild>
                    <Link to="/about">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Подвал */}
      <footer className="mt-32 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-primary opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="py-12 border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-12 h-12 mr-3">
                  <img 
                    src="/placeholder.svg" // Замените на реальный путь к логотипу
                    alt="Незабудка логотип" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">Детский сад «Незабудка»</h2>
                  <p className="text-sm text-gray-600 mt-1">Где каждый ребенок особенный</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-sm">
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">О нас</Link>
                <Link to="/contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</Link>
                <Link to="/programs" className="text-gray-600 hover:text-primary transition-colors">Программы</Link>
                <Link to="/gallery" className="text-gray-600 hover:text-primary transition-colors">Фотогалерея</Link>
                <Link to="/schedule" className="text-gray-600 hover:text-primary transition-colors">Расписание</Link>
                <Link to="/reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</Link>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-gray-500">
              © 2025 Детский сад «Незабудка». Все права защищены.
            </div>
          </div>
        </div>
        
        {/* Облака нижний слой */}
        <div className="absolute bottom-20 right-10 opacity-40 animate-float" style={{ animationDelay: '2s' }}>
          <div className="cloud-sm"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
