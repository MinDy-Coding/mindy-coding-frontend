import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  GraduationCap, 
  UserCheck, 
  DollarSign,
  TrendingUp,
  Calendar,
  CreditCard,
  Mail,
  Database,
  AlertTriangle
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Tổng quan hệ thống quản lý khóa học</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tổng số User</p>
                <p className="text-3xl font-bold text-gray-900">270</p>
                <p className="text-sm text-green-600 mt-1">
                  +12% <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lớp đang dạy</p>
                <p className="text-3xl font-bold text-gray-900">20</p>
                <p className="text-sm text-green-600 mt-1">
                  +2% <span className="text-gray-500">so với tháng trước</span>
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
                <p className="text-sm font-medium text-gray-600">Lớp sắp mở</p>
                <p className="text-3xl font-bold text-gray-900">5</p>
                <p className="text-sm text-green-600 mt-1">
                  +5% <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Doanh thu tháng này</p>
                <p className="text-3xl font-bold text-gray-900">1.2 tỷ</p>
                <p className="text-sm text-green-600 mt-1">
                  +18% <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Role Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Phân bổ User theo Role</CardTitle>
            <p className="text-sm text-gray-600">Tổng số user đã đăng ký trong hệ thống</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Học sinh</span>
                  <span className="font-medium">50 (86%)</span>
                </div>
                <Progress value={86} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Người dạy</span>
                  <span className="font-medium">3 (20%)</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Nhân viên</span>
                  <span className="font-medium">1 (10%)</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Khách hàng</span>
                  <span className="font-medium">5 (30%)</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Hoạt động gần đây</CardTitle>
            <p className="text-sm text-gray-600">Log các hoạt động gần nhất trong hệ thống</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Học viên mới đăng ký</p>
                  <p className="text-xs text-gray-600">Nguyễn Văn A - Khóa React Advanced</p>
                  <p className="text-xs text-gray-500">2 phút trước</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <CreditCard className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Thanh toán thành công</p>
                  <p className="text-xs text-gray-600">Trần Thị B - 5.000.000đ</p>
                  <p className="text-xs text-gray-500">20 phút trước</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Giảng viên cập nhật</p>
                  <p className="text-xs text-gray-600">Lê Văn C - Thêm tài liệu bài 5</p>
                  <p className="text-xs text-gray-500">2 tiếng trước</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Mail className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Email gửi thành công</p>
                  <p className="text-xs text-gray-600">Nhắc nhở học phí - 30 học viên</p>
                  <p className="text-xs text-gray-500">30 phút trước</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Doanh thu theo tháng</CardTitle>
            <p className="text-sm text-gray-600">Biểu đồ doanh thu 5 tháng gần nhất</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tháng 8</span>
                </div>
                <Progress value={70} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tháng 9</span>
                </div>
                <Progress value={85} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tháng 10</span>
                </div>
                <Progress value={90} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tháng 11</span>
                </div>
                <Progress value={80} className="h-3" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tháng 12</span>
                </div>
                <Progress value={95} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Trạng thái hệ thống</CardTitle>
            <p className="text-sm text-gray-600">Tình trạng các dịch vụ quan trọng</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Database</p>
                    <p className="text-xs text-gray-600">Uptime: 99.9%</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Online
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Email Service</p>
                    <p className="text-xs text-gray-600">Uptime: 99.8%</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Online
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Payment Gateway</p>
                    <p className="text-xs text-gray-600">Uptime: 99.9%</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Online
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Storage</p>
                    <p className="text-xs text-gray-600">Uptime: 99.5%</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                  Warning
                </Badge>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">Lần kiểm tra cuối: 2 phút trước</p>
                <p className="text-xs text-blue-700">Tất cả dịch vụ đang hoạt động bình thường</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}