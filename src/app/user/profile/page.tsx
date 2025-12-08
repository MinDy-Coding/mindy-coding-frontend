import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Mail, Phone, Calendar, UserCheck } from 'lucide-react'

export default function UserProfilePage() {
  // Data giả cho profile
  const userProfile = {
    name: "Lê Thành Đạt",
    avatar: "/logos/logo-mindy.png", // Sử dụng logo tạm
    address: "123 Lê Lợi, Q1, TP.HCM",
    role: "Học viên",
    description: "Học viên tích cực, yêu thích lập trình",
    email: "nguyenvana@gmail.com",
    phone: "0901234567",
    dateOfBirth: "01/01/2000",
    joinDate: "15/01/2024"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100/40 via-cyan-50/20 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hồ sơ cá nhân</h1>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-white rounded-full px-6">
            Chỉnh sửa
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="border border-gray-900 rounded-3xl shadow-lg overflow-hidden">
          <CardContent className="p-0">
            {/* Background gradient */}
            <div className="bg-gradient-to-b from-cyan-200/60 via-cyan-100/30 to-transparent h-32"></div>
            
            {/* Avatar section */}
            <div className="relative px-8 pb-8">
              {/* Avatar */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={userProfile.avatar}
                      alt="Avatar"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-20 text-center">
                {/* Name */}
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {userProfile.name}
                </h2>

                {/* Address */}
                <div className="flex items-center justify-center text-red-500 mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{userProfile.address}</span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                {/* Role Badge */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {userProfile.role}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {userProfile.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 my-6"></div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* Email */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {userProfile.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Số điện thoại</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {userProfile.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Ngày sinh</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {userProfile.dateOfBirth}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Join Date */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-cyan-50 rounded-lg">
                        <UserCheck className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Ngày tham gia</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {userProfile.joinDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Bạn có thể cập nhật thông tin cá nhân bằng cách nhấn nút "Chỉnh sửa" ở trên
          </p>
        </div>
      </div>
    </div>
  )
}
