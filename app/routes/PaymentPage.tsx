import React, { useState } from 'react';
import { Link } from "react-router";
import Footer from "~/Web_components/Footer";
import NavLogin from "~/Web_components/NavLogin";

export default function PaymentPage() {
    const [selectedPayment, setSelectedPayment] = useState('card');
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        country: 'US',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
    });

  const cartItems = [
    { id: 1, name: 'Premium Wireless Headphones', price: 199.99, quantity: 1, image: '/api/placeholder/80/80' },
    { id: 2, name: 'Bluetooth Speaker', price: 89.99, quantity: 2, image: '/api/placeholder/80/80' },
    { id: 3, name: 'Phone Case', price: 29.99, quantity: 1, image: '/api/placeholder/80/80' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment submitted:', formData);
  };

  return (
    <>
    <NavLogin/>
    <div className="mt-15 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/cart" className="py-5 px-3 text-white hover:text-cyan-200">
        <button className="flex items-center px-4 py-0.5 space-x-2 text-white rounded bg-gray-600 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <span>返回</span>
        </button>
      </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#001b29' }}>結帳</h2>
              
              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#001b29' }}>聯絡資料</h3>
                <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">名稱</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="John Chan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">電話</label>
                    <input
                      type="number"
                      name="PhoneNumber"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">電郵</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#001b29' }}>付款方式</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      checked={selectedPayment === 'card'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mr-3"
                    />
                    <label htmlFor="card" className="flex items-center cursor-pointer">
                      信用卡
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      checked={selectedPayment === 'paypal'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mr-3"
                    />
                    <label htmlFor="paypal" className="flex items-center cursor-pointer">
                      <div className="w-5 h-5 mr-2 bg-blue-500 rounded text-white text-xs flex items-center justify-center">P</div>
                      PayPal
                    </label>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              {selectedPayment === 'card' && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#001b29' }}>信用卡資料</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">信用卡號碼</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        // style={{ focusRingColor: '#001b29' }}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">持有人姓名</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        // style={{ focusRingColor: '#001b29' }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        //   style={{ focusRingColor: '#001b29' }}
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        //   style={{ focusRingColor: '#001b29' }}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* Submit Button */}
              <Link to="/orderconfirmation">
              <button
                className="w-full bg-[#001b29] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:opacity-90 flex items-center justify-center">
                確認付款 - ${total.toFixed(2)}
              </button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#001b29' }}>訂單摘要</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-300 pt-4 space-y-2">
                  <span className="text-lg font-semibold" style={{ color: '#001b29' }}>總計</span>
                  <span className="text-lg font-semibold" style={{ color: '#001b29' }}>${total.toFixed(2)}</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </> 
  );
;}