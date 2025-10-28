import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  composition: string;
  weight: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Баранки классические',
    category: 'Сушки и баранки',
    description: 'Традиционные русские баранки с хрустящей корочкой и нежным вкусом',
    composition: 'Мука пшеничная, вода, сахар, масло растительное, соль, дрожжи',
    weight: '300 г',
    image: 'https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg'
  },
  {
    id: 2,
    name: 'Печенье Топлёное молоко',
    category: 'Печенье',
    description: 'Рассыпчатое печенье с насыщенным вкусом топлёного молока',
    composition: 'Мука пшеничная, сахар, масло сливочное, молоко топлёное, яйца, разрыхлитель',
    weight: '400 г',
    image: 'https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg'
  },
  {
    id: 3,
    name: 'Сушки ванильные',
    category: 'Сушки и баранки',
    description: 'Ароматные сушки с тонким ванильным вкусом',
    composition: 'Мука пшеничная, сахар, масло растительное, ванилин, соль, дрожжи',
    weight: '200 г',
    image: 'https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg'
  },
  {
    id: 4,
    name: 'Пряники медовые',
    category: 'Пряники',
    description: 'Мягкие пряники с натуральным мёдом и пряностями',
    composition: 'Мука ржаная, мёд, сахар, яйца, корица, имбирь, гвоздика, сода',
    weight: '350 г',
    image: 'https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg'
  },
  {
    id: 5,
    name: 'Печенье с изюмом',
    category: 'Печенье',
    description: 'Домашнее печенье с натуральным изюмом',
    composition: 'Мука пшеничная, изюм, сахар, масло сливочное, яйца, разрыхлитель',
    weight: '450 г',
    image: 'https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg'
  },
  {
    id: 6,
    name: 'Сушки с маком',
    category: 'Сушки и баранки',
    description: 'Традиционные сушки с семенами мака',
    composition: 'Мука пшеничная, мак, сахар, масло растительное, соль, дрожжи',
    weight: '250 г',
    image: 'https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg'
  }
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-wide">ГК "Бостон"</h1>
            <div className="flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
                { id: 'production', label: 'Производство', icon: 'Factory' },
                { id: 'about', label: 'О компании', icon: 'Info' },
                { id: 'contacts', label: 'Контакты', icon: 'Phone' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-white/20 ${
                    activeSection === item.id ? 'bg-white/30' : ''
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/files/a3377820-96a3-4e48-8a60-a896368270e9.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in text-amber-400">
            ГК "Бостон"
          </h2>
          <p className="text-2xl md:text-3xl mb-8 animate-fade-in italic" style={{ animationDelay: '0.2s' }}>
            Традиции Русского Чаепития
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Производим качественную хлебобулочную продукцию по традиционным рецептам с 1995 года
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('catalog')}
            className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold px-8 py-6 text-lg animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Icon name="ShoppingBag" className="mr-2" size={20} />
            Перейти в каталог
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-blue-900">Каталог продукции</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Вся продукция изготовлена из натуральных ингредиентов</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-amber-500 text-blue-900 font-semibold">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Icon name="Weight" size={18} />
                    {product.weight}
                  </span>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-blue-900">Наше производство</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: 'Сертификация', desc: 'Вся продукция сертифицирована и соответствует ГОСТ' },
              { icon: 'Factory', title: 'Современное оборудование', desc: 'Новейшие технологии производства при сохранении традиций' },
              { icon: 'Shield', title: 'Контроль качества', desc: 'Многоступенчатый контроль на всех этапах производства' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8 text-blue-900">О компании</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Группа компаний "Бостон" — это традиции русского чаепития, воплощённые в качественной хлебобулочной продукции. 
                С 1995 года мы производим баранки, сушки, печенье и пряники по старинным рецептам.
              </p>
              <p className="text-lg leading-relaxed">
                Наша миссия — сохранить и передать новым поколениям вкус настоящей домашней выпечки. 
                Мы используем только натуральные ингредиенты и не применяем искусственных добавок.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3 text-blue-900 flex items-center gap-2">
                    <Icon name="Calendar" size={24} />
                    История
                  </h3>
                  <p>Более 30 лет на рынке хлебобулочных изделий</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3 text-blue-900 flex items-center gap-2">
                    <Icon name="Users" size={24} />
                    Команда
                  </h3>
                  <p>Более 200 квалифицированных сотрудников</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'MapPin', title: 'Адрес', info: 'г. Москва, ул. Производственная, д. 15' },
              { icon: 'Phone', title: 'Телефон', info: '+7 (495) 123-45-67' },
              { icon: 'Mail', title: 'Email', info: 'info@boston-gk.ru' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={28} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">© 2024 ГК "Бостон". Все права защищены.</p>
        </div>
      </footer>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-blue-900">{selectedProduct.name}</DialogTitle>
                <DialogDescription>
                  <Badge className="bg-amber-500 text-blue-900 font-semibold mt-2">
                    {selectedProduct.category}
                  </Badge>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Описание</h3>
                  <p className="text-gray-700">{selectedProduct.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900 flex items-center gap-2">
                    <Icon name="ListChecks" size={20} />
                    Состав
                  </h3>
                  <p className="text-gray-700">{selectedProduct.composition}</p>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Icon name="Weight" size={20} className="text-blue-600" />
                  <span className="font-semibold text-blue-900">Вес:</span>
                  <span className="text-gray-700">{selectedProduct.weight}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;