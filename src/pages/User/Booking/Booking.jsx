import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiUser,
  FiMail,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiHome,
  FiTool,
  FiDollarSign,
  FiInfo,
  FiShield,
} from "react-icons/fi";
import { FaSnowflake, FaTv, FaFan, FaFireAlt, FaTools } from "react-icons/fa";
import {
  MdKitchen,
  MdLocalLaundryService,
  MdMicrowave,
  MdWaterDrop,
  MdPayment,
  MdVerified,
} from "react-icons/md";
import { BiTime } from "react-icons/bi";

function Booking() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    district: "",
    notes: "",
    paymentMethod: "cash",
  });

  const services = [
    {
      id: 1,
      name: "Sửa máy lạnh",
      icon: <FaSnowflake className="text-3xl" />,
      price: "Từ 150.000đ",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Sửa tủ lạnh",
      icon: <MdKitchen className="text-3xl" />,
      price: "Từ 200.000đ",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      id: 3,
      name: "Sửa máy giặt",
      icon: <MdLocalLaundryService className="text-3xl" />,
      price: "Từ 180.000đ",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 4,
      name: "Sửa tivi",
      icon: <FaTv className="text-3xl" />,
      price: "Từ 150.000đ",
      color: "from-orange-400 to-orange-600",
    },
    {
      id: 5,
      name: "Sửa máy nước nóng",
      icon: <FaFireAlt className="text-3xl" />,
      price: "Từ 200.000đ",
      color: "from-red-400 to-red-600",
    },
    {
      id: 6,
      name: "Sửa lò vi sóng",
      icon: <MdMicrowave className="text-3xl" />,
      price: "Từ 150.000đ",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 7,
      name: "Sửa quạt điện",
      icon: <FaFan className="text-3xl" />,
      price: "Từ 100.000đ",
      color: "from-green-400 to-green-600",
    },
    {
      id: 8,
      name: "Bảo trì định kỳ",
      icon: <FaTools className="text-3xl" />,
      price: "Từ 99.000đ",
      color: "from-gray-500 to-gray-700",
    },
  ];

  const timeSlots = [
    "07:00 - 09:00",
    "09:00 - 11:00",
    "11:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00",
    "19:00 - 21:00",
  ];

  const districts = [
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 9",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Bình Thạnh",
    "Thủ Đức",
    "Gò Vấp",
    "Phú Nhuận",
    "Tân Bình",
    "Tân Phú",
    "Bình Tân",
    "Nhà Bè",
    "Hóc Môn",
    "Củ Chi",
    "Cần Giờ",
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking data:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });
    setCurrentStep(4);
  };

  const steps = [
    { id: 1, name: "Chọn dịch vụ", icon: <FiTool /> },
    { id: 2, name: "Chọn thời gian", icon: <FiCalendar /> },
    { id: 3, name: "Thông tin khách hàng", icon: <FiUser /> },
    { id: 4, name: "Hoàn tất", icon: <FiCheckCircle /> },
  ];

  // Generate next 7 days
  const generateDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Đặt lịch <span className="text-blue-600">dịch vụ</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chỉ 3 bước đơn giản để đặt lịch bảo trì, sửa chữa thiết bị tại nhà
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index < steps.length - 1 ? "flex-1" : ""
                }`}>
                <div
                  className={`flex items-center gap-3 ${
                    currentStep >= step.id ? "text-blue-600" : "text-gray-400"
                  }`}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    }`}>
                    {currentStep > step.id ? (
                      <FiCheckCircle className="text-xl" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="hidden md:block font-medium">
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      currentStep > step.id ? "bg-blue-600" : "bg-gray-300"
                    }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50 min-h-[600px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Select Service */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Chọn dịch vụ bạn cần
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                      selectedService?.id === service.id
                        ? "ring-2 ring-blue-600"
                        : ""
                    }`}
                    onClick={() => handleServiceSelect(service)}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}>
                    <div className="p-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {service.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Chọn ngày và giờ phù hợp
                </h2>

                {/* Selected Service Summary */}
                <div className="bg-blue-50 rounded-lg p-4 mb-8 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${selectedService.color} rounded-lg flex items-center justify-center text-white`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {selectedService.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedService.price}
                    </p>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FiCalendar className="text-blue-600" />
                    Chọn ngày
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                    {availableDates.map((date, index) => {
                      const dateStr = date.toISOString().split("T")[0];
                      const isToday = index === 0;
                      return (
                        <button
                          key={dateStr}
                          onClick={() => setSelectedDate(dateStr)}
                          className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                            selectedDate === dateStr
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}>
                          <p className="text-xs text-gray-500">
                            {isToday
                              ? "Hôm nay"
                              : date.toLocaleDateString("vi-VN", {
                                  weekday: "short",
                                })}
                          </p>
                          <p className="font-semibold">{date.getDate()}</p>
                          <p className="text-xs text-gray-500">
                            Th{date.getMonth() + 1}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FiClock className="text-blue-600" />
                    Chọn giờ
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedTime === time
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <p className="font-medium">{time}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <FiArrowLeft />
                    Quay lại
                  </button>
                  <button
                    onClick={handleDateTimeSelect}
                    disabled={!selectedDate || !selectedTime}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      selectedDate && selectedTime
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}>
                    Tiếp tục
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Customer Information */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Thông tin khách hàng
                </h2>

                {/* Service & Time Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${selectedService.color} rounded-lg flex items-center justify-center text-white`}>
                        {selectedService.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {selectedService.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedService.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FiCalendar />
                      {new Date(selectedDate).toLocaleDateString("vi-VN")}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock />
                      {selectedTime}
                    </span>
                  </div>
                </div>

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
                        onChange={handleFormChange}
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
                        onChange={handleFormChange}
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
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Địa chỉ *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Số nhà, tên đường"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quận/Huyện *
                      </label>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        <option value="">Chọn quận/huyện</option>
                        {districts.map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ghi chú thêm
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Mô tả chi tiết về vấn đề bạn gặp phải..."></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phương thức thanh toán
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === "cash"}
                          onChange={handleFormChange}
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-400">
                          <div className="flex items-center gap-3">
                            <FiDollarSign className="text-xl" />
                            <span className="font-medium">Tiền mặt</span>
                          </div>
                        </div>
                      </label>
                      <label className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="transfer"
                          checked={formData.paymentMethod === "transfer"}
                          onChange={handleFormChange}
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-400">
                          <div className="flex items-center gap-3">
                            <MdPayment className="text-xl" />
                            <span className="font-medium">Chuyển khoản</span>
                          </div>
                        </div>
                      </label>
                      <label className="relative">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="ewallet"
                          checked={formData.paymentMethod === "ewallet"}
                          onChange={handleFormChange}
                          className="peer sr-only"
                        />
                        <div className="p-4 border-2 rounded-lg cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-50 hover:border-gray-400">
                          <div className="flex items-center gap-3">
                            <FiPhone className="text-xl" />
                            <span className="font-medium">Ví điện tử</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <FiArrowLeft />
                      Quay lại
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                      Xác nhận đặt lịch
                      <FiArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle className="text-4xl text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Đặt lịch thành công!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Cảm ơn bạn đã tin tưởng KCare. Chúng tôi sẽ liên hệ với bạn
                  trong thời gian sớm nhất.
                </p>

                {/* Booking Summary */}
                <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Chi tiết đặt lịch
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dịch vụ:</span>
                      <span className="font-medium">
                        {selectedService.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thời gian:</span>
                      <span className="font-medium">
                        {new Date(selectedDate).toLocaleDateString("vi-VN")} -{" "}
                        {selectedTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Khách hàng:</span>
                      <span className="font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Số điện thoại:</span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Địa chỉ:</span>
                      <span className="font-medium">
                        {formData.address}, {formData.district}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
                    <FiInfo className="text-blue-600" />
                    Các bước tiếp theo
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        1
                      </div>
                      <p className="text-gray-700">
                        Nhân viên KCare sẽ gọi xác nhận lịch hẹn trong vòng 30
                        phút
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        2
                      </div>
                      <p className="text-gray-700">
                        Kỹ thuật viên sẽ đến đúng giờ hẹn với đầy đủ dụng cụ
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        3
                      </div>
                      <p className="text-gray-700">
                        Kiểm tra và báo giá trước khi thực hiện dịch vụ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Về trang chủ
                  </a>
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setSelectedService(null);
                      setSelectedDate("");
                      setSelectedTime("");
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        address: "",
                        district: "",
                        notes: "",
                        paymentMethod: "cash",
                      });
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Đặt lịch dịch vụ khác
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BiTime className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Phản hồi nhanh
              </h3>
              <p className="text-sm text-gray-600">
                Xác nhận lịch hẹn trong 30 phút
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdVerified className="text-2xl text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                KTV chuyên nghiệp
              </h3>
              <p className="text-sm text-gray-600">
                Đội ngũ có chứng chỉ và kinh nghiệm
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="text-2xl text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Giá minh bạch
              </h3>
              <p className="text-sm text-gray-600">
                Báo giá trước, không phát sinh
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-2xl text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Bảo hành dịch vụ
              </h3>
              <p className="text-sm text-gray-600">
                Cam kết bảo hành lên đến 12 tháng
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Booking;
