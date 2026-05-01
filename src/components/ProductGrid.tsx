import ProductCard from './ProductCard';
import product1 from '@/assets/blur/1.png';
import product2 from '@/assets/blur/2.png';
import product3 from '@/assets/blur/3.png';
import product4 from '@/assets/blur/4.png';
import product5 from '@/assets/blur/5.png';
import product6 from '@/assets/blur/6.png';
import product7 from '@/assets/blur/7.png';

const products = [
  {
    id: '6',
    name: 'Кожаный корсет',
    price: '15000',
    image: product6,
    isNew: false,
  },
  {
    id: '7',
    name: 'Лонгслив с шелком',
    price: '7000',
    image: product7,
    isNew: false,
  },
  {
    id: '1',
    name: 'Шорты со шнуровкой',
    price: '8000',
    image: product1,
    isNew: false,
  },
  {
    id: '3',
    name: 'Юбка-шорты со шнуровкой',
    price: '12000',
    image: product3,
    isNew: false,
  },
  {
    id: '4',
    name: 'Шелковая блуза с воланами',
    price: '10000',
    image: product4,
    isNew: false,
  },
  {
    id: '5',
    name: 'Жаккардовый корсет',
    price: '9000',
    image: product5,
    isNew: false,
  },
  {
    id: '2',
    name: 'Брюки клёш',
    price: '15000',
    image: product2,
    isNew: false,
  },
];

interface ProductGridProps {
  onAddToCart?: (id: string) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl tracking-[0.15em]">
          Каталог
        </h2>
        <p className="font-body text-xs tracking-[0.3em] text-muted-foreground mb-3">
          Данные модели доступны к заказу по вашим размерам
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard 
              {...product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>

      {/* View All Button 
      <div className="text-center mt-16">
        <button className="px-12 py-4 border border-foreground text-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300">
          Все модели
        </button>
      </div>*/}
    </section>
  );
};

export default ProductGrid;
