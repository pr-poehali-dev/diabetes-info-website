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

      {/* Symptoms */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Основные симптомы
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "Droplets",
              title: "Жажда",
              desc: "Постоянная сухость во рту",
              color: "blue",
            },
            {
              icon: "Zap",
              title: "Усталость",
              desc: "Постоянная слабость",
              color: "yellow",
            },
            {
              icon: "Eye",
              title: "Зрение",
              desc: "Нечеткость зрения",
              color: "green",
            },
            {
              icon: "TrendingDown",
              title: "Вес",
              desc: "Необъяснимая потеря веса",
              color: "red",
            },
          ].map((symptom, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${symptom.color}-100 flex items-center justify-center`}
                >
                  <Icon
                    name={symptom.icon as any}
                    className={`text-${symptom.color}-600`}
                    size={32}
                  />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  {symptom.title}
                </h3>
                <p className="text-sm text-gray-600">{symptom.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Treatment & Lifestyle */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Лечение и образ жизни
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Icon name="Pill" className="mr-2" />
                  Медикаментозное лечение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Лекарства"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-gray-700">
                  <li>• Инсулинотерапия при необходимости</li>
                  <li>• Пероральные сахароснижающие препараты</li>
                  <li>• Регулярный контроль уровня сахара</li>
                  <li>• Консультации с эндокринологом</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Icon name="Apple" className="mr-2" />
                  Питание и активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Здоровая еда"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <ul className="space-y-2 text-gray-700">
                  <li>• Сбалансированное питание</li>
                  <li>• Контроль углеводов</li>
                  <li>• Регулярная физическая активность</li>
                  <li>• Поддержание здорового веса</li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
