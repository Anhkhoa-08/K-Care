import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiMenu,
  FiX,
  FiTool,
  FiFileText,
  FiChevronRight,
  FiChevronsLeft,
} from "react-icons/fi";

const menuItems = [
  {
    path: "/admin/dashboard",
    icon: <FiHome className="w-5 h-5" />,
    title: "Tổng quan",
  },
  {
    path: "/admin/technicians",
    icon: <FiUsers className="w-5 h-5" />,
    title: "Kỹ thuật viên",
  },
  {
    path: "/admin/services",
    icon: <FiTool className="w-5 h-5" />,
    title: "Dịch vụ sửa chữa",
  },
  {
    path: "/admin/orders",
    icon: <FiFileText className="w-5 h-5" />,
    title: "Đơn sửa chữa",
  },
  {
    path: "/admin/finance",
    icon: <FiDollarSign className="w-5 h-5" />,
    title: "Quản lý tài chính",
  },
  {
    path: "/admin/settings",
    icon: <FiSettings className="w-5 h-5" />,
    title: "Cài đặt",
  },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved ? JSON.parse(saved) : false;
  });
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg hover:bg-gray-50 transition-colors"
        onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FiX className="w-6 h-6 text-gray-700" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Desktop Collapse Button */}
      <button
        className="hidden lg:flex fixed z-50 p-2 rounded-lg bg-white shadow-lg hover:bg-gray-50 transition-colors items-center justify-center"
        onClick={toggleCollapse}
        style={{
          left: isCollapsed ? "3.5rem" : "14rem",
          top: "1.5rem",
          transition: "left 0.3s ease-in-out",
        }}>
        <FiChevronsLeft
          className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:relative lg:translate-x-0 ${
              isCollapsed ? "lg:w-16" : "lg:w-60"
            }`}>
          {/* Logo Section */}
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiTool className="w-5 h-5 text-white" />
              </div>
              <div
                className={`transition-opacity duration-300 ${
                  isCollapsed ? "opacity-0 hidden lg:hidden" : "opacity-100"
                }`}>
                <h1 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
                  K-Care Admin
                </h1>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  Quản lý dịch vụ sửa chữa
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-2 space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-2 px-2 py-2 rounded-lg transition-all duration-200 group ${
                  location.pathname === item.path
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}>
                <div className="flex-shrink-0">{item.icon}</div>
                <span
                  className={`transition-opacity duration-300 ${
                    isCollapsed ? "opacity-0 hidden lg:hidden" : "opacity-100"
                  }`}>
                  {item.title}
                </span>
                {isCollapsed && (
                  <div
                    className={`absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50`}>
                    {item.title}
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-100 bg-gray-50">
            <div
              className={`flex items-center ${
                isCollapsed ? "lg:justify-center" : "gap-2"
              } p-2`}>
              <div className="relative flex-shrink-0">
                <img
                  src="https://via.placeholder.com/32"
                  alt="User"
                  className="w-8 h-8 rounded-lg object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div
                className={`flex-1 min-w-0 transition-opacity duration-300 ${
                  isCollapsed ? "lg:hidden opacity-0" : "opacity-100"
                }`}>
                <p className="text-sm font-medium text-gray-900 truncate">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  admin@kcare.com
                </p>
              </div>
              <button
                className={`p-1.5 hover:bg-gray-200 rounded-lg transition-colors ${
                  isCollapsed ? "lg:hidden" : ""
                }`}>
                <FiSettings className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Wrapper */}
        <div className="flex-1 lg:pl-0">
          {/* Your page content goes here */}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
