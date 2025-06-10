import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home/Home";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import RegisterTechnician from "./pages/Account/RegisterTechnician/RegisterTechnician";
import About from "./pages/User/About/About";
import Contact from "./pages/User/Contact/Contact";
import Service from "./pages/User/ServicePage/Service";
import Booking from "./pages/User/Booking/Booking";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Technicians from "./pages/Admin/Technicians/Technicians";
import AdminRoute from "./route/AdminRoute";
import TechRoute from "./route/TechRoute";
import UserRoute from "./route/UserRoute";
import Services from "./pages/Admin/Services/Services";
import RepairOrders from "./pages/Admin/RepairOrders/RepairOrders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-technician" element={<RegisterTechnician />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route exact path="/" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/technicians" element={<Technicians />} />
          <Route path="/admin/services" element={<Services />} />
          <Route path="/admin/orders" element={<RepairOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
