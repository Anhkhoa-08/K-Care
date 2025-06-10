import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiUser,
  FiPhoneCall,
  FiCheckCircle,
} from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdSupportAgent, MdQuestionAnswer } from "react-icons/md";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Hotline 24/7",
      content: "1900 xxxx",
      subContent: "Hỗ trợ khẩn cấp: 0909 xxx xxx",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "contact@kcare.vn",
      subContent: "support@kcare.vn",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Địa chỉ",
      content: "123 Nguyễn Văn A, Q.1",
      subContent: "TP. Hồ Chí Minh",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Giờ làm việc",
      content: "8:00 - 20:00",
      subContent: "Thứ 2 - Chủ nhật",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const services = [
    "Sửa máy lạnh",
    "Sửa máy giặt",
    "Sửa tủ lạnh",
    "Sửa TV",
    "Sửa lò vi sóng",
    "Sửa máy nước nóng",
    "Bảo trì định kỳ",
    "Khác",
  ];

  const faqs = [
    {
      question: "KCare phục vụ ở những khu vực nào?",
      answer:
        "Chúng tôi hiện phục vụ tại TP.HCM và các tỉnh lân cận như Bình Dương, Đồng Nai, Long An. Đang mở rộng thêm các khu vực khác.",
    },
    {
      question: "Thời gian đến sửa chữa là bao lâu?",
      answer:
        "Thông thường kỹ thuật viên sẽ có mặt trong vòng 30-60 phút sau khi đặt lịch. Với các trường hợp khẩn cấp, chúng tôi ưu tiên xử lý nhanh nhất có thể.",
    },
    {
      question: "Chi phí dịch vụ được tính như thế nào?",
      answer:
        "Chi phí bao gồm phí kiểm tra (miễn phí nếu sửa) và phí sửa chữa/linh kiện (nếu có). Giá được báo trước và chỉ thực hiện khi khách hàng đồng ý.",
    },
    {
      question: "Chính sách bảo hành như thế nào?",
      answer:
        "Chúng tôi bảo hành từ 3-12 tháng tùy theo dịch vụ. Linh kiện chính hãng được bảo hành theo quy định của nhà sản xuất.",
    },
    {
      question: "Làm sao để trở thành kỹ thuật viên KCare?",
      answer:
        "Bạn có thể đăng ký qua trang 'Đăng ký kỹ thuật viên' hoặc liên hệ hotline. Yêu cầu: có chuyên môn, kinh nghiệm và các giấy tờ liên quan.",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: <div className="font-bold text-xl">Z</div>,
      name: "Zalo",
      url: "#",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-600",
    },
    {
      icon: <FaTiktok />,
      name: "TikTok",
      url: "#",
      color: "hover:text-gray-800",
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Liên hệ với <span className="text-blue-600">KCare</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-semibold">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gửi tin nhắn cho chúng tôi
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="0909 xxx xxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dịch vụ cần tư vấn
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">Chọn dịch vụ</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..."></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      submitted
                        ? "bg-green-600 text-white"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105"
                    }`}>
                    {submitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <FiCheckCircle />
                        Đã gửi thành công!
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FiSend />
                        Gửi tin nhắn
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Quick Contact */}
            <div data-aos="fade-left">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4246845543473!2d106.68743131428698!3d10.778834262095697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b85160f87%3A0x4b8e2f0e2c9f7e9d!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2svn!4v1645000000000!5m2!1sen!2svn"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full"></iframe>
              </div>

              {/* Quick Support */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <MdSupportAgent className="text-3xl" />
                  Hỗ trợ nhanh
                </h3>
                <p className="mb-4">
                  Cần hỗ trợ gấp? Liên hệ ngay với chúng tôi qua:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:1900xxxx"
                    className="flex items-center gap-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                    <FiPhoneCall />
                    <span>Gọi hotline: 1900 xxxx</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/20 rounded-lg p-3 hover:bg-white/30 transition-colors">
                    <FiMessageCircle />
                    <span>Chat Zalo với chúng tôi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kết nối với chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Theo dõi KCare trên các mạng xã hội để cập nhật tin tức mới nhất
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-6"
            data-aos="zoom-in">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl text-gray-600 hover:bg-gray-200 ${social.color} transition-all duration-300 transform hover:scale-110`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <MdQuestionAnswer className="text-blue-600" />
              Câu hỏi thường gặp
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
