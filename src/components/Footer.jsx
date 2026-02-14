import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top - Grid 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-orange-500 mb-4">
              videobelajar
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="text-sm text-gray-500">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-sm text-gray-500 mt-1">
              +62-877-7123-1234
            </p>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Kategori</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Digital & Teknologi</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Pemasaran</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Manajemen Bisnis</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Pengembangan Diri</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Desain</li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Tentang Kami</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Kebijakan Privasi</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Ketentuan Layanan</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Bantuan</li>
            </ul>
          </div>

          {/* Komunitas */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Komunitas</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Tips Sukses</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
        </div>

        {/* Divider dengan Social Icons */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400 order-2 sm:order-1">
            ©2023 Gerobak Sayur All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400 order-1 sm:order-2">
            {/* LinkedIn */}
            <a 
              href="#" 
              className="hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.1c.5-.9 1.8-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7v10h-4v-8.9c0-2.1 0-4.8-3-4.8s-3.4 2.3-3.4 4.6v9.1h-4v-16z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="#" 
              className="hover:text-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0022 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="#" 
              className="hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;