import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { message, Collapse } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Bookmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer, { CartItem } from '@/components/CartDrawer';

import product1 from '@/assets/blur/1.png';
import product2 from '@/assets/blur/2.png';
import product3 from '@/assets/blur/3.png';
import product4 from '@/assets/blur/4.png';
import product5 from '@/assets/blur/5.png';
import product6 from '@/assets/blur/6.png';

// Mock product data - in a real app this would come from an API

const allProducts = {
  '6': {
    id: '6',
    name: 'Кожаный корсет',
    price: 15000,
    images: [product6],
    isNew: false,
    description: 'Кожаный корсет',
  },
  '1': {
    id: '1',
    name: 'Шорты со шнуровкой',
    price: 8000,
    images: [product1],
    isNew: false,
    description: 'Шорты со шнуровкой',
  },
  '3':  {
    id: '3',
    name: 'Юбка-шорты со шнуровкой',
    price: 12000,
    images: [product3],
    isNew: false,
    description: 'Юбка-шорты со шнуровкой',
  },
  '4': {
    id: '4',
    name: 'Шелковая блуза с воланами',
    price: 10000,
    images: [product4],
    isNew: false,
    description: 'Шелковая блуза с воланами',
  },
  '5': {
    id: '5',
    name: 'Жаккардовый корсет',
    price: 9000,
    images: [product5],
    isNew: false,
    description: 'Жаккардовый корсет',
  },
  '2': {
    id: '2',
    name: 'Брюки клёш',
    price: 15000,
    images: [product2],
    isNew: false,
    description: 'Брюки клёш',
}}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = id ? allProducts[id as keyof typeof allProducts] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.images[0], 
        quantity: 1, 
        size: '38' 
      }];
    });

    message.success({
      content: 'Добавлено в корзину',
      className: 'custom-message',
      style: { fontFamily: 'Montserrat, sans-serif' },
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const collapseItems = [
    {
      key: '1',
      label: <span className="font-body text-sm tracking-wide">Delivery and payment</span>,
      children: (
        <div className="font-body text-sm text-muted-foreground space-y-2">
          <p>Free shipping on orders over 15,000 RUB</p>
          <p>Delivery within 2-5 business days</p>
          <p>Payment methods: Card, PayPal, Bank transfer</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onSearchClick={() => message.info('Search coming soon')}
      />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left side - Image gallery */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="hidden md:flex flex-col gap-3 w-20">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square bg-[#f5f5f5] p-2 transition-opacity ${
                      selectedImageIndex === index ? 'opacity-100 ring-1 ring-charcoal' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative bg-[#f5f5f5]">
                <div className="aspect-square">
                  <img 
                    src={product.images[selectedImageIndex]} 
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
                
                {/* Navigation arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-charcoal-light transition-colors"
                >
                  <LeftOutlined className="text-xl" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-charcoal hover:text-charcoal-light transition-colors"
                >
                  <RightOutlined className="text-xl" />
                </button>
              </div>
            </div>

            {/* Right side - Product info */}
            <div className="lg:pt-8">
              <h1 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="font-body text-lg text-muted-foreground mb-8">
                {product.price.toLocaleString()} RUB
              </p>

              {/* Add to cart section */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-charcoal text-primary-foreground font-body text-sm tracking-[0.15em] uppercase hover:bg-charcoal-light transition-colors"
                >
                  + в корзину
                </button>
                <button
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                    message.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
                  }}
                  className={`w-14 h-14 border flex items-center justify-center transition-colors ${
                    isWishlisted 
                      ? 'bg-charcoal border-charcoal text-primary-foreground' 
                      : 'border-border hover:border-charcoal'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Collapsible sections */}
              <div className="border-t border-border">
                <Collapse 
                  items={collapseItems}
                  bordered={false}
                  expandIconPosition="end"
                  className="bg-transparent product-collapse"
                />
              </div>
            </div>
          </div>
        </div>
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

export default ProductDetail;
