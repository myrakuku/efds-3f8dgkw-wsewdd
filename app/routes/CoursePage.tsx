import Nav from "~/Web_components/Nav";
import Footer from '../Web_components/Footer';

export default function Course() {
    return (
        <>
        <Nav/>
        <div className="mx-10 md:mx-30 mt-20">
            <div className="mx-auto my-10">
                <h1 className="text-xl font-semibold mb-2 text-gray-800">course.title</h1>
                <p className="text-gray-600 mb-4">course.long.description</p>
                <p className="text-[14px] font-bold text-gray-400">$course.originalPrice</p>
                <p className="text-[19px] font-bold text-blue-600">$course.price</p>
                <button className="px-4 py-2 bg-[#001B29] text-white rounded-md hover:bg-blue-200 transition-colors add-to-cart" data-course-id="${course.id}">
                    加入購物車
                </button >
            </div>
        </div>
        
        

        <Footer/>
        </>
      );
};