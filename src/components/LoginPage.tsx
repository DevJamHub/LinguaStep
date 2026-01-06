import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup
    setTimeout(() => {
      onLoginSuccess();
    }, 500);
  };

  const handleSocialLogin = (provider: string) => {
    // Simulate social login
    setTimeout(() => {
      onLoginSuccess();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-400 via-accent-400 to-secondary-400 flex items-center justify-center p-4">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 8C18 8 13 12 13 18C13 20 13.5 21.8 14.4 23.3L12 28L17 26C19 27.2 21.4 28 24 28C30 28 35 24 35 18C35 12 30 8 24 8Z" fill="#22c55e"/>
              <path d="M24 12C21 12 18.5 14 18.5 16.5C18.5 19 21 21 24 21C27 21 29.5 19 29.5 16.5C29.5 14 27 12 24 12Z" fill="#fbbf24"/>
              <circle cx="22" cy="16" r="1.5" fill="#1e40af"/>
              <circle cx="26" cy="16" r="1.5" fill="#1e40af"/>
              <path d="M18 32C18 32 20 36 24 36C28 36 30 32 30 32" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-white mb-2">LinguaStep</h1>
          <p className="text-white/90">Belajar bahasa langkah demi langkah</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-center text-gray-800 mb-6">
            {isSignUp ? 'Buat Akun Baru' : 'Selamat Datang Kembali'}
          </h2>

          {/* Demo Info */}
          <div className="mb-6 p-4 bg-primary-50 border-2 border-primary-200 rounded-xl">
            <p className="text-sm text-primary-700 text-center">
              <span className="font-semibold">Mode Demo:</span> Gunakan email dan password apa saja untuk masuk
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {isSignUp && (
              <div>
                <label className="block text-sm text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Masukkan nama Anda"
                  required={isSignUp}
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="nama@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSignUp ? 'Daftar' : 'Masuk'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Atau lanjutkan dengan</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('facebook')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <Facebook className="w-5 h-5 text-[#1877f2]" />
              <span className="text-gray-700">Lanjutkan dengan Facebook</span>
            </button>

            <button
              onClick={() => handleSocialLogin('twitter')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <Twitter className="w-5 h-5 text-[#1da1f2]" />
              <span className="text-gray-700">Lanjutkan dengan X</span>
            </button>

            <button
              onClick={() => handleSocialLogin('instagram')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-[#e4405f]" />
              <span className="text-gray-700">Lanjutkan dengan Instagram</span>
            </button>
          </div>

          {/* Toggle Sign Up / Login */}
          <div className="text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              {isSignUp ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/80 text-sm mt-6">
          Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan kami
        </p>
      </div>
    </div>
  );
}