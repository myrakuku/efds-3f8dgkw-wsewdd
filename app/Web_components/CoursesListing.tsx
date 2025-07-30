import { useState } from 'react';
import { Link } from 'react-router';
import courseAI1 from "../image/course-AI-1.jpg";
import courseDA1 from "../image/course-DA-1.png";
// import coursePython1 from "../image/course-python-1.png";
import courseSecurity1 from "../image/course-security-1.png";
// import courseSecurity2 from "../image/course-security-2.png";
// import courseSecurity3 from "../image/course-security-2.png";
import courseWeb1 from "../image/course-web-1.jpg";
import courseWeb2 from "../image/course-web-2.jpg";
import courseWeb3 from "../image/course-web-3.png";
// import courseWeb4 from "../image/course-web-4.png";
import courseNITTP1 from "../image/course-NITTP-1.png";
import courseLAW1 from "../image/course-LAW-1.jpg";

// course data
const hotCourses = [
  {
    id: 1,
    title: "AI 10小時速成班",
    category: "AI",
    tag: ["AI","初學者","雞精"],
    price: 1800,
    originalPrice: 3990,
    image: courseAI1,
    isHot: true
  },
  {
    id: 2,
    title: "網頁開發入門及科技概述",
    category: "WEB",
    tag: ["入門","初學者","簡易上手"],
    price: 1800,
    originalPrice: 3990,
    image: courseWeb2,
    isHot: true
  },
  {
    id: 3,
    title: "企業決策者前端網站開發課程",
    category: "WEB",
    tag: ["入門","初學者","簡易上手"],
    price: 1800,
    originalPrice: 3990,
    image: courseWeb1,
    isHot: true
  }
];

const allCourses = [
  ...hotCourses,
  {
    id: 4,
    title: "全端網站開發課程",
    category: "WEB",
    tag: ["資深者","工業規格","一步到位"],
    price: 3880,
    originalPrice: 3990,
    image: courseWeb3,
  },
  {
    id: 5,
    title: "中小企業網絡安全",
    category: "Security",
    tag: ["入門","初學者","簡易上手"],
    price: 3880,
    originalPrice: 3990,
    image: courseSecurity1,
  },
  {
    id: 6,
    title: "數據分析、可視化及資料庫",
    category: "Python",
    tag: ["入門","初學者","簡易上手"],
    price: 3880,
    originalPrice: 3990,
    image: courseDA1,
  },
  {
    id: 7,
    title: "企業培訓",
    category: "NITTP",
    tag: ["入門","初學者","簡易上手"],
    price: 3880,
    originalPrice: 3990,
    image: courseNITTP1,
  },
  {
    id: 8,
    title: "打擊洗錢及恐怖分子資金籌集活動條例與金融科技應用證書課程",
    category: "Security",
    tag: ["入門","初學者","簡易上手"],
    price: 500,
    originalPrice: 500,
    image: courseLAW1,
  },
  {
    id: 9,
    title: "Cybersecurity Essentials",
    category: "Security",
    tag: ["入門","初學者","簡易上手"],
    price: 3880,
    originalPrice: 3990,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop"
  }
];

const categories = ["All", "AI", "WEB", "Python", "DevOps", "NITTP", "Security"];

const CourseCard = ({ course, isHot = false }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-scroll hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4">
        <span className="bg-black/70 bg-opacity-70 text-white px-2 py-1 rounded-lg text-sm">
          {course.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-gray-800 transition-colors">
        <button 
          className="text-left hover:text-blue-600 transition-colors"
        >
          {course.title}
        </button>
      </h3>
      
      <div className="my-4">
      <p className="text-2xl font-bold text-green-600">${course.price}</p>
      <p className="text-lg text-gray-400 line-through">${course.originalPrice}</p>
  
      <Link to="/cart">
        <button
          className="bg-gradient-to-r from-[#001b29] to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-[#001b29] transition-all duration-200 transform hover:scale-105"
        >
          加入購物車
        </button>
      </Link>
      </div>
      <p className="font-bold text-sm mb-2 text-gray-400">
        <button 
          className="text-left"
        >
          #{course.tag}
        </button>
      </p>
    </div>
  </div>
);

export default function CoursesListing() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = selectedCategory === "All" 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001b29] via-cyan-700 to-[#001b29] text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              掌握新技能
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              探索我們全面的課程，助您加速職業發展並釋放您的潛力!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Hot Courses Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🔥 熱門課程 🔥
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                限時優惠中！
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotCourses.map(course => (
              <CourseCard key={course.id} course={course} isHot={true} />
            ))}
          </div>
        </section>

        {/* All Courses Section */}
        <section>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">所有課程</h2>
            </div>
            
            {/* Filter */}
            <div className="mt-6 lg:mt-0">
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-300 to-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              顯示 {filteredCourses.length} 課程
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                暫時未找到課程
              </h3>
              <p className="text-gray-500">
                請嘗試選擇不同的類別或稍後再查看課程。
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};