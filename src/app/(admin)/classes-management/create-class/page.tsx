import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  BookOpen,
  Users,
  Calendar,
  DollarSign,
  Clock,
  ChevronLeft
} from 'lucide-react'

export default function CreateClassPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tạo lớp học mới</h1>
          <p className="text-gray-600 mt-1">Nhập thông tin chi tiết cho lớp học</p>
        </div>
        <Link href="/classes-management">
          <Button variant="outline" className="text-gray-700">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>
        </Link>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Thông tin cơ bản</CardTitle>
          <p className="text-sm text-gray-600">Nhập tên lớp học và mã lớp</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="className">Tên lớp học</Label>
              <Input 
                id="className" 
                placeholder="Nhập tên lớp học..." 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="classCode">Mã lớp</Label>
              <Input 
                id="classCode" 
                placeholder="VD: JAVA101-01" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Môn học</Label>
              <Select>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Chọn môn học" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="java101">Lập trình JAVA cơ bản</SelectItem>
                  <SelectItem value="js101">Lập trình JavaScript cơ bản</SelectItem>
                  <SelectItem value="py101">Lập trình Python cơ bản</SelectItem>
                  <SelectItem value="c101">Lập trình C cơ bản</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructor">Giảng viên</Label>
              <Select>
                <SelectTrigger id="instructor">
                  <SelectValue placeholder="Chọn giảng viên" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gv1">Nguyễn Văn A</SelectItem>
                  <SelectItem value="gv2">Trần Thị B</SelectItem>
                  <SelectItem value="gv3">Lê Văn C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả lớp học</Label>
            <Textarea 
              id="description" 
              placeholder="Nhập mô tả về lớp học..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Schedule Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Lịch biểu</CardTitle>
          <p className="text-sm text-gray-600">Chọn thời gian và địa điểm học</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startDate">Ngày bắt đầu</Label>
              <Input 
                id="startDate" 
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">Ngày kết thúc</Label>
              <Input 
                id="endDate" 
                type="date"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startTime">Giờ bắt đầu</Label>
              <Input 
                id="startTime" 
                type="time"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Thời lượng (giờ)</Label>
              <Input 
                id="duration" 
                type="number"
                placeholder="VD: 2"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="room">Phòng học</Label>
              <Input 
                id="room" 
                placeholder="VD: A101"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Student & Pricing Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Học viên & Giá</CardTitle>
          <p className="text-sm text-gray-600">Thiết lập số lượng học viên và học phí</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="maxStudents">Số lượng học viên tối đa</Label>
              <Input 
                id="maxStudents" 
                type="number"
                placeholder="VD: 35"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minStudents">Số lượng học viên tối thiểu</Label>
              <Input 
                id="minStudents" 
                type="number"
                placeholder="VD: 10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tuitionFee">Học phí (VND)</Label>
              <Input 
                id="tuitionFee" 
                type="number"
                placeholder="VD: 5000000"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Thông tin bổ sung</CardTitle>
          <p className="text-sm text-gray-600">Các thông tin khác về lớp học</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="staff">Staff phụ trách</Label>
              <Select>
                <SelectTrigger id="staff">
                  <SelectValue placeholder="Chọn staff" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="staff1">Nguyễn Văn D</SelectItem>
                  <SelectItem value="staff2">Trần Thị E</SelectItem>
                  <SelectItem value="staff3">Lê Văn F</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Trạng thái</Label>
              <Select defaultValue="upcoming">
                <SelectTrigger id="status">
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upcoming">Sắp mở</SelectItem>
                  <SelectItem value="active">Đang diễn ra</SelectItem>
                  <SelectItem value="completed">Hoàn thành</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Yêu cầu đầu vào</Label>
            <Textarea 
              id="requirements" 
              placeholder="Nhập các yêu cầu cho học viên..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú</Label>
            <Textarea 
              id="notes" 
              placeholder="Các ghi chú khác..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Link href="/classes-management">
          <Button variant="outline" className="text-gray-700">
            Hủy
          </Button>
        </Link>
        <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
          Lưu nháp
        </Button>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Tạo lớp học
        </Button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Số liệu thống kê</p>
                <p className="text-sm font-semibold text-gray-900">Danh sách học viên</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Số liệu thống kê</p>
                <p className="text-sm font-semibold text-gray-900">Danh sách học viên</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Số liệu thống kê</p>
                <p className="text-sm font-semibold text-gray-900">Danh sách giáo dịch</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Số liệu thống kê</p>
                <p className="text-sm font-semibold text-gray-900">Danh sách tài liệu</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Details Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Thêm chi tiết lớp học, gồm</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-gray-700">Số liệu thống kê</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-gray-700">Danh sách học viên</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-gray-700">Danh sách giáo dịch</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm text-gray-700">Danh sách tài liệu</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Lưu ý:</strong> Sau khi tạo lớp học thành công, bạn có thể thêm học viên và quản lý chi tiết lớp học từ trang danh sách lớp học.
        </p>
      </div>
    </div>
  )
}
