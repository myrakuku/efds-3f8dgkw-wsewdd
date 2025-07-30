import { Link } from "react-router";

export default function Registration() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#001b29' }}>
                {/* <User className="w-8 h-8 text-white" /> */}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">創建帳戶</h1>
              <p className="text-gray-600">Join us and start your journey</p>
            </div>
  
            {/* Registration Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      名稱
                    </label>
                    <input
                      type="text"
                      name="Name"
                    className="w-full pl-12 pr-14 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-lg"
                      placeholder="John Chan"
                    />
                  </div>
                  
                </div>
  
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電郵地址
                  </label>
                  <div className="relative">
                    {/* <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
                    <input
                      type="email"
                      name="email"
                      className="w-full pl-12 pr-14 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
  
                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    密碼
                  </label>
                  <div className="relative">
                    {/* <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
                    <input
                      name="password"
                      className="w-full pl-12 pr-14 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-lg"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                    </button>
                  </div>
                </div>
  
                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    確認密碼
                  </label>
                  <div className="relative">
                    {/* <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
                    <input

                      name="confirmPassword"
      
                      className="w-full pl-12 pr-14 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-lg"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {/* {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />} */}
                    </button>
                  </div>
                </div>
  
                {/* Submit Button */}
                <button type="button" className="w-full p-3 rounded-xl bg-[#001b29] text-white font-semibold text-lg shadow-lg focus:ring-2 focus:ring-blue-500 ">
                    <p className="m-auto y-auto">提交</p>
                </button>
              </div>
  
              {/* Login Link */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  已有帳戶了?{' '}
                  <Link to="/login">
                  <button 
                    // onClick={() => navigate('login')}
                    className="font-medium hover:underline transition-colors duration-200"
                    style={{ color: '#001b29' }}
                  >
                    登入
                  </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}