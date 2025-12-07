"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Save,
  Edit,
  User,
  Mail,
  Phone,
  Lock,
  RotateCcw,
  CheckCircle,
  Shield,
  Camera,
} from "lucide-react";

// 1. Định nghĩa kiểu dữ liệu User
interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  joinDate: string;
  lastLogin: string;
  address: string;
  bio: string;
  avatarUrl: string;
}

export default function UserDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State loading khi lưu
  const [isFetching, setIsFetching] = useState(true); // State loading khi mới vào trang

  // 2. Khởi tạo dữ liệu rỗng
  const [formData, setFormData] = useState<UserProfile>({
    id: "",
    name: "",
    email: "",
    phone: "",
    role: "student", // Default role
    status: "active", // Default status
    joinDate: "",
    lastLogin: "",
    address: "",
    bio: "",
    avatarUrl: "",
  });

  // 3. Giả lập gọi API lấy dữ liệu khi vào trang (useEffect)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsFetching(true);
        // TODO: Gọi API backend tại đây
        // const response = await fetch(`/api/users/${params.id}`)
        // const data = await response.json()

        // Tạm thời log ra ID để debug
        console.log("Fetching data for User ID:", params.id);

        // setFormData(data)
      } catch (error) {
        console.error("Lỗi khi lấy thông tin user:", error);
      } finally {
        setIsFetching(false);
      }
    };

    if (params.id) {
      fetchUserData();
    }
  }, [params.id]);

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // TODO: Gọi API update user tại đây
      // await fetch(`/api/users/${params.id}`, { method: 'PUT', body: JSON.stringify(formData) })

      console.log("Saving data:", formData);

      alert("Đã cập nhật thông tin thành công!");
      setIsEditing(false);
    } catch (error) {
      alert("Có lỗi xảy ra khi lưu!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Nếu có API thật, chỗ này nên reset về data cũ (cần thêm 1 state backupData)
    setIsEditing(false);
  };

  const renderRoleBadge = (role: string) => {
    switch (role) {
      case "student":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
            Học viên
          </Badge>
        );
      case "teacher":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Giảng viên
          </Badge>
        );
      case "staff":
        return (
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            Nhân viên
          </Badge>
        );
      default:
        return <Badge variant="secondary">Khách</Badge>;
    }
  };

  const renderAvatar = () => {
    return (
      <div className="relative group">
        <div className="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center mx-auto">
          {formData.avatarUrl ? (
            <img
              src={formData.avatarUrl}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-3xl font-bold text-gray-400">
              {formData.name ? (
                formData.name.charAt(0).toUpperCase()
              ) : (
                <User className="w-8 h-8" />
              )}
            </span>
          )}
        </div>

        {isEditing && (
          <div className="absolute inset-0 flex items-center justify-center -top-4">
            <div className="w-24 h-24 rounded-full bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all">
              <Camera className="w-8 h-8 text-white opacity-80" />
            </div>
          </div>
        )}
      </div>
    );
  };

  // Nếu đang fetch dữ liệu ban đầu thì hiện Loading
  if (isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Đang tải thông tin...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => router.back()}
              className="h-9 w-9 bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Thông tin người dùng
              </h1>
              <p className="text-sm text-gray-500">
                Xem và chỉnh sửa hồ sơ chi tiết
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-primary hover:bg-primary/90 text-white gap-2"
              >
                <Edit className="w-4 h-4" /> Chỉnh sửa
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Hủy
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-700 text-white gap-2"
                >
                  {isLoading ? (
                    "Đang lưu..."
                  ) : (
                    <>
                      <Save className="w-4 h-4" /> Lưu thay đổi
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CỘT TRÁI: Overview Profile */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                {renderAvatar()}

                <h2 className="text-xl font-bold text-gray-900">
                  {formData.name || "Chưa có tên"}
                </h2>
                <div className="flex items-center gap-2 mt-2 mb-4">
                  {renderRoleBadge(formData.role)}
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${
                      formData.status === "active"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-red-50 text-red-700 border-red-200"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        formData.status === "active"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    {formData.status === "active" ? "Hoạt động" : "Đã khóa"}
                  </span>
                </div>

                <div className="w-full grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Ngày tham gia
                    </p>
                    <p className="font-medium text-gray-900 mt-1">
                      {formData.joinDate || "--/--"}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      Đăng nhập cuối
                    </p>
                    <p className="font-medium text-gray-900 mt-1">
                      {formData.lastLogin || "--"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-semibold uppercase text-gray-500">
                  Tác vụ nhanh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 text-gray-700"
                >
                  <Lock className="w-4 h-4" /> Đặt lại mật khẩu
                </Button>
                {formData.status === "active" ? (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <Shield className="w-4 h-4" /> Khóa tài khoản
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 text-green-600 hover:text-green-700 hover:bg-green-50 border-green-200"
                  >
                    <CheckCircle className="w-4 h-4" /> Mở khóa tài khoản
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* CỘT PHẢI: Form Chi tiết */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cá nhân</CardTitle>
                <CardDescription>
                  Thông tin chi tiết của người dùng trong hệ thống.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        disabled={!isEditing}
                        className="pl-9"
                        placeholder="Nhập họ tên"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        disabled={!isEditing}
                        className="pl-9 bg-gray-50"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        disabled={!isEditing}
                        className="pl-9"
                        placeholder="09xx..."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Địa chỉ</Label>
                    <div className="relative">
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        disabled={!isEditing}
                        placeholder="Chưa cập nhật"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-2">
                    <Label>Vai trò hệ thống</Label>
                    <Select
                      disabled={!isEditing}
                      value={formData.role}
                      onValueChange={(val) => handleInputChange("role", val)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn vai trò" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Học viên</SelectItem>
                        <SelectItem value="teacher">Giảng viên</SelectItem>
                        <SelectItem value="staff">Nhân viên</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Trạng thái hoạt động</Label>
                    <Select
                      disabled={!isEditing}
                      value={formData.status}
                      onValueChange={(val) => handleInputChange("status", val)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Hoạt động</SelectItem>
                        <SelectItem value="inactive">
                          Không hoạt động
                        </SelectItem>
                        <SelectItem value="blocked">Đã khóa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Ghi chú / Giới thiệu</Label>
                  <Input
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    disabled={!isEditing}
                    className="h-20"
                    placeholder="Thêm ghi chú..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
