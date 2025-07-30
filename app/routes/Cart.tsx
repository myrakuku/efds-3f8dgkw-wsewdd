import Footer from "~/Web_components/Footer";
import NavLogin from "~/Web_components/NavLogin";
import { Link } from "react-router";

export default function Cart() {
    
    return(
        <>
        <NavLogin/>
        <div className="container mx-auto pt-[100px] mb-10 px-4">
        <Link to="/" className="py-5 px-3 text-white hover:text-cyan-200">
              <button className="flex items-center px-4 py-0.5 space-x-2 text-white rounded bg-gray-600 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  <span>返回</span>
              </button>
        </Link>
        <h1 className="text-3xl font-bold mb-8">購物車</h1>
        
        {/* <!-- Cart Items --> */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-6">
            {/* <!-- Cart Header --> */}
            <div className="hidden md:grid grid-cols-12 gap-4 border-b border-gray-400 pb-4 mb-4">
              <div className="col-span-6 font-semibold">課程</div>
              <div className="col-span-2 font-semibold text-center">單價</div>
              <div className="col-span-2 font-semibold text-center">數量</div>
              <div className="col-span-2 font-semibold text-right"></div>
            </div>
            
            {/* <!-- Cart Items List --> */}
            <div id="cart-items">
              {/* <!-- 項目 - 將由JavaScript動態生成 --> */}
            </div>
            
            {/* <!-- Empty Cart Message --> */}
            <div id="empty-cart-message" className="py-10 text-center hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold mt-4">您的購物車是空的</h3>
              <p className="text-gray-500 mt-2">快去選購課程吧！</p>
              <a href="#" className="inline-block mt-4 px-6 py-2 bg-[#001B29] text-white rounded-md hover:bg-blue-700 transition-colors">瀏覽課程</a>
            </div>
          </div>
        </div>
        
        {/* <!-- Cart Summary --> */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">訂單摘要</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span></span>
                <span id="subtotal">HKD$0</span>
              </div>
              <div className="flex justify-between">
                <span>折扣</span>
                <span id="discount">HKD$0</span>
              </div>
              <div className="border-t border-gray-400 pt-3 flex justify-between font-semibold text-lg">
                <span>總計</span>
                <span id="total">HKD$0</span>
              </div>
            </div>
            <Link to="/paymentpage">
              <button id="checkout-btn" className="w-full mt-6 py-3 bg-[#001B29] text-white rounded-md hover:bg-cyan-700">
                前往結帳
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
};