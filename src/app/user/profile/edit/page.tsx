import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function EditProfilePage() {
  // Data giả từ profile
  const userProfile = {
    name: "Lê Thành Đạt",
    avatar: "/logos/logo-mindy.png",
    email: "nguyenvana@gmail.com",
    phone: "0901234567",
    dateOfBirth: "2000-01-01",
    address: "123 Lê Lợi, Q1, TP.HCM",
    bio: "Học viên tích cực, yêu thích lập trình"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#96c4cd]/30 via-[#96c4cd]/10 via-30% to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Chỉnh sửa hồ sơ</h1>
          <Link href="/user/profile">
            <Button 
              variant="outline"
              className="rounded-full px-6"
            >
              Quay lại
            </Button>
          </Link>
        </div>

        {/* Edit Form */}
        <div className="space-y-6">
          {/* Avatar Section */}
          <Card className="border border-gray-200 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Ảnh đại diện</CardTitle>
              <p className="text-sm text-gray-600">Cập nhật ảnh đại diện của bạn</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#96c4cd]/30 to-[#96c4cd]/60 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={userProfile.avatar}
                    alt="Avatar"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <Button 
                  variant="outline"
                  className="rounded-full"
                >
                  Thay đổi ảnh
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="border border-gray-200 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Thông tin cơ bản</CardTitle>
              <p className="text-sm text-gray-600">Cập nhật thông tin cá nhân của bạn</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Họ và tên<span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="fullName"
                    defaultValue={userProfile.name}
                    placeholder="Nhập họ và tên"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email<span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    defaultValue={userProfile.email}
                    placeholder="Nhập email"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Số điện thoại<span className="text-red-500">*</span>
                  </Label>
                  <Input 
                    id="phone"
                    type="tel"
                    defaultValue={userProfile.phone}
                    placeholder="Nhập số điện thoại"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                    Ngày sinh
                  </Label>
                  <Input 
                    id="dateOfBirth"
                    type="date"
                    defaultValue={userProfile.dateOfBirth}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  Địa chỉ
                </Label>
                <Input 
                  id="address"
                  defaultValue={userProfile.address}
                  placeholder="Nhập địa chỉ"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="text-sm font-medium">
                  Tiểu sử
                </Label>
                <Textarea 
                  id="bio"
                  defaultValue={userProfile.bio}
                  placeholder="Viết vài dòng về bản thân..."
                  rows={4}
                  className="rounded-lg resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Link href="/user/profile">
              <Button 
                variant="outline"
                className="rounded-full px-8"
              >
                Hủy
              </Button>
            </Link>
            <Button 
              className="rounded-full px-8"
            >
              Lưu thay đổi
            </Button>
          </div>
        </div>

        {/* Info Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Lưu ý:</strong> Thông tin có dấu <span className="text-red-500">*</span> là bắt buộc. Vui lòng điền đầy đủ thông tin trước khi lưu.
          </p>
        </div>
      </div>
    </div>
  )
}
