import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  if (cart.length === 0) return <div className="text-center py-20 text-gray-500">Your cart is empty</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-bold mb-6 border-b pb-4">Shopping Cart</h2>
      <div className="space-y-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between gap-4 border-b pb-4 last:border-0">
            <div className="flex items-center gap-4 flex-1">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div>
                <h3 className="font-medium text-gray-900 line-clamp-1">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button onClick={() => updateQuantity(item.id, -1)} className="p-1 border rounded hover:bg-gray-50"><Minus size={16}/></button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="p-1 border rounded hover:bg-gray-50"><Plus size={16}/></button>
            </div>
            
            <div className="w-24 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:bg-red-50 p-2 rounded"><Trash2 size={20}/></button>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t flex justify-between items-center">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}