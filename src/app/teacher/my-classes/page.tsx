import React from 'react'
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
  Users,
  Search,
  Calendar,
  MapPin,
  GraduationCap,
  FileText,
  Clock
} from 'lucide-react'

export default function MyClassesPage() {
  const summaryStats = {
    totalClasses: 5,
    totalStudents: 120,
    activeClasses: 5,
    averageProgress: 30
  }

  const classes = [
    {
      name: "Lập trình Java cơ bản",
      classId: "JAVA101",
      status: "active",
      schedule: "Thứ 2, 4, 6 – 08:00-10:00",
      location: "Phòng A101",
      students: "25/30",
      startDate: "05/01/2025",
      endDate: "05/03/2025",
      progress: 40
    },
    {
      name: "React & Next.js Advanced",
      classId: "REACT201",
      status: "active",
      schedule: "Thứ 2, 4 – 14:00-16:00",
      location: "Phòng B203",
      students: "30/30",
      startDate: "08/01/2025",
      endDate: "08/03/2025",
      progress: 40
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Đang hoạt động</Badge>
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
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Lớp học của tôi</h1>
        <p className="text-gray-600 mt-1">Quản lý các lớp học bạn đang giảng dạy</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Classes */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tổng lớp học</p>
                <p className="text-2xl font-bold text-blue-600">{summaryStats.totalClasses}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Students */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tổng học viên</p>
                <p className="text-2xl font-bold text-green-600">{summaryStats.totalStudents}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Classes */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Lớp đang hoạt động</p>
                <p className="text-2xl font-bold text-purple-600">{summaryStats.activeClasses}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Average Progress */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Tiến độ trung bình</p>
                <p className="text-2xl font-bold text-red-600">{summaryStats.averageProgress}%</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Tìm kiếm lớp học</CardTitle>
          <p className="text-sm text-gray-600">Tìm kiếm và lọc user theo vai trò</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm theo tên lớp hoặc mã lớp..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Đang hoạt động</SelectItem>
                <SelectItem value="upcoming">Sắp mở</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Classes List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{classItem.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Mã lớp: {classItem.classId}</p>
                </div>
                {getStatusBadge(classItem.status)}
              </div>

              <div className="space-y-3 mb-4">
                {/* Schedule */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{classItem.schedule}</span>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{classItem.location}</span>
                </div>

                {/* Students */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{classItem.students} học viên</span>
                </div>

                {/* Dates */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{classItem.startDate} – {classItem.endDate}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Tiến độ học tập</span>
                  <span className="text-sm font-medium text-gray-900">{classItem.progress}%</span>
                </div>
                <Progress value={classItem.progress} className="h-2" />
              </div>

              {/* Buttons */}
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Xem chi tiết
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Tài liệu
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
