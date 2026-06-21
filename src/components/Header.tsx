import { useState } from 'react'
import { Badge, Drawer } from 'antd'
import { MenuOutlined, SearchOutlined, ShoppingOutlined, CloseOutlined } from '@ant-design/icons'
import icon from '@/assets/blur/favicon.png' 


interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
  onSearchClick?: () => void;
}

const Header = ({ cartCount = 0, onCartClick, onSearchClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Каталог', href: 'collection' },
    { label: 'Услуги ателье', href: 'new' },
    { label: 'О нас', href: 'about' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-header bg-none">
        <div className="flex items-top justify-between h-full px-6 ">     {/* Menu Button */}
          
          {/* Logo */}
          <div className="margin-top-20">
            <a href="/" className="">
              <img 
                src={icon}       
                width={75}
                height={120}
                />
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
                <ShoppingOutlined className="text-lg text-primary-foreground" style={{ color: 'black'}}/>
              </Badge>
            </button>
            <button 
              onClick={() => setMenuOpen(true)}
              className="text-primary-foreground hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <MenuOutlined className="text-lg" style={{ color: 'black'}} />
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
        <div className="h-full bg-black opacity-70 text-primary-foreground">
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
