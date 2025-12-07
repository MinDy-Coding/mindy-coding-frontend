import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  GraduationCap,
  User,
  UserX,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function UsersManagementPage() {
  const users = [
    {
      name: "Lương Gia Hào",
      email: "luonggiahao@gmail.com",
      phone: "0901234567",
      role: "Học viên",
      status: "active",
      joinDate: "15/01/2024",
      lastLogin: "2 giờ trước",
    },
    {
      name: "Lương Gia Hào",
      email: "luonggiahao@gmail.com",
      phone: "0901234567",
      role: "Giảng viên",
      status: "active",
      joinDate: "15/01/2024",
      lastLogin: "2 giờ trước",
    },
    {
      name: "Lương Gia Hào",
      email: "luonggiahao@gmail.com",
      phone: "0901234567",
      role: "Nhân viên",
      status: "active",
      joinDate: "15/01/2024",
      lastLogin: "2 giờ trước",
    },
    {
      name: "Lương Gia Hào",
      email: "luonggiahao@gmail.com",
      phone: "0901234567",
      role: "Học viên",
      status: "inactive",
      joinDate: "15/01/2024",
      lastLogin: "30 ngày trước",
    },
    {
      name: "Lương Gia Hào",
      email: "luonggiahao@gmail.com",
      phone: "0901234567",
      role: "Giảng viên",
      status: "active",
      joinDate: "15/01/2024",
      lastLogin: "2 giờ trước",
    },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Học viên":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            {role}
          </Badge>
        );
      case "Giảng viên":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            {role}
          </Badge>
        );
      case "Nhân viên":
        return (
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            {role}
          </Badge>
        );
      default:
        return <Badge variant="secondary">{role}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === "active") {
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Hoạt động
        </Badge>
      );
    } else if (status === "inactive") {
      return (
        <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
          Không hoạt động
        </Badge>
      );
    }
    return <Badge variant="secondary">{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý User</h1>
          <p className="text-gray-600 mt-1">
            Quản lý tất cả người dùng trong hệ thống
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Thêm User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Tổng số User
                </p>
                <p className="text-3xl font-bold text-primary">270</p>
                <p className="text-sm text-green-600 mt-1">
                  +12% <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Học viên</p>
                <p className="text-3xl font-bold text-green-600">260</p>
                <p className="text-sm text-green-600 mt-1">
                  +96% <span className="text-gray-500">tổng số user</span>
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Giảng viên</p>
                <p className="text-3xl font-bold text-purple-600">5</p>
                <p className="text-sm text-green-600 mt-1">
                  +1 <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <User className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Nhân viên</p>
                <p className="text-3xl font-bold text-red-600">5</p>
                <p className="text-sm text-green-600 mt-1">
                  +5% <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <UserX className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Danh sách User
          </CardTitle>
          <p className="text-sm text-gray-600">
            Tìm kiếm và lọc user theo vai trò
          </p>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm theo tên, email, số điện thoại..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="student">Học viên</SelectItem>
                <SelectItem value="teacher">Giảng viên</SelectItem>
                <SelectItem value="staff">Nhân viên</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Họ tên
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Email / SĐT
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Vai trò
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Trạng thái
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Ngày tham gia
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Đăng nhập cuối
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    </td>
                    <td className="py-4 px-4">{getRoleBadge(user.role)}</td>
                    <td className="py-4 px-4">{getStatusBadge(user.status)}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {user.joinDate}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      {user.lastLogin}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/users-management/${index}`}>
                            Xem chi tiết
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/users-management/${index}`}>
                            Chỉnh sửa
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          Đóng lớp
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">Hiển thị 5 / 5 user</p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="w-4 h-4 mr-1" />
                Trước
              </Button>
              <Button variant="outline" size="sm">
                Sau
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
