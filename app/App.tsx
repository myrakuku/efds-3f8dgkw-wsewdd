import { Routes, Route } from 'react-router-dom';
import Courses from './routes/Courses'; 
import Course from './routes/CoursePage'; 
import UserInformation from './routes/UserInformation'; 
import Cart from './routes/Cart'; 
import PaymentPage from './routes/PaymentPage'; 
import OrderConfirmation from './routes/OrderConfirmation'; 
import OurTeam from "./routes/OurTeam";
import About from './routes/About'; 
import ContactUs from "./routes/ContactUs";
import AdminLogin from './routes/Login';
import Registration from './routes/Registration';


export default function App() {

    return (
    <>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course" element={<Course />} />
        <Route path="/userinformation" element={<UserInformation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
    )
}