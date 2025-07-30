import { Link } from "react-router";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    
    <div className="w-full max-w-lg relative z-10">
      {/* Admin Login Card */}
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-200/50">

        {/* Admin Login Form */}
        <div className="space-y-8">
          

          {/* Username & Password Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
              用戶電郵
            </label>
            <input
                id="email"
                name="email"
                className="w-full pl-12 pr-14 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-lg"
                placeholder="請輸入您的電郵地址"
              />
            <label htmlFor="password" className="pt-7 block text-sm font-semibold text-gray-700 mb-3">
              密碼
            </label>
            <input
                id="password"
                name="password"
                className="w-full pl-12 pr-14 py-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 text-lg"
                placeholder="請輸入您的密碼"
              />
          </div>
          {/* Remember Me & Security Options */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                // checked={formData.rememberMe}
                // onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                style={{ accentColor: '#001b29' }}
              />
              <span className="ml-3 text-sm text-gray-600 font-medium">保持登入</span>
            </label>
            <button
              type="button"
              // onClick={() => setCurrentPage('forgot-password')}
              className="text-sm font-semibold hover:underline transition-colors duration-200"
              style={{ color: '#001b29' }}
            >
              忘記用戶名稱？
            </button>
          </div>


          {/* Login Button */}
          <Link to="/userinformation">
          <button type="button" className="w-full p-3 rounded-xl bg-[#001b29] text-white font-semibold text-lg shadow-lg focus:ring-2 focus:ring-blue-500 ">
              <p className="m-auto y-auto">登入</p>
          </button></Link>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
            <p className="text-gray-600">
                  還沒有帳戶?{' '}
                  <Link to="/registration">
                  <button 
                    // onClick={() => navigate('login')}
                    className="font-medium hover:underline transition-colors duration-200"
                    style={{ color: '#001b29' }}
                  >
                    馬上註冊
                  </button>
                  </Link>
            </p>
          </div>
      </div>

      
    </div>
  </div>
  )
}
