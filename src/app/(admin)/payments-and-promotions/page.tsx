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
  CreditCard,
  DollarSign,
  TrendingUp,
  Gift,
  Search,
  Download,
  Eye,
  Users,
  Calendar
} from 'lucide-react'

export default function PaymentManagementPage() {
  const transactions = [
    {
      id: "TXN001",
      studentName: "Nguyễn Văn A",
      course: "React Advanced",
      amount: "5.000.000đ",
      method: "VNPAY",
      status: "success",
      date: "15/01/2024 14:30"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Thành công</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Đang xử lý</Badge>
      case 'failed':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Thất bại</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getMethodBadge = (method: string) => {
    switch (method) {
      case 'VNPAY':
        return <Badge variant="outline" className="text-blue-600 border-blue-200">VNPAY</Badge>
      case 'MOMO':
        return <Badge variant="outline" className="text-pink-600 border-pink-200">MOMO</Badge>
      case 'BANKING':
        return <Badge variant="outline" className="text-green-600 border-green-200">Banking</Badge>
      default:
        return <Badge variant="outline">{method}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý Thanh toán & Ưu đãi</h1>
          <p className="text-gray-600 mt-1">Quản lý giao dịch, cổng thanh toán và mã giảm giá</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Doanh thu tháng</p>
                <p className="text-3xl font-bold text-primary">1.2 tỷ</p>
                <p className="text-sm text-green-600 mt-1">
                  +12% <span className="text-gray-500">so với tháng trước</span>
                </p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Giao dịch thành công</p>
                <p className="text-3xl font-bold text-green-600">260</p>
                <p className="text-sm text-green-600 mt-1">
                  98% <span className="text-gray-500">giao dịch thành công</span>
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Đang xử lý</p>
                <p className="text-3xl font-bold text-purple-600">12</p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="text-gray-500">Cần kiểm tra</span>
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Voucher đang dùng</p>
                <p className="text-3xl font-bold text-red-600">15</p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="text-gray-500">3 sắp hết hạn</span>
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <Gift className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <Button 
            variant="ghost" 
            className="border-b-2 border-primary text-primary py-4 px-1 text-sm font-medium"
          >
            Giao dịch
          </Button>
          <Button 
            variant="ghost" 
            className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium"
          >
            Mã giảm giá
          </Button>
          <Button 
            variant="ghost" 
            className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-sm font-medium"
          >
            Cổng thanh toán
          </Button>
        </nav>
      </div>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Danh sách Giao dịch</CardTitle>
          <p className="text-sm text-gray-600">Theo dõi tất cả giao dịch thanh toán</p>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Tìm theo tên, email, số điện thoại..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tất cả" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="success">Thành công</SelectItem>
                <SelectItem value="pending">Đang xử lý</SelectItem>
                <SelectItem value="failed">Thất bại</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Xuất báo cáo</span>
            </Button>
          </div>

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Mã GD</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Học viên</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Khóa học</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Số tiền</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Phương thức</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Trạng thái</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Thời gian</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{transaction.id}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{transaction.studentName}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-900">{transaction.course}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm font-medium text-gray-900">{transaction.amount}</div>
                    </td>
                    <td className="py-4 px-4">
                      {getMethodBadge(transaction.method)}
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(transaction.status)}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Chi tiết
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}