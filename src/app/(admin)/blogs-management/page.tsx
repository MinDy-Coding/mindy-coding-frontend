import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  FileText,
  Plus,
  Search,
  Users,
  BookOpen,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function BlogManagementPage() {
  const blogData = [
    {
      title: "React Advanced - Class 1",
      technology: "React & Next.js",
      instructor: "",
      staff: "",
      revenue: "",
      students: "",
      status: "published",
      tags: ["React", "Next.js"]
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Đã xuất bản</Badge>
      case 'draft':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Bản nháp</Badge>
      case 'pending':
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Chờ duyệt</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Blog & Nội dung</h1>
          <p className="text-gray-600 mt-1">Quản lý bài viết và kiểm duyệt nội dung</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Tạo bài viết
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tổng bài viết</p>
                <p className="text-3xl font-bold text-primary">45/50</p>
                <p className="text-sm text-green-600 mt-1">
                  +12 <span className="text-gray-500">bài trong tháng này</span>
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Đã xuất bản</p>
                <p className="text-3xl font-bold text-green-600">20</p>
                <p className="text-sm text-green-600 mt-1">
                  86% <span className="text-gray-500">tổng số bài</span>
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Chờ duyệt</p>
                <p className="text-3xl font-bold text-purple-600">5</p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="text-gray-500">Cần xem xét</span>
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tỷ báo cáo</p>
                <p className="text-3xl font-bold text-yellow-600">85%</p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="text-gray-500">Cần xử lý ngay</span>
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Danh sách Blog</CardTitle>
          <p className="text-sm text-gray-600">Quản lý và kiểm duyệt tất cả bài viết</p>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm theo tiêu đề, tác giả, danh mục..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="published">Đã xuất bản</SelectItem>
                <SelectItem value="draft">Bản nháp</SelectItem>
                <SelectItem value="pending">Chờ duyệt</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Blog Item */}
          <div className="space-y-4">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">React Advanced - Class 1</h3>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Đã xuất bản</Badge>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">React & Next.js</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">React & Next.js</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-600">Giảng viên:</span>
                          <span className="ml-2 text-sm font-medium">Chưa cập nhật</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Thời gian:</span>
                          <span className="ml-2 text-sm font-medium">Chưa cập nhật</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-600">Staff:</span>
                          <span className="ml-2 text-sm font-medium">Chưa cập nhật</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Doanh thu:</span>
                          <span className="ml-2 text-sm font-medium">Chưa cập nhật</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Xem chi tiết
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Chỉnh sửa
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Gỡ xuống
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">
              Hiển thị 5 / 5 bài viết
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="w-4 h-4 mr-1" />
                Trước
              </Button>
              <Button variant="outline" size="sm">
                Sau
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}