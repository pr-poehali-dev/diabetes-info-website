import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Жизнь с диабетом</h1>
          <p className="text-xl mb-8 opacity-90">
            Полная информация о сахарном диабете, его лечении и здоровом образе
            жизни
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Icon name="Heart" className="mr-2" />
            Начать изучение
          </Button>
        </div>
      </section>

      {/* What is Diabetes */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Что такое сахарный диабет?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Сахарный диабет — это группа метаболических заболеваний,
            характеризующихся повышенным уровнем глюкозы в крови
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Основные факты
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" />
                    Затрагивает более 400 млн человек в мире
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" />
                    Может развиться в любом возрасте
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" />
                    Поддается контролю при правильном лечении
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" />
                    Требует постоянного наблюдения
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-6 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Медицинские принадлежности"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Types of Diabetes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Типы диабета
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-red-500">Тип 1</Badge>
                <CardTitle className="text-red-600">Диабет 1 типа</CardTitle>
                <CardDescription>Аутоиммунное заболевание</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Инсулиновая ручка"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Обычно развивается в детстве</li>
                  <li>• Требует инсулинотерапии</li>
                  <li>• 5-10% всех случаев диабета</li>
                  <li>• Невозможно предотвратить</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-orange-500">Тип 2</Badge>
                <CardTitle className="text-orange-600">Диабет 2 типа</CardTitle>
                <CardDescription>Инсулинорезистентность</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Здоровое питание"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Чаще всего у взрослых</li>
                  <li>• Связан с образом жизни</li>
                  <li>• 90-95% всех случаев</li>
                  <li>• Можно предотвратить</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-500">Гестационный</Badge>
                <CardTitle className="text-purple-600">
                  Гестационный диабет
                </CardTitle>
                <CardDescription>Во время беременности</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1544965503-7ad532ca46fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Беременность"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Развивается при беременности</li>
                  <li>• Обычно проходит после родов</li>
                  <li>• Повышает риск диабета 2 типа</li>
                  <li>• Требует наблюдения</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Glucose Monitoring */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Контроль уровня глюкозы
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <Icon name="Activity" className="mr-2" />
                Глюкометры
              </CardTitle>
              <CardDescription>Устройства для измерения сахара</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Глюкометр"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Измеряйте сахар натощак (норма 4-6 ммоль/л)</li>
                <li>• После еды через 2 часа (до 10 ммоль/л)</li>
                <li>• Ведите дневник измерений</li>
                <li>• Меняйте тест-полоски вовремя</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <Icon name="Target" className="mr-2" />
                Целевые показатели
              </CardTitle>
              <CardDescription>К чему стремиться</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Анализы крови"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded">
                  <strong className="text-green-700">HbA1c:</strong> менее 7%
                  (53 ммоль/моль)
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <strong className="text-blue-700">Натощак:</strong> 4-7
                  ммоль/л
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <strong className="text-orange-700">После еды:</strong> менее
                  10 ммоль/л
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nutrition for Diabetics */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Питание при диабете
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <Icon name="CheckCircle" className="mr-2" />
                  Рекомендуется
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Здоровые продукты"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Овощи (кроме картофеля)</li>
                  <li>• Нежирное мясо и рыба</li>
                  <li>• Цельнозерновые крупы</li>
                  <li>• Бобовые</li>
                  <li>• Орехи в умеренных количествах</li>
                  <li>• Молочные продукты низкой жирности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-yellow-100 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-700 flex items-center">
                  <Icon name="AlertTriangle" className="mr-2" />
                  Ограничить
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1587736777555-cc71d5a4cd7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Продукты с ограничением"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• Фрукты (не более 2-3 в день)</li>
                  <li>• Картофель, рис, макароны</li>
                  <li>• Хлеб (лучше цельнозерновой)</li>
                  <li>• Мёд (1-2 ч.л. в день)</li>
                  <li>• Сухофрукты</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-100 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <Icon name="X" className="mr-2" />
                  Исключить
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Вредные продукты"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• Сахар, конфеты</li>
                  <li>• Сладкие напитки</li>
                  <li>• Пирожные, торты</li>
                  <li>• Жареная пища</li>
                  <li>• Алкоголь</li>
                  <li>• Полуфабрикаты</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center text-purple-600">
                Гликемический индекс продуктов
              </CardTitle>
              <CardDescription className="text-center">
                Влияние продуктов на уровень сахара в крови
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">
                    Низкий ГИ (до 55)
                  </h4>
                  <p className="text-sm text-green-600">
                    Овощи, бобовые, молочные продукты, орехи
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2">
                    Средний ГИ (55-70)
                  </h4>
                  <p className="text-sm text-yellow-600">
                    Фрукты, овсянка, коричневый рис
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">
                    Высокий ГИ (свыше 70)
                  </h4>
                  <p className="text-sm text-red-600">
                    Сахар, белый хлеб, картофель
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Physical Activity & Lifestyle */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Образ жизни и активность
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <Icon name="Dumbbell" className="mr-2" />
                Физическая активность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Физические упражнения"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-700">
                <li>• 150 минут умеренной активности в неделю</li>
                <li>• Ходьба по 30 минут в день</li>
                <li>• Плавание, йога, велоспорт</li>
                <li>• Проверяйте сахар до и после тренировок</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-purple-600">
                <Icon name="Moon" className="mr-2" />
                Сон и стресс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="https://images.unsplash.com/photo-1511295742362-92c96b1cf09b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Здоровый сон"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <ul className="space-y-2 text-gray-700">
                <li>• Спите 7-9 часов в сутки</li>
                <li>• Управляйте стрессом</li>
                <li>• Практикуйте медитацию</li>
                <li>• Регулярный режим дня</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-700 mb-8">
            ⚠️ Опасные симптомы
          </h2>
          <Card className="border-red-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">
                    Гипогликемия (низкий сахар)
                  </h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• Дрожь, потливость</li>
                    <li>• Головокружение</li>
                    <li>• Чувство голода</li>
                    <li>• Раздражительность</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <strong className="text-green-700">Действие:</strong> съесть
                    что-то сладкое
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-600 mb-4">
                    Гипергликемия (высокий сахар)
                  </h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• Сильная жажда</li>
                    <li>• Частое мочеиспускание</li>
                    <li>• Тошнота, рвота</li>
                    <li>• Запах ацетона изо рта</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded">
                    <strong className="text-red-700">Действие:</strong> срочно к
                    врачу!
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Помните</h3>
          <p className="text-lg mb-6 opacity-90">
            Диабет — это не приговор. При правильном лечении и образе жизни
            можно жить полноценной жизнью
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-800"
          >
            <Icon name="Phone" className="mr-2" />
            Обратиться к врачу
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
