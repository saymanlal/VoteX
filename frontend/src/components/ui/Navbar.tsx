'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../lib/i18n'; // Make sure this path is correct based on your file structure

export default function Navbar() {
  const { t, i18n } = useTranslation('common2');
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [isHovered, setIsHovered] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    setLanguage(selectedLang);
  };

  const handleVerify = async () => {
    try {
      const response = await fetch('/api/admins/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminId: adminCode }),
      });

      if (response.ok) {
        const data = await response.json();
        setVerificationResult(t('welcome_admin', {
          name: data.admin.name,
          access: data.admin.access,
        }));
      } else {
        setVerificationResult(t('invalid_admin'));
      }
    } catch (err) {
      console.error(err);
      setVerificationResult(t('error_verifying'));
    }
  };

  useEffect(() => {
    if (isHovered && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isHovered]);

  return (
    <div className="flex justify-center">
      <nav className="bg-[#8d8d8d92] backdrop-blur-md rounded-3xl text-white px-10 py-3 shadow-md border-b border-white/30 z-10 fixed min-w-2xl top-10">
        <div className="mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex text-3xl font-bold text-white">
            Vote <p className="text-blue-600">X</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="hover:text-blue-400 font-semibold transition">
                {t('Admin')}
              </button>

              {/* Admin Box */}
              <div className={`absolute top-12 right-0 left-12 transition-all duration-300 ease-out transform
                ${isHovered ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
                bg-[#141414] text-black p-4 rounded-lg shadow-lg w-64 z-20`}>
                <label className="block text-sm text-white font-medium mb-2">
                  {t('enter_admin_code')}
                </label>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={t('enter_unique_id')}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none text-white bg-[#2d2d2d] mb-3"
                  value={adminCode}
                  onChange={(e) => setAdminCode(e.target.value)}
                />
                <a href="/admin">
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  {t('verify')}
                </button></a>
                {verificationResult && (
                  <p className="mt-3 text-sm text-white">{verificationResult}</p>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle (optional) */}
          <div className="md:hidden">
            <button className="text-white text-2xl focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
