import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({ name: user.name, password: user.password });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-bold mb-6 border-b pb-4">Edit Profile</h2>
      {message && <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email (Read Only)</label>
          <input type="email" disabled value={user.email} className="mt-1 w-full border rounded-lg p-2 bg-gray-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
}