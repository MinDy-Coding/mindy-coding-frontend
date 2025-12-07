"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  User,
  MapPin,
  Clock,
  Save,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

// Mock Data - Mô phỏng việc gọi API lấy chi tiết đơn theo ID
const MOCK_DETAIL = {
  id: "REG001",
  user: {
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0901234567",
    dob: "15/05/2003",
    address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
  },
  registration: {
    subjectName: "Lập trình React & Next.js",
    submitDate: "07/12/2025 - 14:30",
    userNote:
      "Em là sinh viên năm 2, chưa có kiến thức về Web, mong được tư vấn lộ trình từ số 0.",
    status: "Pending", // Enum: Pending, Approved, Rejected
  },
  internal: {
    staffNote: "", // Ghi chú của nhân viên
  },
};

export default function ConsultationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  // State quản lý trạng thái và ghi chú
  const [status, setStatus] = useState(MOCK_DETAIL.registration.status);
  const [internalNote, setInternalNote] = useState(
    MOCK_DETAIL.internal.staffNote
  );
  const [isSaving, setIsSaving] = useState(false);

  // Xử lý lưu thay đổi
  const handleSave = () => {
    setIsSaving(true);
    // Giả lập gọi API update
    setTimeout(() => {
      setIsSaving(false);
      alert(`Đã cập nhật đơn ${params.id} thành công!`);
      // Nếu chọn "Approved", hệ thống backend sẽ tự gửi mail (theo quy trình Screen Flow)
      router.back(); // Quay lại danh sách
    }, 1000);
  };

  // Hàm helper để chỉnh màu border/text dựa theo trạng thái đang chọn
  const getStatusColorClass = (currentStatus: string) => {
    switch (currentStatus) {
      case "Approved":
        return "text-green-600 border-green-200 bg-green-50";
      case "Rejected":
        return "text-red-600 border-red-200 bg-red-50";
      default:
        return "text-yellow-600 border-yellow-200 bg-yellow-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Nút quay lại & Tiêu đề */}
        <div className="flex items-center gap-4 mb-2">
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
              Chi tiết Yêu cầu #{params.id}
            </h1>
            <p className="text-sm text-gray-500">
              Xem thông tin chi tiết và xử lý hồ sơ đăng ký.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CỘT TRÁI: Thông tin chi tiết (Chiếm 2 phần) */}
          <div className="lg:col-span-2 space-y-6">
            {/* 1. Thông tin Cá nhân */}
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#96c4cd]" />
                  <CardTitle className="text-lg">Thông tin Học viên</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 grid md:grid-cols-2 gap-y-6 gap-x-4">
                <div className="space-y-1">
                  <Label className="text-xs text-gray-500 uppercase font-semibold">
                    Họ và tên
                  </Label>
                  <div className="font-medium text-gray-900 text-lg">
                    {MOCK_DETAIL.user.fullName}
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-gray-500 uppercase font-semibold">
                    Ngày sinh
                  </Label>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {MOCK_DETAIL.user.dob}
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-gray-500 uppercase font-semibold">
                    Email
                  </Label>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {MOCK_DETAIL.user.email}
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-gray-500 uppercase font-semibold">
                    Số điện thoại
                  </Label>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {MOCK_DETAIL.user.phone}
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <Label className="text-xs text-gray-500 uppercase font-semibold">
                    Địa chỉ
                  </Label>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {MOCK_DETAIL.user.address}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Thông tin Khóa học & Ghi chú */}
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#96c4cd]" />
                  <CardTitle className="text-lg">Nội dung Đăng ký</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-500 uppercase font-semibold">
                      Môn học quan tâm
                    </Label>
                    <div className="font-bold text-[#96c4cd] text-lg">
                      {MOCK_DETAIL.registration.subjectName}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-500 uppercase font-semibold">
                      Thời gian gửi đơn
                    </Label>
                    <div className="text-gray-700">
                      {MOCK_DETAIL.registration.submitDate}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <Label className="text-xs text-gray-500 uppercase font-semibold block mb-2">
                    Nguyện vọng / Ghi chú của học viên
                  </Label>
                  <p className="text-gray-700 italic">
                    "{MOCK_DETAIL.registration.userNote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CỘT PHẢI: Panel Xử lý (Sticky) */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-md border-[#96c4cd]/30">
              <CardHeader className="bg-[#96c4cd]/10 pb-4 border-b border-[#96c4cd]/20">
                <CardTitle className="text-lg text-[#5a8d96]">
                  Xử lý Hồ sơ
                </CardTitle>
                <CardDescription>
                  Cập nhật trạng thái và phản hồi
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                {/* 1. Chọn Trạng thái */}
                <div className="space-y-3">
                  <Label>Trạng thái xử lý</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger
                      className={`w-full font-medium h-11 transition-colors ${getStatusColorClass(
                        status
                      )}`}
                    >
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-yellow-500" />{" "}
                          Chờ xử lý
                        </div>
                      </SelectItem>
                      <SelectItem value="Approved">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />{" "}
                          Duyệt đơn
                        </div>
                      </SelectItem>
                      <SelectItem value="Rejected">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500" /> Từ chối
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Gợi ý quy trình */}
                  {status === "Approved" && (
                    <div className="text-xs p-3 bg-blue-50 text-blue-700 rounded-md border border-blue-100 flex gap-2 items-start">
                      <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>
                        Hệ thống sẽ gửi email xác nhận và link tạo mật khẩu cho
                        học viên.
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. Ghi chú nội bộ */}
                <div className="space-y-3">
                  <Label htmlFor="internal-note">Ghi chú nội bộ (Staff)</Label>
                  <Textarea
                    id="internal-note"
                    placeholder="VD: Đã gọi điện tư vấn, học viên hẹn chuyển khoản..."
                    className="min-h-[120px] resize-none focus-visible:ring-[#96c4cd]"
                    value={internalNote}
                    onChange={(e) => setInternalNote(e.target.value)}
                  />
                </div>
              </CardContent>

              <CardFooter className="pt-4 pb-6 flex flex-col gap-3 bg-gray-50/50 border-t border-gray-100">
                <Button
                  className="w-full bg-[#96c4cd] hover:bg-[#85b0b8] text-white gap-2 h-11 text-base font-medium"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    "Đang lưu..."
                  ) : (
                    <>
                      <Save className="w-4 h-4" /> Lưu thay đổi
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                  onClick={() => router.back()}
                >
                  Hủy bỏ
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
