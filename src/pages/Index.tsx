import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">РЕКЛАМА ПЛЮС</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Полный цикл рекламного производства
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Печать баннеров, вывески, наружная реклама, полиграфия и световые короба. 
            Профессиональные решения для вашего бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по производству рекламной продукции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Printer" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Печать баннеров</CardTitle>
                <CardDescription>
                  Широкоформатная печать на различных материалах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Баннеры, плакаты, постеры любых размеров. Высокое качество печати на прочных материалах.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Наружная реклама</CardTitle>
                <CardDescription>
                  Вывески, объемные буквы, фасадная реклама
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Проектирование и изготовление наружной рекламы. Монтаж и обслуживание.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Полиграфия</CardTitle>
                <CardDescription>
                  Визитки, листовки, каталоги, брошюры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Полный цикл полиграфических услуг от дизайна до печати готовой продукции.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lightbulb" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Световые короба</CardTitle>
                <CardDescription>
                  LED-подсветка, световые панели, неон
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Изготовление световых коробов и LED-конструкций для эффективной рекламы.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Дизайн</CardTitle>
                <CardDescription>
                  Разработка макетов, брендинг, фирменный стиль
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Создание уникальных дизайн-решений для вашего бренда и рекламных материалов.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">Сувенирная продукция</CardTitle>
                <CardDescription>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональный подход и высокое качество на каждом этапе работы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Быстрые сроки</h3>
              <p className="text-gray-600">
                Выполняем заказы в кратчайшие сроки без потери качества. Срочные заказы - наша специализация.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Высокое качество</h3>
              <p className="text-gray-600">
                Используем только проверенные материалы и современное оборудование. Гарантия на все виды работ.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="DollarSign" className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Доступные цены</h3>
              <p className="text-gray-600">
                Конкурентные цены на все виды услуг. Гибкая система скидок для постоянных клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Портфолио работ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold">РЕКЛАМА ПЛЮС</h3>
              </div>
              <p className="text-gray-400">
                Профессиональные решения в области рекламы и печати с 2010 года.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Печать баннеров</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наружная реклама</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Полиграфия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Световые короба</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@reklamaplus.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Реклама Плюс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;