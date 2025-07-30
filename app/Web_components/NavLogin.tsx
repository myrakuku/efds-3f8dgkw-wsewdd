import logo from '../image/ITELogo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function NavLogin() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#001b29]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center py-2 px-1 text-white">
              <img src={logo} alt="Hangs Logo" className="h-10" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3 text-white hover:text-cyan-200">課程總覽</Link>
            <Link to="/about" className="py-5 px-3 text-white hover:text-cyan-200">關於ITE</Link>
            <Link to="/userinformation" className="py-5 px-3 text-white hover:text-cyan-200 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg"  height="14" width="14" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
              <span>你好，User！</span>
            </Link>
              {/* <!-- 購物車圖標 --> */}
              <div className="relative mx-4">
                  <Link to="/cart" className="flex items-center text-white hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {/* <!-- 購物車商品數量標記 --> */}
                  <span id="cart-count" className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                  </Link>
              </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-[#001b29] bg-opacity-75 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center justify-center h-full space-y-8 transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full transition-transform duration-300'}`}>
          <Link to="/" className="text-white text-2xl hover:text-blue-300 transition-colors duration-300">課程總覽</Link>
          <Link to="/ourteam" className="text-white text-2xl hover:text-blue-300 transition-colors duration-300">專業教授團隊</Link>
          <Link to="/about" className="text-white text-2xl hover:text-blue-300 transition-colors duration-300">關於ITE</Link>
          <Link to="/contactus" className="text-white text-2xl hover:text-blue-300 transition-colors duration-300">聯絡我們</Link>
          <Link to="/userinformation" className="py-5 px-3 text-white hover:text-cyan-200">
              <button className="flex items-center px-4 py-2 space-x-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-6.627 0-12 3.582-12 8v2h24v-2c0-4.418-5.373-8-12-8z" />
                  </svg>
                  <span>帳戶資料</span>
              </button>
          </Link>
          {/* <!-- 購物車圖標 --> */}
          <div className="relative mx-4">
                  <Link to="/cart" className="flex items-center text-white hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {/* <!-- 購物車商品數量標記 --> */}
                  <span id="cart-count" className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                  </Link>
              </div>
          <button onClick={toggleMobileMenu} className="text-white absolute top-6 right-6 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};




