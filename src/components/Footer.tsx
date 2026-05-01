import { Input } from 'antd';
import { SendOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
  const footerLinks = {
    shop: [
      { label: 'New Arrivals', href: '#' },
      { label: 'Pumps', href: '#' },
      { label: 'Sandals', href: '#' },
      { label: 'Boots', href: '#' },
      { label: 'Sale', href: '#' },
    ],
    help: [
      { label: 'Contact Us', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Size Guide', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Care Instructions', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Sustainability', href: '#' },
    ],
  };

  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="px-6 md:px-12 lg:px-20 py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-display text-2xl tracking-[0.15em] mb-3">
              Join Our World
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 mb-8">
              Subscribe for exclusive access to new collections, special offers, and styling inspiration.
            </p>
            <div className="flex gap-0">
              <Input 
                placeholder="Enter your email"
                className="flex-1 h-12 bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm tracking-wider rounded-none focus:border-gold hover:border-primary-foreground/50"
              />
              <button className="h-12 px-6 bg-primary-foreground text-foreground hover:bg-gold transition-colors">
                <SendOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display text-xl tracking-[0.3em] mb-2">BLUR</h4>
            <p className="font-body text-xs tracking-wider text-primary-foreground/40 uppercase mb-6">Brand</p>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Crafting luxury clothers for the modern woman since 2025.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <InstagramOutlined className="text-lg" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <FacebookOutlined className="text-lg" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                <TwitterOutlined className="text-lg" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h5 className="font-body text-xs tracking-[0.2em] uppercase mb-6">Купить</h5>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h5 className="font-body text-xs tracking-[0.2em] uppercase mb-6">Задать вопрос</h5>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-body text-xs tracking-[0.2em] uppercase mb-6">О компании</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-primary-foreground/40">
              © 2025 BLUR Atelier. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
