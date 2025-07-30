import React from 'react';
import { Link } from "react-router";
import Footer from '~/Web_components/Footer';
import NavLogin from '~/Web_components/NavLogin';

export default function OrderConfirmation() {
  // Sample order data - in real app this would come from props/context/API
  const orderData = {
    orderNumber: 'ORD-2024-001234',
    paymentDate: '2024-07-14',
    paymentTime: '14:30:25',
    customerEmail: 'customer@example.com',
    items: [
      {
        id: 1,
        name: 'Course 1',
        quantity: 1,
        price: 1880,
        image: ''
      },
      {
        id: 2,
        name: 'Course 2',
        quantity: 1,
        price: 1880,
        image: ''
      },
      {
        id: 3,
        name: 'Course 3',
        quantity: 1,
        price: 1880,
        image: ''
      }
    ],
    subtotal: 2000,
    total: 2000,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'Tokyo',
      state: 'Tokyo',
      zip: '100-0001',
      country: 'Japan'
    },
    paymentMethod: 'Credit Card ending in 4242',
    estimatedDelivery: '2024-07-18 - 2024-07-20'
  };

  return (
    <>
    <NavLogin/>
    <div className="mt-15 min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="text-center">
            {/* <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" /> */}
            <div className='m-5 flex items-center justify-center '>
            <button className="bg-green-600 text-white font-bold py-2 px-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              確認訂單
            </h2>
            <p className="text-gray-600 text-lg mb-4">
             感謝您的購買！您的訂單我們會盡快處理。
            </p>
            <div className="text-sm text-gray-600">
              #{orderData.orderNumber}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-300">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  {/* <Package className="w-5 h-5" /> */}
                  訂單摘要
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        {/* <Package className="w-8 h-8 text-gray-400" /> */}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Order Details Sidebar */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  付款記錄
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">總計</span>
                    <span className="text-2xl font-bold" style={{ color: '#001b29' }}>
                      ${orderData.total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>付款方式:</strong> {orderData.paymentMethod}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>付款日期:</strong> {orderData.paymentDate} 於 {orderData.paymentTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to="/">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                返回首頁
              </button>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};
