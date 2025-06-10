import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiPhone,
  FiMapPin,
  FiClock,
  FiHome,
  FiTool,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { FaTools, FaUserCircle } from "react-icons/fa";
import BookingModal from "../BookingModal/BookingModal";
import { Dropdown, Space, Avatar, Button } from "antd";
import { jwtDecode } from "jwt-decode";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded = jwtDecode(token);
      setUserInfo(decoded);
    }
  }, []);

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Đặt lịch", href: "/booking", highlight: true },
    { name: "Giới thiệu", href: "/about" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          to={
            userInfo?.role === "admin"
              ? "/admin/profile"
              : userInfo?.role === "technician"
              ? "/technician/profile"
              : "/profile"
          }
          className="flex items-center gap-2 px-4 py-2">
          <FiUser className="text-gray-600" />
          <span>Thông tin cá nhân</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to={
            userInfo?.role === "admin"
              ? "/admin/settings"
              : userInfo?.role === "technician"
              ? "/technician/settings"
              : "/settings"
          }
          className="flex items-center gap-2 px-4 py-2">
          <FiSettings className="text-gray-600" />
          <span>Cài đặt</span>
        </Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-600 hover:text-red-700">
          <FiLogOut />
          <span>Đăng xuất</span>
        </button>
      ),
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <FiPhone className="mr-2" />
                Hotline: 1900 xxxx
              </span>
              <span className="flex items-center">
                <FiMapPin className="mr-2" />
                123 Nguyễn Văn A, Q.1, TP.HCM
              </span>
              <span className="flex items-center">
                <FiClock className="mr-2" />
                8:00 - 20:00 (T2 - CN)
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                Tin tức
              </a>
              <span className="text-blue-300">|</span>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Khuyến mãi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-md shadow-md"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <FiHome className="text-white text-2xl" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <FiTool className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    <span className="text-gray-800">K</span>
                    <span className="text-blue-600">Care</span>
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">
                    Chăm sóc thiết bị tại nhà bạn
                  </p>
                </div>
              </div>
            </Link>

            {/* Navigation Menu - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                      ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }
                      ${
                        item.highlight
                          ? "bg-blue-50 hover:bg-blue-100"
                          : "hover:bg-gray-50"
                      }
                      group
                    `}>
                    {item.name}
                    {item.highlight && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-3/4 ${
                        isActive ? "w-3/4" : ""
                      }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                  <FiSearch className="w-5 h-5" />
                </button>

                {/* Search Dropdown */}
                <div
                  className={`absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 transform origin-top-right ${
                    isSearchOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}>
                  <div className="p-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Tìm kiếm dịch vụ, thiết bị..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Tìm kiếm phổ biến
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["iPhone", "Samsung", "Laptop", "Máy tính bảng"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 hover:bg-blue-50 text-xs rounded-full cursor-pointer transition-colors">
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Actions - Desktop */}
              <div className="hidden lg:flex items-center space-x-2">
                {userInfo ? (
                  <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                    placement="bottomRight">
                    <Space className="cursor-pointer">
                      <Avatar
                        size={40}
                        src={userInfo.avatar}
                        className="border-2 border-blue-100"
                      />
                    </Space>
                  </Dropdown>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200">
                    <FaUserCircle className="mr-2 text-lg" />
                    Đăng nhập
                  </Link>
                )}
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                  Đặt lịch ngay
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}></div>

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="p-6">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100">
              <FiX className="w-6 h-6" />
            </button>

            {/* Mobile Navigation */}
            <nav className="mt-8 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      block px-4 py-3 rounded-lg font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }
                      ${item.highlight ? "relative" : ""}
                    `}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                    {item.highlight && (
                      <span className="absolute top-3 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 space-y-3">
              {userInfo ? (
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottomRight">
                  <Space className="cursor-pointer">
                    <Avatar
                      size={40}
                      src={userInfo.avatar}
                      className="border-2 border-blue-100"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {userInfo.fullName}
                    </span>
                  </Space>
                </Dropdown>
              ) : (
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center px-4 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <FaUserCircle className="mr-2 text-lg" />
                  Đăng nhập
                </Link>
              )}
              <Link
                to="/register"
                className="w-full px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium flex items-center justify-center">
                Đăng ký tài khoản
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-3 text-sm text-gray-600">
              <p className="flex items-center">
                <FiPhone className="mr-2" />
                Hotline: 1900 xxxx
              </p>
              <p className="flex items-center">
                <FiClock className="mr-2" />
                8:00 - 20:00 (T2 - CN)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}

export default Header;
