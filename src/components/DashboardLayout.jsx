import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { ShoppingCart, User, LogOut, Package } from 'lucide-react';

export default function DashboardLayout() {
  const { user, logout, sessionExpiry } = useAuth();
  const { cart } = useCart();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (!sessionExpiry) return;
      const remaining = sessionExpiry - Date.now();
      if (remaining <= 0) {
        setTimeLeft('00:00');
        return;
      }
      const minutes = Math.floor((remaining / 1000 / 60) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, [sessionExpiry]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
              <Package /> ShopDashVed
            </Link>
            
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full">
                Session ends in: {timeLeft}
              </span>
              
              <Link to="/" className="text-gray-600 hover:text-blue-600">Products</Link>
              <Link to="/cart" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <ShoppingCart size={20} />
                <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-blue-600"><User size={20} /></Link>
              <button onClick={logout} className="text-gray-600 hover:text-red-600"><LogOut size={20} /></button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
}