import { Carousel } from 'antd';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';

const slides = [
  {
    image: hero1,
    title: 'Новая коллекция',
    subtitle: 'Новый год 2026',
  },
  {
    image: hero2,
    title: 'Timeless Elegance',
    subtitle: 'Crafted for the Modern Woman',
  },
  
];

const HeroCarousel = () => {
  return (
    <div className="relative h-[calc(100vh-60px)] mt-header overflow-hidden">
      <Carousel 
        autoplay 
        autoplaySpeed={5000}
        effect="fade"
        dots={{ className: 'custom-dots' }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[calc(100vh-60px)]">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/10" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-end pb-24 px-6 text-center">
              <p className="font-body text-xs tracking-[0.3em] text-primary-foreground/80 uppercase mb-3 animate-fade-up">
                {slide.subtitle}
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-[0.2em] text-primary-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {slide.title}
              </h2>
              <button className="mt-8 px-10 py-3 border border-primary-foreground/60 text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Начать покупки
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
