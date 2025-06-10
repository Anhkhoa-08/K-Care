import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiHome,
  FiTool,
} from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { jwtDecode } from "jwt-decode";
// import { axiosCli } from "../../../interceptors/axios";
// import { jwtDecode } from "jwt-decode";
import { accounts } from "../../../mocks/account";
import { message } from "antd";

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const account = accounts.find(
        (account) =>
          account.email === data.email && account.password === data.password
      );
      if (account) {
        localStorage.setItem("accessToken", account.token);
        let userInfo = jwtDecode(localStorage.getItem("accessToken"));

        messageApi.open({
          type: "success",
          content: "Đăng nhập thành công!",
          duration: 2,
        });

        // Đợi message hiển thị xong mới chuyển trang
        setTimeout(() => {
          if (userInfo.role === "admin") {
            window.location.href = "/admin/dashboard";
          } else if (userInfo.role === "technician") {
            window.location.href = "/technician/dashboard";
          } else if (userInfo.role === "user") {
            window.location.href = "/";
          }
        }, 1000);
      } else {
        messageApi.open({
          type: "error",
          content: "Email hoặc mật khẩu không chính xác!",
          duration: 3,
        });
      }
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "Có lỗi xảy ra, vui lòng thử lại sau!",
        duration: 3,
      });
    }
  };

  // const handleSocialLogin = (provider) => {
  //   messageApi.open({
  //     type: "info",
  //     content: `Tính năng đăng nhập bằng ${provider} đang được phát triển!`,
  //     duration: 3,
  //   });
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {contextHolder}
      <div className="max-w-md w-full">
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
                Chăm sóc thiết bị tại nhà {alert}
              </p>
            </div>
          </Link>
        </div>

        {/* Login Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Đăng nhập</h2>
            <p className="mt-2 text-sm text-gray-600">
              Chào mừng bạn trở lại với KCare
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialLogin("google")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
              <FaGoogle className="text-xl text-red-500" />
              <span className="text-gray-700 font-medium">
                Đăng nhập với Google
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("facebook")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
              <FaFacebook className="text-xl text-blue-600" />
              <span className="text-gray-700 font-medium">
                Đăng nhập với Facebook
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("zalo")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
              <SiZalo className="text-xl text-blue-500" />
              <span className="text-gray-700 font-medium">
                Đăng nhập với Zalo
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Hoặc</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
                {...register("email")}>
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  }`}
                  placeholder="example@email.com"
                  {...register("email", {
                    required: "Email là bắt buộc",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email không hợp lệ",
                    },
                  })}
                />
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
                {...register("password")}>
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  }`}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Mật khẩu là bắt buộc",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 ký tự",
                    },
                  })}
                />
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
              Đăng nhập
            </button>
          </form>

          {/* Register Link */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Chưa có tài khoản?{" "}
              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:text-blue-700">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-gray-700">
              Điều khoản sử dụng
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-700">
              Chính sách bảo mật
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/help" className="text-gray-500 hover:text-gray-700">
              Trợ giúp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
