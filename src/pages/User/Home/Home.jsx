import React, { useEffect } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiCheckCircle,
  FiPhone,
  FiClock,
  FiShield,
  FiHome,
  FiTool,
  FiCalendar,
  FiUsers,
  FiStar,
  FiArrowRight,
  FiDollarSign,
  FiMapPin,
  FiAward,
  FiTrendingUp,
  FiPackage,
  FiHeadphones,
} from "react-icons/fi";
import {
  FaSnowflake,
  FaTv,
  FaFan,
  FaFireAlt,
  FaHandshake,
  FaWarehouse,
} from "react-icons/fa";
import {
  MdKitchen,
  MdLocalLaundryService,
  MdMicrowave,
  MdWaterDrop,
  MdVerified,
  MdSpeed,
  MdSecurity,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import BrandPartners from "../../../components/BrandPartners/BrandPartners";

// Import mock data
import { getPopularServices } from "../../../mocks/services";
import { getLatestTestimonials } from "../../../mocks/testimonials";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Get data from mocks
  const services = getPopularServices();
  const testimonials = getLatestTestimonials(3);

  // Icon mapping
  const iconMap = {
    FaSnowflake: <FaSnowflake className="text-4xl" />,
    MdKitchen: <MdKitchen className="text-4xl" />,
    MdLocalLaundryService: <MdLocalLaundryService className="text-4xl" />,
    FaTv: <FaTv className="text-4xl" />,
    FaFireAlt: <FaFireAlt className="text-4xl" />,
    MdMicrowave: <MdMicrowave className="text-4xl" />,
    FaFan: <FaFan className="text-4xl" />,
    MdWaterDrop: <MdWaterDrop className="text-4xl" />,
  };

  const process = [
    {
      step: "01",
      title: "Đặt lịch hẹn",
      description: "Liên hệ hotline hoặc đặt lịch online",
      icon: <FiCalendar />,
    },
    {
      step: "02",
      title: "Kỹ thuật viên đến nhà",
      description: "Đúng giờ hẹn, mang đầy đủ dụng cụ",
      icon: <FiHome />,
    },
    {
      step: "03",
      title: "Kiểm tra & báo giá",
      description: "Kiểm tra miễn phí, báo giá trước khi làm",
      icon: <FiTool />,
    },
    {
      step: "04",
      title: "Thực hiện dịch vụ",
      description: "Tiến hành sửa chữa, bảo trì chuyên nghiệp",
      icon: <FiCheckCircle />,
    },
  ];

  const stats = [
    { number: "50K+", label: "Khách hàng tin tưởng", icon: <FiUsers /> },
    { number: "100+", label: "Kỹ thuật viên", icon: <FaHandshake /> },
    { number: "24/7", label: "Phục vụ khẩn cấp", icon: <FiClock /> },
    { number: "98%", label: "Khách hàng hài lòng", icon: <FiStar /> },
  ];

  const emergencyServices = [
    {
      title: "Sửa chữa khẩn cấp 24/7",
      description: "Hỗ trợ sự cố gấp mọi lúc, mọi nơi",
      icon: <MdSpeed className="text-3xl" />,
      color: "from-red-400 to-red-600",
    },
    {
      title: "Đội ngũ chuyên nghiệp",
      description: "KTV có chứng chỉ, kinh nghiệm lâu năm",
      icon: <MdVerified className="text-3xl" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Cam kết chất lượng",
      description: "Bảo hành dài hạn, hỗ trợ sau dịch vụ",
      icon: <MdSecurity className="text-3xl" />,
      color: "from-green-400 to-green-600",
    },
  ];

  const pricingPlans = [
    {
      name: "Gói Cơ bản",
      price: "Theo dịch vụ",
      features: [
        "Kiểm tra miễn phí",
        "Báo giá trước khi làm",
        "Bảo hành 3 tháng",
        "Thanh toán sau dịch vụ",
      ],
      recommended: false,
    },
    {
      name: "Gói Gia đình",
      price: "2.999.000đ/năm",
      features: [
        "Bảo trì định kỳ 4 lần/năm",
        "Giảm 20% phí sửa chữa",
        "Ưu tiên phục vụ",
        "Bảo hành 6 tháng",
        "Hotline riêng 24/7",
      ],
      recommended: true,
    },
    {
      name: "Gói Doanh nghiệp",
      price: "Liên hệ",
      features: [
        "Bảo trì theo hợp đồng",
        "Giảm 30% phí sửa chữa",
        "Phục vụ ưu tiên cao",
        "Bảo hành 12 tháng",
        "Quản lý riêng",
      ],
      recommended: false,
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 dấu hiệu máy lạnh cần được vệ sinh",
      excerpt:
        "Máy lạnh không mát, có mùi lạ, tiếng ồn bất thường... là những dấu hiệu cảnh báo",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      category: "Máy lạnh",
      date: "15/03/2024",
      readTime: "5 phút",
    },
    {
      id: 2,
      title: "Cách tiết kiệm điện khi dùng tủ lạnh",
      excerpt:
        "Những mẹo đơn giản giúp tủ lạnh hoạt động hiệu quả và tiết kiệm điện năng",
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
      category: "Tủ lạnh",
      date: "12/03/2024",
      readTime: "3 phút",
    },
    {
      id: 3,
      title: "Bảo dưỡng máy giặt đúng cách",
      excerpt: "Hướng dẫn chi tiết cách vệ sinh và bảo dưỡng máy giặt tại nhà",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
      category: "Máy giặt",
      date: "10/03/2024",
      readTime: "4 phút",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <span>🎉</span>
                Ưu đãi giảm 20% cho khách hàng mới
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dịch vụ <span className="text-blue-600">bảo trì</span> thiết bị
                <br />
                điện gia dụng <span className="text-blue-600">tại nhà</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Đội ngũ kỹ thuật viên chuyên nghiệp, tận tâm. Phục vụ 24/7, cam
                kết chất lượng với giá cả hợp lý nhất.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group">
                  Đặt lịch ngay
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:1900xxxx"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2">
                  <FiPhone />
                  1900 xxxx
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-gray-700">Miễn phí kiểm tra</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiShield className="text-green-600 text-xl" />
                  <span className="text-gray-700">Bảo hành dịch vụ</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-green-600 text-xl" />
                  <span className="text-gray-700">Phục vụ toàn TP.HCM</span>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600"
                  alt="Technician at work"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6"
                  data-aos="zoom-in"
                  data-aos-delay="200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiUsers className="text-2xl text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">50K+</p>
                      <p className="text-gray-600">Khách hàng</p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                  data-aos="zoom-in"
                  data-aos-delay="300">
                  <div className="flex items-center gap-2">
                    <FiStar className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-900">4.9/5</span>
                    <span className="text-gray-600">(2K+ đánh giá)</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-blue-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cung cấp đầy đủ dịch vụ bảo trì, vệ sinh, sửa chữa cho mọi thiết
              bị điện gia dụng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div className="p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Từ {service.price.from.toLocaleString("vi-VN")}đ
                    </span>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Xem chi tiết
                      <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div
                  className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Xem tất cả dịch vụ
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tại sao chọn KCare?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FiClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Phản hồi nhanh chóng
                    </h4>
                    <p className="text-gray-600">
                      Tiếp nhận và phản hồi yêu cầu trong vòng 30 phút. Có mặt
                      tại nhà khách hàng đúng giờ hẹn.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FiShield className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Bảo hành dài hạn
                    </h4>
                    <p className="text-gray-600">
                      Cam kết bảo hành dịch vụ lên đến 12 tháng. Hỗ trợ kỹ thuật
                      miễn phí sau bảo trì.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FiUsers className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Đội ngũ chuyên nghiệp
                    </h4>
                    <p className="text-gray-600">
                      Kỹ thuật viên được đào tạo bài bản, có chứng chỉ và kinh
                      nghiệm thực tế cao.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FiStar className="text-yellow-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Giá cả minh bạch
                    </h4>
                    <p className="text-gray-600">
                      Báo giá trước khi thực hiện. Không phát sinh chi phí.
                      Thanh toán linh hoạt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600"
                alt="Professional technician"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="200">
                <p className="text-4xl font-bold">98%</p>
                <p className="text-sm">Khách hàng hài lòng</p>
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="300">
                <div className="flex items-center gap-3">
                  <FiAward className="text-3xl text-orange-500" />
                  <div>
                    <p className="font-bold text-gray-900">Top 1</p>
                    <p className="text-sm text-gray-600">Dịch vụ uy tín 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gói dịch vụ phù hợp với bạn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu của gia đình hoặc doanh
              nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                  plan.recommended
                    ? "ring-2 ring-blue-600 transform scale-105"
                    : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-bold text-blue-600">
                    {plan.price}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.recommended
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}>
                  Chọn gói này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy trình làm việc
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              4 bước đơn giản để được phục vụ tại nhà
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 150}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                  <div className="text-6xl font-bold text-gray-100 mb-4">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <FiArrowRight className="text-3xl text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <BrandPartners />

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div className="absolute top-4 right-4 text-6xl text-gray-200">
                  "
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic relative z-10">
                  {testimonial.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
              Xem thêm đánh giá
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kiến thức hữu ích
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chia sẻ kinh nghiệm và mẹo hay về bảo trì thiết bị gia dụng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} đọc</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Đọc thêm
                    <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Xem tất cả bài viết
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Technician Recruitment Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
                alt="Professional technician"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6"
                data-aos="zoom-in"
                data-aos-delay="200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">70%</p>
                  <p className="text-sm text-gray-600">Hoa hồng mỗi đơn</p>
                </div>
              </div>
              <div
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4"
                data-aos="zoom-in"
                data-aos-delay="300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">15-20tr</p>
                    <p className="text-xs text-gray-600">Thu nhập/tháng</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="text-lg">🔥</span>
                Đang tuyển dụng kỹ thuật viên
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Trở thành <span className="text-orange-600">Kỹ thuật viên</span>{" "}
                KCare
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Gia nhập đội ngũ kỹ thuật viên chuyên nghiệp của KCare. Nhận
                công việc linh hoạt, thu nhập hấp dẫn lên đến 20 triệu/tháng.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiDollarSign className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Hoa hồng cao - 70% mỗi đơn
                    </h4>
                    <p className="text-sm text-gray-600">
                      Nhận ngay 70% giá trị đơn hàng, thanh toán hàng tuần
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Thời gian linh hoạt
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tự do sắp xếp lịch làm việc phù hợp với bạn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiShield className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Bảo hiểm & Hỗ trợ
                    </h4>
                    <p className="text-sm text-gray-600">
                      Được bảo hiểm tai nạn và hỗ trợ kỹ thuật 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiUsers className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Đào tạo chuyên nghiệp
                    </h4>
                    <p className="text-sm text-gray-600">
                      Được đào tạo kỹ năng và cập nhật kiến thức thường xuyên
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  to="/register-technician"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Đăng ký ngay
                </Link>
                <a
                  href="#"
                  className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-all duration-200">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
          data-aos="zoom-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <FiHeadphones className="text-4xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cần hỗ trợ ngay? Chúng tôi luôn sẵn sàng!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Đội ngũ tư vấn viên và kỹ thuật viên KCare phục vụ 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1900xxxx"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
              <FiPhone />
              Gọi ngay: 1900 xxxx
            </a>
            <Link
              to="/booking"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Đặt lịch online
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <BiSupport className="text-xl" />
              <span>Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWarehouse className="text-xl" />
              <span>Linh kiện chính hãng</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPackage className="text-xl" />
              <span>Bảo hành dài hạn</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
