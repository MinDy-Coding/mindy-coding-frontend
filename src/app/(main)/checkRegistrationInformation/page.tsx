'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  Mail, 
  Phone, 
  User, 
  BookOpen, 
  Calendar, 
  Clock, 
  MapPin,
  CheckCircle,
  CreditCard,
  GraduationCap,
  ChevronRight
} from 'lucide-react'

export default function CheckRegistrationInformationPage() {
  const [searchMethod, setSearchMethod] = useState('email')
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(false)

  // Mock data for demonstration
  const registrationData = {
    id: 'DA1001',
    personalInfo: {
      name: 'Lương Gia Hào',
      email: 'daianhmin2025@gmail.com',
      phone: '0912345678'
    },
    courseInfo: {
      name: 'Lập trình React',
      instructor: 'Lê Thành Đạt',
      schedule: 'Thứ 2, 4, 6 - 19:00-21:00',
      mode: 'Offline tại trung tâm'
    },
    timeline: [
      {
        status: 'completed',
        title: 'Đăng ký thành công',
        date: '15/09/2025',
        description: ''
      },
      {
        status: 'completed',
        title: 'Đã thanh toán',
        date: '16/09/2025',
        description: 'Hoàn tất'
      },
      {
        status: 'current',
        title: 'Bắt đầu học',
        date: '02/10/2025',
        description: ''
      }
    ]
  }

  const handleSearch = () => {
    setShowResult(true)
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tra cứu <span className="text-primary">thông tin</span> đã đăng ký
          </h1>
          <p className="text-lg text-gray-600">
            Nhập email hoặc số điện thoại để kiểm tra trạng thái đăng ký khóa học của bạn
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Search className="w-5 h-5 text-primary mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Tìm kiếm thông tin đăng ký</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Chọn phương thức tìm kiếm và nhập thông tin của bạn
            </p>

            {/* Search Method Tabs */}
            <Tabs value={searchMethod} onValueChange={setSearchMethod} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Tìm theo email
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Tìm theo SĐT
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="email" className="mt-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    Địa chỉ email đã đăng ký
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="mb-4"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="phone" className="mt-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                    Số điện thoại đã đăng ký
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại của bạn"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="mb-4"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <Button 
              onClick={handleSearch}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Tìm kiếm
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        {showResult && (
          <>
            {/* Registration Information */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-gray-900">
                    <User className="w-5 h-5 text-primary mr-2" />
                    Thông tin đăng ký
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Đã xác nhận
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Đã thanh toán
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Mã đăng ký: <span className="font-medium">{registrationData.id}</span>
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Thông tin cá nhân
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Họ và tên:</span>
                        <span className="font-medium ml-2">{registrationData.personalInfo.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium ml-2">{registrationData.personalInfo.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Số điện thoại:</span>
                        <span className="font-medium ml-2">{registrationData.personalInfo.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Thông tin khóa học
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Khóa học:</span>
                        <span className="font-medium ml-2">{registrationData.courseInfo.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Giảng viên:</span>
                        <span className="font-medium ml-2">{registrationData.courseInfo.instructor}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Lịch học:</span>
                        <span className="font-medium ml-2">{registrationData.courseInfo.schedule}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Hình thức:</span>
                        <span className="font-medium ml-2">{registrationData.courseInfo.mode}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Courses */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <BookOpen className="w-5 h-5 text-primary mr-2" />
                  Thông tin khóa học
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center">
                      <GraduationCap className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Lập trình React</h4>
                        <p className="text-sm text-gray-600">Khóa học đã đăng ký</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center">
                      <GraduationCap className="w-8 h-8 text-gray-400 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Lập trình C++ & C</h4>
                        <p className="text-sm text-gray-600">Khóa học khả dụng</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center">
                      <GraduationCap className="w-8 h-8 text-gray-400 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Lập trình Node.js</h4>
                        <p className="text-sm text-gray-600">Khóa học khả dụng</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  Lịch trình quan trọng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {registrationData.timeline.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 ${
                        item.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : item.status === 'current'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">Cần hỗ trợ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Hotline</h4>
                      <p className="text-sm text-gray-600">1900-6969 (8:00-21:00)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Email hỗ trợ</h4>
                      <p className="text-sm text-gray-600">daianhdat2025@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}