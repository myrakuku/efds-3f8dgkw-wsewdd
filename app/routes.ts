import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Course
    index("routes/Courses.tsx"),
    route("/course", "routes/CoursePage.tsx"),
    route("/userinformation", "routes/UserInformation.tsx"),

    // Shop
    route("/cart", "routes/Cart.tsx"),
    route("/paymentpage", "routes/PaymentPage.tsx"),
    route("/orderconfirmation", "routes/OrderConfirmation.tsx"),
    

    // Web Page
    route("/ourteam", "routes/OurTeam.tsx"),
    route("/about", "routes/About.tsx"),
    route("/contactus", "routes/ContactUs.tsx"),

    // User login
    route("/login", "routes/Login.tsx"),
    route("/registration", "routes/registration.tsx"),
] satisfies RouteConfig;