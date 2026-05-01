import { useState } from 'react'
import { Badge, Drawer } from 'antd'
import { MenuOutlined, SearchOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons'

interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
  onSearchClick?: () => void;
}

const Header = ({ cartCount = 0, onCartClick, onSearchClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Новая коллекция', href: '#new' },
    { label: 'Каталог', href: '#collections' },
    { label: 'О бренде', href: '#about' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-header bg-charcoal">
        <div className="flex items-center justify-between h-full px-6 md:px-12">
          {/* Menu Button */}
          <button 
            onClick={() => setMenuOpen(true)}
            className="text-primary-foreground hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <MenuOutlined className="text-lg" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="/" className="block">
              <h3 className="text-center font-display text-primary-foreground text-xl md:text-2xl tracking-[0.3em] font-normal">
                BLUR 
              </h3>
              <p className="text-center text-primary-foreground/60 text-[8px] tracking-[0.25em] uppercase font-body">
                Atelier
              </p>
              <p className="text-center text-primary-foreground/60 text-[6px] tracking-[0.25em] font-body">
                Санкт-Петербург
              </p>
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button 
              onClick={onCartClick}
              className="text-primary-foreground hover:opacity-70 transition-opacity"
              aria-label="Cart"
            >
              <Badge count={cartCount} size="small">
                <ShoppingOutlined className="text-lg text-primary-foreground" />
              </Badge>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <Drawer
        placement="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        width={360}
        closable={false}
        styles={{
          body: { padding: 0, backgroundColor: 'hsl(var(--charcoal))' },
          header: { display: 'none' },
        }}
      >
        <div className="h-full bg-charcoal text-primary-foreground">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <CloseOutlined className="text-lg" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="px-10 py-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={item.label} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <a 
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display text-2xl tracking-[0.15em] hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-8 left-10 right-10">
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="font-body text-xs tracking-wider text-primary-foreground/50 uppercase">
                Мы в соцсетях:
              </p>
              <div className="flex gap-6 mt-4">
                <a href="#" className="font-body text-sm hover:text-gold transition-colors">Instagram</a>
                {/*<a href="#" className="font-body text-sm hover:text-gold transition-colors">VK</a>*/}
                <a href="#" className="font-body text-sm hover:text-gold transition-colors">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
