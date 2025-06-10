import React, { useState } from "react";
import {
  Table,
  Button,
  Input,
  Select,
  Tag,
  Space,
  Modal,
  Form,
  InputNumber,
  Upload,
  message,
} from "antd";
import {
  FiPlus,
  FiSearch,
  FiFilter,
  FiEdit2,
  FiTrash2,
  FiUpload,
} from "react-icons/fi";
import Sidebar from "../../../components/SideBarAdmin/Sidebar";

const { Option } = Select;

function Services() {
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingService, setEditingService] = useState(null);

  // Mock data cho danh sách dịch vụ
  const services = [
    {
      id: 1,
      name: "Sửa chữa điện lạnh",
      category: "Điện lạnh",
      price: 200000,
      description: "Dịch vụ sửa chữa máy lạnh, tủ lạnh, máy giặt...",
      status: "active",
      image: "https://example.com/image1.jpg",
      estimatedTime: "1-2 giờ",
    },
    {
      id: 2,
      name: "Sửa chữa điện tử",
      category: "Điện tử",
      price: 150000,
      description: "Dịch vụ sửa chữa TV, loa, amply...",
      status: "active",
      image: "https://example.com/image2.jpg",
      estimatedTime: "1-3 giờ",
    },
  ];

  const categories = [
    "Điện lạnh",
    "Điện tử",
    "Điện gia dụng",
    "Đồ gỗ",
    "Thiết bị vệ sinh",
  ];

  // Filtered services based on search and category
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || service.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const columns = [
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            alt={text}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <div>
            <div className="font-medium">{text}</div>
            <div className="text-sm text-gray-500">{record.category}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Giá dịch vụ",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span className="font-medium">{price.toLocaleString("vi-VN")}đ</span>
      ),
    },
    {
      title: "Thời gian ước tính",
      dataIndex: "estimatedTime",
      key: "estimatedTime",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={status === "active" ? "green" : "red"}
          className="px-3 py-1">
          {status === "active" ? "Đang hoạt động" : "Tạm ngưng"}
        </Tag>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<FiEdit2 className="text-blue-600" />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="text"
            icon={<FiTrash2 className="text-red-600" />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  const handleEdit = (service) => {
    setEditingService(service);
    form.setFieldsValue(service);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Xác nhận xóa",
      content: "Bạn có chắc chắn muốn xóa dịch vụ này?",
      okText: "Xóa",
      cancelText: "Hủy",
      okButtonProps: {
        className: "bg-red-500 hover:bg-red-600",
      },
      onOk: () => {
        // Xử lý xóa dịch vụ với id tương ứng
        const updatedServices = services.filter((service) => service.id !== id);
        console.log("Updated services after deletion:", updatedServices);
        message.success("Đã xóa dịch vụ thành công");
      },
    });
  };

  const handleSubmit = (values) => {
    if (editingService) {
      // Xử lý cập nhật dịch vụ với values
      const updatedService = { ...editingService, ...values };
      console.log("Updated service:", updatedService);
      message.success("Đã cập nhật dịch vụ thành công");
    } else {
      // Xử lý thêm dịch vụ mới với values
      const newService = { id: services.length + 1, ...values };
      console.log("New service:", newService);
      message.success("Đã thêm dịch vụ mới thành công");
    }
    setIsModalVisible(false);
    form.resetFields();
    setEditingService(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Quản lý Dịch vụ
            </h1>
            <Button
              type="primary"
              icon={<FiPlus />}
              onClick={() => {
                setEditingService(null);
                form.resetFields();
                setIsModalVisible(true);
              }}
              className="bg-blue-600 hover:bg-blue-700">
              Thêm dịch vụ
            </Button>
          </div>

          {/* Search and Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
              <FiSearch className="text-gray-400" />
              <Input
                placeholder="Tìm kiếm dịch vụ..."
                bordered={false}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="flex-1 ml-2"
              />
            </div>

            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm">
              <FiFilter className="text-gray-400" />
              <Select
                defaultValue="all"
                bordered={false}
                className="flex-1 ml-2"
                onChange={(value) => setFilterCategory(value)}>
                <Option value="all">Tất cả danh mục</Option>
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          {/* Services Table */}
          <div className="bg-white rounded-lg shadow">
            <Table
              columns={columns}
              dataSource={filteredServices}
              rowKey="id"
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showTotal: (total) => `Tổng số ${total} dịch vụ`,
              }}
            />
          </div>
        </div>
      </div>

      <Modal
        title={editingService ? "Chỉnh sửa dịch vụ" : "Thêm dịch vụ mới"}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setEditingService(null);
        }}
        footer={null}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="mt-4">
          <Form.Item
            name="name"
            label="Tên dịch vụ"
            rules={[{ required: true, message: "Vui lòng nhập tên dịch vụ" }]}>
            <Input placeholder="Nhập tên dịch vụ" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Danh mục"
            rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}>
            <Select placeholder="Chọn danh mục">
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="price"
            label="Giá dịch vụ"
            rules={[{ required: true, message: "Vui lòng nhập giá dịch vụ" }]}>
            <InputNumber
              className="w-full"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              placeholder="Nhập giá dịch vụ"
            />
          </Form.Item>

          <Form.Item
            name="estimatedTime"
            label="Thời gian ước tính"
            rules={[
              { required: true, message: "Vui lòng nhập thời gian ước tính" },
            ]}>
            <Input placeholder="VD: 1-2 giờ" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Mô tả"
            rules={[
              { required: true, message: "Vui lòng nhập mô tả dịch vụ" },
            ]}>
            <Input.TextArea
              rows={4}
              placeholder="Nhập mô tả chi tiết về dịch vụ"
            />
          </Form.Item>

          <Form.Item name="image" label="Hình ảnh">
            <Upload
              listType="picture-card"
              maxCount={1}
              beforeUpload={() => false}>
              <div className="flex flex-col items-center">
                <FiUpload />
                <div className="mt-2">Tải ảnh lên</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            name="status"
            label="Trạng thái"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}>
            <Select placeholder="Chọn trạng thái">
              <Option value="active">Đang hoạt động</Option>
              <Option value="inactive">Tạm ngưng</Option>
            </Select>
          </Form.Item>

          <Form.Item className="mb-0 flex justify-end gap-2">
            <Button
              onClick={() => {
                setIsModalVisible(false);
                form.resetFields();
                setEditingService(null);
              }}>
              Hủy
            </Button>
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              {editingService ? "Cập nhật" : "Thêm mới"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Services;
