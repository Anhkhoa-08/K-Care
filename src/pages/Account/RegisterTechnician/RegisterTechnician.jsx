import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiHome,
  FiTool,
  FiUser,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiUpload,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";
import {
  FaTools,
  FaCreditCard,
  FaPercentage,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
function RegisterTechnician() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    idNumber: "",
    address: "",
    district: "",
    experience: "",
    bankName: "",
    bankAccount: "",
    bankOwner: "",
  });

  const serviceOptions = [
    { id: 1, name: "Máy lạnh", icon: "❄️" },
    { id: 2, name: "Tủ lạnh", icon: "🧊" },
    { id: 3, name: "Máy giặt", icon: "🌊" },
    { id: 4, name: "TV", icon: "📺" },
    { id: 5, name: "Máy nước nóng", icon: "🔥" },
    { id: 6, name: "Lò vi sóng", icon: "📡" },
    { id: 7, name: "Quạt điện", icon: "💨" },
    { id: 8, name: "Máy lọc nước", icon: "💧" },
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
    "Củ Chi",
    "Hóc Môn",
    "Bình Chánh",
    "Nhà Bè",
    "Cần Giờ",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    if (selectedServices.length === 0) {
      alert("Vui lòng chọn ít nhất một dịch vụ!");
      return;
    }
    console.log("Register technician with:", {
      ...formData,
      services: selectedServices,
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FiHome className="text-white text-3xl" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <FiTool className="text-white text-sm" />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold">
                  <span className="text-gray-800">K</span>
                  <span className="text-blue-600">Care</span>
                </h1>
                <p className="text-sm text-gray-500">
                  Chăm sóc thiết bị tại nhà
                </p>
              </div>
            </Link>
          </div>

          {/* Register Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4">
                <MdOutlineEngineering className="text-4xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Đăng ký làm Kỹ thuật viên
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Gia nhập đội ngũ kỹ thuật viên KCare và kiếm thu nhập hấp dẫn
              </p>
            </div>

            {/* Commission Info */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <FaMoneyBillWave className="text-3xl text-green-600" />
                <h3 className="text-lg font-bold text-gray-800">
                  Chính sách hoa hồng hấp dẫn
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">70%</div>
                  <p className="text-sm text-gray-600">Hoa hồng mỗi đơn hàng</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500K+</div>
                  <p className="text-sm text-gray-600">
                    Thu nhập trung bình/ngày
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    Thưởng
                  </div>
                  <p className="text-sm text-gray-600">
                    Theo doanh số hàng tháng
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-blue-800">
                Quyền lợi khi trở thành kỹ thuật viên:
              </p>
              <ul className="space-y-1">
                <li className="flex items-center text-xs text-blue-700">
                  <FiCheckCircle className="mr-2 text-green-600 flex-shrink-0" />
                  Được hỗ trợ kỹ thuật và đào tạo miễn phí
                </li>
                <li className="flex items-center text-xs text-blue-700">
                  <FiCheckCircle className="mr-2 text-green-600 flex-shrink-0" />
                  Nhận đơn hàng tự động theo khu vực hoạt động
                </li>
                <li className="flex items-center text-xs text-blue-700">
                  <FiCheckCircle className="mr-2 text-green-600 flex-shrink-0" />
                  Thanh toán hoa hồng hàng tuần qua tài khoản ngân hàng
                </li>
                <li className="flex items-center text-xs text-blue-700">
                  <FiCheckCircle className="mr-2 text-green-600 flex-shrink-0" />
                  Bảo hiểm tai nạn trong quá trình làm việc
                </li>
              </ul>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FiUser className="text-blue-600" />
                  Thông tin cá nhân
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="Nguyễn Văn A"
                      />
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="0901234567"
                      />
                      <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="example@email.com"
                      />
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="idNumber"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      CMND/CCCD <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="idNumber"
                        name="idNumber"
                        type="text"
                        required
                        value={formData.idNumber}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="001234567890"
                      />
                      <FiAward className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Địa chỉ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="123 Đường ABC, Phường XYZ"
                    />
                    <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FaTools className="text-blue-600" />
                  Thông tin chuyên môn
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="district"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Khu vực hoạt động <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="district"
                      name="district"
                      required
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                      <option value="">Chọn quận/huyện</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Kinh nghiệm <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="experience"
                        name="experience"
                        type="text"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="VD: 3 năm sửa chữa điện lạnh"
                      />
                      <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dịch vụ đăng ký <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {serviceOptions.map((service) => (
                      <label
                        key={service.id}
                        className={`relative flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedServices.includes(service.id)
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                        />
                        <span className="text-2xl mr-2">{service.icon}</span>
                        <span className="text-sm font-medium">
                          {service.name}
                        </span>
                        {selectedServices.includes(service.id) && (
                          <FiCheckCircle className="absolute top-1 right-1 text-blue-600" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload chứng chỉ/bằng cấp (nếu có)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
                      <FiUpload className="text-3xl text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        Click để upload hoặc kéo thả file vào đây
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        PDF, JPG, PNG (Max 5MB)
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Banking Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FaCreditCard className="text-blue-600" />
                  Thông tin ngân hàng (để nhận hoa hồng)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="bankName"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Tên ngân hàng <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="bankName"
                      name="bankName"
                      type="text"
                      required
                      value={formData.bankName}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="VD: Vietcombank"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bankAccount"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Số tài khoản <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="bankAccount"
                      name="bankAccount"
                      type="text"
                      required
                      value={formData.bankAccount}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="1234567890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bankOwner"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Chủ tài khoản <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="bankOwner"
                      name="bankOwner"
                      type="text"
                      required
                      value={formData.bankOwner}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="NGUYEN VAN A"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FiLock className="text-blue-600" />
                  Bảo mật tài khoản
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Mật khẩu <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="••••••••"
                      />
                      <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Xác nhận mật khẩu <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        placeholder="••••••••"
                      />
                      <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start">
                <input
                  id="agree-terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                />
                <label
                  htmlFor="agree-terms"
                  className="ml-2 block text-sm text-gray-700">
                  Tôi đồng ý với{" "}
                  <Link
                    to="/terms-technician"
                    className="text-blue-600 hover:text-blue-700 underline">
                    điều khoản hợp tác
                  </Link>{" "}
                  và{" "}
                  <Link
                    to="/commission-policy"
                    className="text-blue-600 hover:text-blue-700 underline">
                    chính sách hoa hồng
                  </Link>{" "}
                  của KCare
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
                Đăng ký làm Kỹ thuật viên
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Đã có tài khoản kỹ thuật viên?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterTechnician;
