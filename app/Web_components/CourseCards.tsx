import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

// Define the structure of a course
interface Course {
    id: number;
    title: string;
    description: string;
    originalPrice: number;
    price: number;
}

// Card component to display individual course information
const Card: React.FC<{ course: Course }> = ({ course }) => {
    return (
      <>
      <section className="">
        <div className="container mx-auto">
          {/* <!-- Card Container (JS Data) --> */}
          <Link to="/course">
          <div className="p-6 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <p className="text-[14px] font-bold text-gray-400">${course.originalPrice.toLocaleString()}</p>
            <div className="flex justify-between items-center">
            <span className="text-[19px] font-bold text-blue-600">${course.price.toLocaleString()}</span>
            <Link to="/cart">
            <button className="px-4 py-2 bg-[#001B29] text-white rounded-md hover:bg-blue-200 transition-colors add-to-cart" data-course-id="${course.id}">
                加入購物車
            </button >
            </Link>
          </div>
          </div>
          </Link>
      </div>
      </section>
      </>
    );
};

// Main component for displaying the courses
const Cards: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [cart, setCart] = useState<Course[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

    useEffect(() => {
        // Initialize the courses data
        const coursesData: Course[] = [
            {
                id: 1,
                title: "前端開發入門",
                description: "學習HTML, CSS和JavaScript基礎，30天內從零開始建立你的第一個網站...",
                originalPrice: 28800,
                price: 20000
            },
            {
                id: 2,
                title: "Python 數據分析",
                description: "使用Python和Pandas進行數據處理與分析，適合初學者入門數據科學領域...",
                originalPrice: 28800,
                price: 20000
            },
            {
                id: 3,
                title: "UI/UX 設計原則",
                description: "掌握現代UI/UX設計核心概念，學習創建直觀且美觀的用戶界面...",
                originalPrice: 28800,
                price: 20000
            },
            {
                id: 3,
                title: "UI/UX 設計原則",
                description: "掌握現代UI/UX設計核心概念，學習創建直觀且美觀的用戶界面...",
                originalPrice: 28800,
                price: 20000
            },
            {
                id: 3,
                title: "UI/UX 設計原則",
                description: "掌握現代UI/UX設計核心概念，學習創建直觀且美觀的用戶界面...",
                originalPrice: 28800,
                price: 20000
            },
            
        ];
        
        setCourses(coursesData);
    }, []);

    // Function to add item to cart
    const addToCart = (course: Course) => {
        const updatedCart = [...cart, course];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div id="course-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-1">
            {courses.map(course => (
                <Card key={course.id} course={course} />
            ))}
        </div>
    );
};

export default Cards;
