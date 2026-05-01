import { useState } from 'react';
import { message } from 'antd';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import ProductGrid from '@/components/ProductGrid';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';
import CartDrawer, { CartItem } from '@/components/CartDrawer';

import product1 from '@/assets/blur/1.png';
import product2 from '@/assets/blur/2.png';
import product3 from '@/assets/blur/3.png';
import product4 from '@/assets/blur/4.png';
import product5 from '@/assets/blur/5.png';
import product6 from '@/assets/blur/6.png';
import product7 from '@/assets/blur/7.png';

const productData: Record<string, { name: string; price: number; image: string }> = {
    '6': {
      name: 'Кожаный корсет',
      price: 15000,
      image: product6,
    },
    '1': {
      name: 'Шорты со шнуровкой',
      price: 8000,
      image: product1,
    },
    '3':  {
      name: 'Юбка-шорты со шнуровкой',
      price: 12000,
      image: product3,
    },
    '4': {
      name: 'Шелковая блуза с воланами',
      price: 10000,
      image: product4,
    },
    '5': {
      name: 'Жаккардовый корсет',
      price: 9000,
      image: product5,
    },
    '2': {
      name: 'Брюки клёш',
      price: 15000,
      image: product2,
  },
  '7': {
    name: 'Лонгслив с шелком',
    price: 7000,
    image: product7,
  },
};

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (id: string) => {
    const product = productData[id];
    if (!product) return;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, id, quantity: 1, size: '38' }];
    });

    message.success({
      content: 'Добавлено в корзину',
      className: 'custom-message',
      style: { fontFamily: 'Montserrat, sans-serif' },
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => message.info('Search coming soon')}
      />
      
      <main>
        {/*<HeroCarousel />*/}
        <ProductGrid onAddToCart={handleAddToCart} />
        {/*<CategorySection />*/}
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
