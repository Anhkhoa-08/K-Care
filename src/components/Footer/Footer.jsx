import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiChevronRight,
  FiShield,
  FiAward,
  FiHeadphones,
  FiHome,
  FiTool,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTools,
  FaSnowflake,
  FaTv,
} from "react-icons/fa";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
import { MdKitchen, MdLocalLaundryService } from "react-icons/md";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Bảo trì máy lạnh định kỳ",
    "Vệ sinh tủ lạnh",
    "Sửa chữa máy giặt",
    "Bảo dưỡng TV",
    "Vệ sinh máy nước nóng",
    "Bảo trì lò vi sóng",
    "Sửa chữa quạt điện",
    "Vệ sinh máy lọc nước",
  ];

  const policies = [
    "Chính sách bảo hành",
    "Quy trình làm việc",
    "Chính sách giá",
    "Điều khoản sử dụng",
    "Cam kết dịch vụ",
  ];

  const quickLinks = [
    "Về chúng tôi",
    "Bảng giá dịch vụ",
    "Khuyến mãi",
    "Tuyển dụng kỹ thuật viên",
    "Đăng ký làm kỹ thuật viên",
    "Liên hệ",
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                Đăng ký nhận ưu đãi bảo trì định kỳ
              </h3>
              <p className="text-blue-100">
                Giảm ngay 15% cho gói bảo trì thiết bị gia đình trọn năm
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="px-5 py-3 rounded-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 whitespace-nowrap group">
                  Đăng ký
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <FiHome className="text-white text-2xl" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <FiTool className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    <span className="text-gray-800">K</span>
                    <span className="text-blue-600">Care</span>
                  </h3>
                  <p className="text-xs text-gray-500">
                    Chăm sóc thiết bị tại nhà bạn
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Dịch vụ bảo trì, vệ sinh và sửa chữa thiết bị điện gia đình tại
              nhà chuyên nghiệp. Đội ngũ kỹ thuật viên giàu kinh nghiệm, tận tâm
              phục vụ 24/7.
            </p>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiShield className="text-green-600 flex-shrink-0" />
                <span>Bảo hành chất lượng dịch vụ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiAward className="text-yellow-600 flex-shrink-0" />
                <span>Kỹ thuật viên chứng chỉ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiHome className="text-blue-600 flex-shrink-0" />
                <span>Phục vụ tận nhà 24/7</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">
                Kết nối với chúng tôi
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors group">
                  <FaFacebookF className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity group">
                  <FaInstagram className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors group">
                  <FaYoutube className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors group">
                  <FaTiktok className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                  <SiZalo className="text-lg group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Dịch vụ của chúng tôi
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                    <FiChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm gap-1 group">
              Xem tất cả dịch vụ
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links & Policies */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={
                      link === "Đăng ký làm kỹ thuật viên"
                        ? "/register-technician"
                        : "#"
                    }
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                    <FiChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Thiết bị phục vụ
              </h4>
              <div className="flex gap-3">
                <div
                  className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group hover:bg-blue-100 transition-colors cursor-pointer"
                  title="Máy lạnh">
                  <FaSnowflake className="text-blue-600 text-xl" />
                </div>
                <div
                  className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group hover:bg-blue-100 transition-colors cursor-pointer"
                  title="Tủ lạnh">
                  <MdKitchen className="text-blue-600 text-xl" />
                </div>
                <div
                  className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group hover:bg-blue-100 transition-colors cursor-pointer"
                  title="Máy giặt">
                  <MdLocalLaundryService className="text-blue-600 text-xl" />
                </div>
                <div
                  className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group hover:bg-blue-100 transition-colors cursor-pointer"
                  title="TV">
                  <FaTv className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Thông tin liên hệ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Khu vực phục vụ:</p>
                  <p className="text-gray-600 text-sm">
                    TP.HCM và các tỉnh lân cận
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Hotline đặt lịch:</p>
                  <a
                    href="tel:1900xxxx"
                    className="text-blue-600 font-bold text-lg hover:text-blue-700">
                    1900 xxxx
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Email:</p>
                  <a
                    href="mailto:support@kcare.vn"
                    className="text-gray-600 text-sm hover:text-blue-600">
                    support@kcare.vn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">
                    Thời gian phục vụ:
                  </p>
                  <p className="text-gray-600 text-sm">
                    24/7 (Kể cả ngày lễ, Tết)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiHeadphones className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Hỗ trợ khẩn cấp:</p>
                  <p className="text-gray-600 text-sm">
                    Phản hồi trong 30 phút
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm font-medium text-red-800 mb-1">
                Sự cố khẩn cấp?
              </p>
              <p className="text-xs text-red-600">
                Gọi ngay: <span className="font-bold">0909 xxx xxx</span>
              </p>
            </div>
          </div>
        </div>

        {/* Policies & Payment */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                Chính sách & Cam kết
              </h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {policies.map((policy, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    {policy}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:text-right">
              <h4 className="font-semibold text-gray-800 mb-4">
                Phương thức thanh toán
              </h4>
              <div className="flex items-center gap-4 md:justify-end">
                <span className="text-sm text-gray-600">Tiền mặt</span>
                <BiLogoVisa className="text-4xl text-gray-400" />
                <BiLogoMastercard className="text-4xl text-gray-400" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                  alt="MoMo"
                  className="h-8 opacity-60"
                />
                <img
                  src="https://vnpay.vn/assets/images/logo-icon/logo-primary.svg"
                  alt="VNPay"
                  className="h-6 opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {currentYear} KCare. Tất cả quyền được bảo lưu.</p>
            <p className="text-gray-400">
              Dịch vụ chăm sóc thiết bị điện gia đình tại nhà uy tín nhất
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center group hover:shadow-xl">
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
