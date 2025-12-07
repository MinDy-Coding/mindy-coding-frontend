"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Calendar,
  Mail,
  Phone,
  FileDown,
} from "lucide-react";
import Link from "next/link";

// Mock Data - Mô phỏng bảng Registration Form trong ERD
const MOCK_REGISTRATIONS = [
  {
    id: "REG001",
    firstName: "Nguyễn Văn",
    lastName: "A",
    email: "nguyenvana@gmail.com",
    phone: "0901234567",
    subject: "Lập trình React & Next.js",
    submitDate: "2025-12-07",
    status: "Pending", // Enum: Pending, Approved, Rejected
    note: "Em muốn hỏi về lộ trình học cho người mới",
  },
  {
    id: "REG002",
    firstName: "Trần Thị",
    lastName: "B",
    email: "tranthib@gmail.com",
    phone: "0912345678",
    subject: "Lập trình Python",
    submitDate: "2025-12-06",
    status: "Approved",
    note: "Đã thanh toán cọc",
  },
  {
    id: "REG003",
    firstName: "Lê Văn",
    lastName: "C",
    email: "levanc@gmail.com",
    phone: "0987654321",
    subject: "Node.js Backend",
    submitDate: "2025-12-05",
    status: "Rejected",
    note: "Sai số điện thoại",
  },
  {
    id: "REG004",
    firstName: "Phạm Minh",
    lastName: "D",
    email: "minhd@outlook.com",
    phone: "0977112233",
    subject: "Lập trình C++",
    submitDate: "2025-12-07",
    status: "Pending",
    note: "",
  },
];

export default function ConsultationManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Logic lọc dữ liệu
  const filteredData = MOCK_REGISTRATIONS.filter((item) => {
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Hàm render trạng thái (Thay thế Badge component)
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            <CheckCircle className="w-3 h-3 mr-1" /> Đã duyệt
          </span>
        );
      case "Rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
            <XCircle className="w-3 h-3 mr-1" /> Từ chối
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
            <Calendar className="w-3 h-3 mr-1" /> Chờ xử lý
          </span>
        );
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50/50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Quản lý Đăng ký Tư vấn
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Danh sách các đơn đăng ký từ Landing Page cần xử lý.
          </p>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-300 bg-white hover:bg-gray-50"
        >
          <FileDown className="w-4 h-4" />
          Xuất Excel
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Tìm theo tên, email, SĐT..."
            className="pl-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 whitespace-nowrap hidden sm:inline">
              Lọc theo:
            </span>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-[180px] bg-white">
              <SelectValue placeholder="Trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="Pending">Chờ xử lý</SelectItem>
              <SelectItem value="Approved">Đã duyệt</SelectItem>
              <SelectItem value="Rejected">Đã từ chối</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50/80 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Mã Đơn
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Thông tin Học viên
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Khóa học quan tâm
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Ngày gửi
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Trạng thái
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700 text-right">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/60 transition-colors group"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 text-base">
                        {item.firstName} {item.lastName}
                      </div>
                      <div className="flex flex-col gap-1 mt-1 text-gray-500 text-xs">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-gray-400" />{" "}
                          {item.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-gray-400" />{" "}
                          {item.phone}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700 font-medium">
                        {item.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                      {item.submitDate}
                    </td>
                    <td className="px-6 py-4">
                      {renderStatusBadge(item.status)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/consultation-management/${item.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                            title="Xem chi tiết"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        {item.status === "Pending" && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                              title="Duyệt nhanh"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                              title="Từ chối"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="p-3 bg-gray-100 rounded-full mb-3">
                        <Search className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-base font-medium">
                        Không tìm thấy kết quả
                      </p>
                      <p className="text-sm">
                        Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/50 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Hiển thị{" "}
            <span className="font-medium text-gray-900">
              {filteredData.length}
            </span>{" "}
            kết quả
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="h-8 text-xs"
            >
              Trước
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs bg-white"
            >
              Sau
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
