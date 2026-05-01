import { Drawer, InputNumber } from 'antd';
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartDrawer = ({ open, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer
      placement="right"
      open={open}
      onClose={onClose}
      width={420}
      closable={false}
      styles={{
        body: { padding: 0 },
        header: { display: 'none' },
      }}
    >
      <div className="h-full flex flex-col bg-background">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-display text-xl tracking-[0.15em]">Ваш заказ</h2>
          <button 
            onClick={onClose}
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <CloseOutlined />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-body text-muted-foreground mb-4">Корзина пуста</p>
              <button 
                onClick={onClose}
                className="font-body text-sm underline hover:no-underline"
              >
                Продолжить покупки
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-base tracking-wider">{item.name}</h3>
                        {item.size && (
                          <p className="font-body text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                        )}
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Remove item"
                      >
                        <DeleteOutlined className="text-sm" />
                      </button>
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <InputNumber
                        min={1}
                        max={10}
                        value={item.quantity}
                        onChange={(value) => onUpdateQuantity(item.id, value || 1)}
                        className="w-20"
                        size="small"
                      />
                      <p className="font-body text-sm">${(item.price * item.quantity)} RUB</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-sm uppercase tracking-wider">Итого</span>
              <span className="font-display text-xl">${subtotal} RUB</span>
            </div>
            <button className="w-full py-4 bg-charcoal text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-charcoal-light transition-colors">
              Checkout
            </button>
            <p className="font-body text-xs text-center text-muted-foreground mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
