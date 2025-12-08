import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  BookOpen,
  Plus,
  Search,
  Users,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function ClassesManagementPage() {
  const classes = [
    {
      name: "React Advanced - Class 1",
      technology: "React & Next.js",
      instructor: "",
      staff: "",
      revenue: "",
      students: "30/35",
      progress: 85,
      status: "active",
      paymentStatus: "paid",
      unpaidStatus: "pending"
    },
    {
      name: "UI/UX Design Fundamentals - Class 2", 
      technology: "UI/UX Design",
      instructor: "",
      staff: "",
      revenue: "",
      students: "35/35",
      progress: 90,
      status: "upcoming",
      paymentStatus: "paid",
      unpaidStatus: "pending"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Đang diễn ra</Badge>
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Sắp mở</Badge>
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Hoàn thành</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Lớp học</h1>
          <p className="text-gray-600 mt-1">Xem và quản lý tất cả lớp học</p>
        </div>
        <Link href="/classes-management/create-class">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Tạo lớp
          </Button>
        </Link>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Danh sách Lớp học</CardTitle>
          <p className="text-sm text-gray-600">Tìm kiếm và lọc user theo vai trò</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm theo tên lớp, khóa học, giảng viên..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Đang diễn ra</SelectItem>
                <SelectItem value="upcoming">Sắp mở</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Classes List */}
          <div className="space-y-6">
            {classes.map((classItem, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                        {getStatusBadge(classItem.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{classItem.technology}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Giảng viên:</span>
                            <span className="ml-2 text-sm font-medium">{classItem.instructor || "Chưa phân công"}</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">Staff:</span>
                            <span className="ml-2 text-sm font-medium">{classItem.staff || "Chưa phân công"}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm text-gray-600">Doanh thu:</span>
                            <span className="ml-2 text-sm font-medium">{classItem.revenue || "Chưa cập nhật"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Học viên: {classItem.students}</span>
                    </div>
                    <Progress value={classItem.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">Đã thanh toán</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-gray-600">Chưa thanh toán</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Xem chi tiết
                      </Button>
                      <Button variant="outline" size="sm">
                        Chỉnh sửa
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Đóng lớp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>


    </div>
  )
}