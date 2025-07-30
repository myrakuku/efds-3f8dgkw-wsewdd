import Footer from '../Web_components/Footer';
import Nav from '../Web_components/Nav';
import CoursesListing from "../Web_components/CoursesListing";


export default function Courses() {

  return (
    <>
    <Nav/>
    <h1 className="text-3xl font-bold mb-8 text-center mt:10 md:mt-15"></h1>
    <CoursesListing/>
    <div className="m-10"></div>
    <Footer/>
    </>
  );
};
