import React, { useState } from "react";
import {
  FiUsers,
  FiSearch,
  FiFilter,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiStar,
  FiMapPin,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiClock,
  FiGrid,
  FiList,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Sidebar from "../../../components/SideBarAdmin/Sidebar";

function Technicians() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState("table"); // 'card' or 'table'
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Mock data cho kỹ thuật viên
  const technicians = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: "https://via.placeholder.com/40",
      specialization: "Điện lạnh",
      phone: "0901234567",
      email: "nguyenvana@gmail.com",
      address: "123 Nguyễn Văn Cừ, Quận 5",
      rating: 4.8,
      completedOrders: 145,
      status: "active",
      workingArea: ["Quận 1", "Quận 3", "Quận 5"],
      currentOrders: 2,
      experience: "5 năm",
    },
    {
      id: 2,
      name: "Trần Văn B",
      avatar: "https://via.placeholder.com/40",
      specialization: "Điện tử",
      phone: "0907654321",
      email: "tranvanb@gmail.com",
      address: "456 Lê Hồng Phong, Quận 10",
      rating: 4.6,
      completedOrders: 98,
      status: "inactive",
      workingArea: ["Quận 10", "Quận 11"],
      currentOrders: 0,
      experience: "3 năm",
    },
    // Thêm nhiều kỹ thuật viên khác...
  ];

  const statusColors = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    busy: "bg-yellow-100 text-yellow-800",
  };

  const handleAddTechnician = () => {
    console.log("Adding new technician");
  };

  const handleEditTechnician = (id) => {
    console.log("Editing technician:", id);
  };

  const handleDeleteTechnician = (id) => {
    console.log("Deleting technician:", id);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentTechnicians = technicians.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(technicians.length / pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const TableView = () => (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kỹ thuật viên
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Liên hệ
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Khu vực
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thống kê
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTechnicians.map((tech) => (
              <tr key={tech.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={tech.avatar}
                      alt={tech.name}
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {tech.specialization}
                      </div>
                      <div className="flex items-center mt-1">
                        <FiStar className="text-yellow-400 w-4 h-4" />
                        <span className="ml-1 text-sm text-gray-600">
                          {tech.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{tech.phone}</div>
                  <div className="text-sm text-gray-500">{tech.email}</div>
                  <div className="text-sm text-gray-500">{tech.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusColors[tech.status]
                    }`}>
                    {tech.status === "active"
                      ? "Đang hoạt động"
                      : tech.status === "inactive"
                      ? "Không hoạt động"
                      : "Đang bận"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {tech.workingArea.map((area, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        {area}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <div className="flex items-center">
                      <FiCheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span>{tech.completedOrders} đơn hoàn thành</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <FiClock className="w-4 h-4 text-blue-500 mr-1" />
                      <span>{tech.currentOrders} đơn hiện tại</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button
                    onClick={() => handleEditTechnician(tech.id)}
                    className="text-blue-600 hover:text-blue-900 mr-3">
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteTechnician(tech.id)}
                    className="text-red-600 hover:text-red-900">
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Hiển thị{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="mx-1 border rounded-md px-2 py-1">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>{" "}
            trên tổng số {technicians.length} kỹ thuật viên
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}>
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}>
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}>
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const CardView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {technicians.map((tech) => (
        <div key={tech.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <img
                src={tech.avatar}
                alt={tech.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.specialization}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditTechnician(tech.id)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <FiEdit2 />
              </button>
              <button
                onClick={() => handleDeleteTechnician(tech.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <FiTrash2 />
              </button>
            </div>
          </div>

          {/* Status and Rating */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                statusColors[tech.status]
              }`}>
              {tech.status === "active"
                ? "Đang hoạt động"
                : tech.status === "inactive"
                ? "Không hoạt động"
                : "Đang bận"}
            </span>
            <div className="flex items-center">
              <FiStar className="text-yellow-400 w-5 h-5" />
              <span className="ml-1 font-medium">{tech.rating}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <FiPhone className="w-4 h-4 mr-2" />
              <span className="text-sm">{tech.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FiMail className="w-4 h-4 mr-2" />
              <span className="text-sm">{tech.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FiMapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{tech.address}</span>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center text-blue-600">
                <FiCheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Đã hoàn thành</span>
              </div>
              <p className="text-xl font-semibold mt-1">
                {tech.completedOrders}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3">
              <div className="flex items-center text-green-600">
                <FiClock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Đơn hiện tại</span>
              </div>
              <p className="text-xl font-semibold mt-1">{tech.currentOrders}</p>
            </div>
          </div>

          {/* Working Areas and Experience */}
          <div className="border-t pt-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {tech.workingArea.map((area, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Kinh nghiệm: {tech.experience}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="px-4 py-3">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Quản lý Kỹ thuật viên
            </h1>
            <button
              onClick={handleAddTechnician}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
              <FiPlus className="mr-2" />
              Thêm Kỹ thuật viên
            </button>
          </div>

          {/* Search, Filter, and View Toggle Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm kỹ thuật viên..."
                className="ml-2 w-full outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter by Status */}
            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
              <FiFilter className="text-gray-400" />
              <select
                className="ml-2 w-full outline-none bg-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="all">Tất cả trạng thái</option>
                <option value="active">Đang hoạt động</option>
                <option value="inactive">Không hoạt động</option>
                <option value="busy">Đang bận</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <button
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "card"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-400 hover:text-blue-600"
                }`}
                onClick={() => setViewMode("card")}>
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "table"
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-400 hover:text-blue-600"
                }`}
                onClick={() => setViewMode("table")}>
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          {viewMode === "card" ? <CardView /> : <TableView />}
        </div>
      </div>
    </div>
  );
}

export default Technicians;
