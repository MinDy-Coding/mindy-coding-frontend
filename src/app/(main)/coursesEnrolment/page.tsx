'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Star, Clock, Calendar, Users, CheckCircle, FileText, CreditCard, BookOpen } from 'lucide-react'

export default function CourseEnrollmentPage() {
  const [selectedCourse, setSelectedCourse] = useState('')
  const [learningMode, setLearningMode] = useState('offline')

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Đăng ký</span> khóa học
          </h1>
          <p className="text-lg text-gray-600">
            Điền thông tin để đăng ký khóa học phù hợp với bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              
              {/* Form Header */}
              <div className="flex items-center mb-6">
                <FileText className="w-5 h-5 text-primary mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Thông tin đăng ký</h2>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Vui lòng điền đầy đủ thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
              </p>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-4">Thông tin cá nhân</h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Họ và tên <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Nhập họ và tên"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Số điện thoại <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="0123456789"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate" className="text-sm font-medium text-gray-700">
                      Ngày sinh
                    </Label>
                    <Input
                      id="birthDate"
                      type="date"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Địa chỉ
                  </Label>
                  <Input
                    id="address"
                    placeholder="Nhập địa chỉ của bạn"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-4">Chọn khóa học</h3>
                
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700">
                    Khóa học muốn đăng ký <span className="text-red-500">*</span>
                  </Label>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Chọn khóa học" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="react-nextjs">Lập trình React & Next.js</SelectItem>
                      <SelectItem value="c-cpp">Lập trình C & C++</SelectItem>
                      <SelectItem value="python">Lập trình Python</SelectItem>
                      <SelectItem value="java">Lập trình Java</SelectItem>
                      <SelectItem value="nodejs">Node.js Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Hình thức học <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup value={learningMode} onValueChange={setLearningMode}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="offline" id="offline" />
                      <Label htmlFor="offline" className="text-sm font-medium">Offline</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="text-sm font-medium">Online tại nhà</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-primary mb-4">Thông tin bổ sung</h3>
                
                <div className="mb-4">
                  <Label htmlFor="goal" className="text-sm font-medium text-gray-700">
                    Mục tiêu học tập
                  </Label>
                  <Textarea
                    id="goal"
                    placeholder="Chia sẻ mục tiêu học tập của bạn..."
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      Tôi đồng ý với điều khoản và điều kiện của trung tâm
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      Nhận thông tin về các khóa học mới và ưu đãi đặc biệt
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 h-14"
              >
                Đăng ký khóa học
              </Button>
            </div>
          </div>

          {/* Course Info Sidebar */}
          <div className="space-y-6">
            
            {/* Featured Course */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <h3 className="font-semibold text-primary">Khóa học nổi bật</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Lập trình React & Next.js</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>12 tuần</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Thứ 2, 4, 6 - 19:00-21:00</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>25 học viên</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Another Course */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Lập trình C & C++</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>12 tuần</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Thứ 3, 5, 7 - 19:00-21:00</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>25 học viên</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Process */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="font-semibold text-primary">Quy trình đăng ký</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Điền form đăng ký</h4>
                    <p className="text-xs text-gray-600">Cung cấp thông tin cá nhân và chọn khóa học</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Xác nhận thông tin</h4>
                    <p className="text-xs text-gray-600">Nhận email xác nhận thông tin trong 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Thanh toán</h4>
                    <p className="text-xs text-gray-600">Hoàn tất thanh toán để bảo lưu chỗ</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Bắt đầu học</h4>
                    <p className="text-xs text-gray-600">Nhận tài liệu và link học tập</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}