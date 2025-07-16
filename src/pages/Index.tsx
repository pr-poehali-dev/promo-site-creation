import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-purple-600" size={32} />
              <h1 className="text-2xl font-bold text-gradient">РЕКЛАМА ПЛЮС</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">О компании</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Услуги</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Портфолио</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
            </nav>
            <Button className="modern-gradient text-white hover:opacity-90 rounded-full">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="modern-gradient hero-pattern text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-7xl font-bold mb-8 leading-tight">
            Полный цикл рекламного <span className="text-yellow-300">производства</span>
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-purple-100">
            Печать баннеров, вывески, наружная реклама, полиграфия и световые короба. 
            Профессиональные решения для вашего бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 font-semibold rounded-full text-lg">
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 glass-effect rounded-full px-10 py-4 text-lg">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              Наши <span className="text-gradient">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по производству рекламной продукции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Printer" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Печать баннеров</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Широкоформатная печать на различных материалах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Баннеры, плакаты, постеры любых размеров. Высокое качество печати на прочных материалах.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Building" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Наружная реклама</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Вывески, объемные буквы, фасадная реклама
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Проектирование и изготовление наружной рекламы. Монтаж и обслуживание.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="FileText" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Полиграфия</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Визитки, листовки, каталоги, брошюры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Полный цикл полиграфических услуг от дизайна до печати готовой продукции.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Lightbulb" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Световые короба</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  LED-подсветка, световые панели, неон
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Изготовление световых коробов и LED-конструкций для эффективной рекламы.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Дизайн</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Разработка макетов, брендинг, фирменный стиль
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Создание уникальных дизайн-решений для вашего бренда и рекламных материалов.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Gift" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl text-gray-800">Сувенирная продукция</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Брендированные сувениры, подарки, промо-материалы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Изготовление корпоративных подарков и сувениров с вашим логотипом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              Почему выбирают <span className="text-gradient">нас</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход и высокое качество на каждом этапе работы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Icon name="Clock" className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Быстрые сроки</h3>
              <p className="text-gray-600 text-lg">
                Выполняем заказы в кратчайшие сроки без потери качества. Срочные заказы - наша специализация.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Icon name="Award" className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Высокое качество</h3>
              <p className="text-gray-600 text-lg">
                Используем только проверенные материалы и современное оборудование. Гарантия на все виды работ.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Icon name="DollarSign" className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Доступные цены</h3>
              <p className="text-gray-600 text-lg">
                Конкурентные цены на все виды услуг. Гибкая система скидок для постоянных клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="modern-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-purple-100">
            Свяжитесь с нами сегодня для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 font-semibold rounded-full text-lg">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 glass-effect rounded-full px-10 py-4 text-lg">
              Портфолио работ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Zap" className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold">РЕКЛАМА ПЛЮС</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Профессиональные решения в области рекламы и печати с 2010 года.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Услуги</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Печать баннеров</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Наружная реклама</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Полиграфия</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Световые короба</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} />
                  <span>info@reklamaplus.ru</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Режим работы</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Реклама Плюс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;