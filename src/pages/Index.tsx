
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ButterlyCursor from '@/components/ButterlyCursor';
import ButterflyButton from '@/components/ButterflyButton';
import ButterflyFlower from '@/components/ButterflyFlower';

const Index = () => {
  // Добавляем плавное появление страницы
  useEffect(() => {
    const pageElement = document.getElementById('main-page');
    if (pageElement) {
      pageElement.classList.add('page-transition-enter', 'page-transition-enter-active');
    }
  }, []);

  return (
    <div id="main-page" className="min-h-screen bg-gradient-to-b from-pale-blue to-pale-green">
      <ButterlyCursor />
      
      <header className="container py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ButterflyFlower className="w-12 h-12" />
            <h1 className="text-2xl font-bold text-primary">Детский сад "Незабудка"</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/" className="text-accent font-medium">Главная</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/about" className="text-accent font-medium">О нас</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contacts" className="text-accent font-medium">Контакты</Link>
            </Button>
          </div>
        </nav>
      </header>
      
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-accent">
              Добро пожаловать в мир детства и открытий
            </h2>
            
            <p className="text-lg text-gray-700">
              Детский сад "Незабудка" — место, где каждый ребенок расцветает, 
              как прекрасный цветок, в атмосфере заботы, любви и творчества.
            </p>
            
            <div className="flex gap-4 mt-8">
              <ButterflyButton href="/about">Узнать больше</ButterflyButton>
              <ButterflyButton variant="outline" href="/contacts">Связаться с нами</ButterflyButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576404991827-b4e667a7e11e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Дети в детском саду" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            
            <div className="absolute -bottom-10 -left-10">
              <ButterflyFlower className="w-24 h-24" />
            </div>
            
            <div className="absolute -top-6 -right-6">
              <ButterflyFlower className="w-20 h-20" />
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Развивающие занятия",
              desc: "Уникальные программы для всестороннего развития вашего ребенка"
            },
            {
              title: "Творческие мастерские",
              desc: "Рисование, лепка, музыка и другие творческие активности каждый день"
            },
            {
              title: "Безопасная среда",
              desc: "Комфортные и безопасные условия для игр и обучения"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-forget-me-not/10 rounded-bl-[100px] transition-all duration-300 group-hover:bg-forget-me-not/20"></div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ButterflyButton variant="ghost" size="sm" href="/about">
                  Подробнее
                </ButterflyButton>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="bg-primary/90 text-white py-12 mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <ButterflyFlower className="w-12 h-12" />
              <h2 className="text-xl font-bold">Детский сад "Незабудка"</h2>
            </div>
            
            <div className="flex gap-6">
              <a href="/about" className="hover:underline">О нас</a>
              <a href="/contacts" className="hover:underline">Контакты</a>
              <a href="#" className="hover:underline">Поступление</a>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2025 Детский сад "Незабудка". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
