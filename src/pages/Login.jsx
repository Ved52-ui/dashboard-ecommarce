import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Package } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = login(email, password);
    if (err) setError(err);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full p-8 sm:p-10 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
        
        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <Package className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back</h2>
          <p className="text-gray-500 mt-2 text-sm text-center">Please enter your details to sign in.</p>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg">
            {error}
          </div>
        )}
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
            <input 
              type="email" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white"
              placeholder="Enter your email"
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <input 
              type="password" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white"
              placeholder="••••••••"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          {/* Extra Options (Visual Only) */}
          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-900 transition">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 border-gray-300 w-4 h-4 cursor-pointer" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-medium hover:bg-black hover:shadow-lg transition-all active:scale-[0.98] mt-2"
          >
            Sign In
          </button>
        </form>
        
        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Sign up for free
          </Link>
        </p>

      </div>
    </div>
  );
}