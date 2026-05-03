import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({ id, name, price, image, hoverImage, isNew, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Image Container - Light gray background like nikiheels */}
      <div className="relative overflow-hidden bg-[#f5f5f5] mb-2">
        <img 
          src={isHovered && hoverImage ? hoverImage : image}
          alt={name}
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* New Badge */}
        {isNew && (
          <div className="absolute top-4 left-4">
            <span className="font-body text-[10px] tracking-[0.15em] uppercase bg-charcoal text-primary-foreground px-3 py-1">
              New
            </span>
          </div>
        )}

        {/* Quick Add Button - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
            className="w-full py-3 bg-charcoal text-primary-foreground font-body text-xs tracking-[0.15em] uppercase hover:bg-charcoal-light transition-colors"
          >
            + в корзину
          </button>
        </div>
      </div>

      {/* Product Info - Left aligned like nikiheels */}
      <div className="text-left">
        <h3 className="font-body text-sm tracking-wide text-foreground mb-1">
          {name}
        </h3>
        <p className="font-body text-lg text-muted-foreground mb-8">
          {price.toLocaleString()} RUB
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
