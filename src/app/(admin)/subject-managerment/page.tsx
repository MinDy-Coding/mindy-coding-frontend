'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Users, Clock, BookOpen, DollarSign, Plus, X } from 'lucide-react'

type SubjectLevel = 'cơ bản' | 'nâng cao' | 'trực tuyến'

type Subject = {
  name: string
  code: string
  level: SubjectLevel
  description: string
  durationHours: number
  sessions: number
  students: number
  price: string
}

const subjects: Subject[] = [
  {
    name: 'Lập trình JAVA cơ bản',
    code: 'JAVA101',
    level: 'cơ bản',
    description: 'Khóa học cung cấp kiến thức nền tảng về lập trình Java',
    durationHours: 40,
    sessions: 20,
    students: 25,
    price: '5.000.000 VND'
  },
  {
    name: 'Lập trình JAVA cơ bản',
    code: 'JAVA102',
    level: 'cơ bản',
    description: 'Khóa học cung cấp kiến thức nền tảng về lập trình Java',
    durationHours: 40,
    sessions: 20,
    students: 25,
    price: '5.000.000 VND'
  },
  {
    name: 'Lập trình JAVA mở rộng',
    code: 'JAVA102',
    level: 'cơ bản',
    description: 'Ôn tập nền tảng và thực hành thêm cấu trúc dữ liệu cơ bản',
    durationHours: 42,
    sessions: 21,
    students: 22,
    price: '5.200.000 VND'
  },
  {
    name: 'Lập trình Java nâng cao',
    code: 'JAVA201',
    level: 'nâng cao',
    description: 'Chuyên sâu về OOP, Spring Boot và triển khai dự án thực tế',
    durationHours: 48,
    sessions: 24,
    students: 18,
    price: '6.500.000 VND'
  },
  {
    name: 'Lập trình Java trực tuyến',
    code: 'JAVA101-OL',
    level: 'trực tuyến',
    description: 'Phiên bản online với mentor, bài tập và buổi live hàng tuần',
    durationHours: 36,
    sessions: 18,
    students: 32,
    price: '4.500.000 VND'
  }
]

const levelStyles: Record<SubjectLevel, string> = {
  'cơ bản': 'bg-cyan-100 text-cyan-700 hover:bg-cyan-100',
  'nâng cao': 'bg-purple-100 text-purple-700 hover:bg-purple-100',
  'trực tuyến': 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
}

export default function SubjectManagerPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    level: '' as SubjectLevel | '',
    description: '',
    durationHours: '',
    sessions: '',
    price: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log('Creating subject:', formData)
    setIsCreateDialogOpen(false)
    setFormData({
      name: '',
      code: '',
      level: '',
      description: '',
      durationHours: '',
      sessions: '',
      price: ''
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý môn học</h1>
          <p className="text-gray-600 mt-1">Quản lý thông tin và tài liệu các môn học</p>
        </div>
        <Button 
          className="bg-primary hover:bg-primary/90 text-white"
          onClick={() => setIsCreateDialogOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Tạo môn
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {subjects.map((subject, idx) => (
          <Card key={`${subject.code}-${idx}`} className="border border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {subject.name}
                </CardTitle>
                <p className="text-sm text-gray-500 mt-1">Mã môn: {subject.code}</p>
              </div>
              <Badge className={levelStyles[subject.level]}>{subject.level}</Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">{subject.description}</p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{subject.durationHours} giờ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>{subject.students} học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span>{subject.sessions} buổi học</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>{subject.price}</span>
                </div>
              </div>

              <div className="mt-2 border-t border-[#96C4CD] pt-4 flex items-center justify-end gap-3">
                <Button variant="outline" className="px-5" asChild>
                  <Link href={`/subject-managerment/${subject.code}`}>
                    chi tiết
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dialog tạo môn học */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[700px] rounded-2xl p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Tạo môn học mới</DialogTitle>
          </DialogHeader>
          
          <div className="p-6 space-y-5">
            {/* Thông tin cơ bản */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Thông tin cơ bản</h3>
              <p className="text-sm text-gray-500 mb-5">Nhập tên lớp học và mã lớp</p>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-gray-600">Tên môn học</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="h-11 rounded-xl border-gray-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-sm text-gray-600">Mã môn học</Label>
                    <Input
                      id="code"
                      value={formData.code}
                      onChange={(e) => handleInputChange('code', e.target.value)}
                      className="h-11 rounded-xl border-gray-200 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level" className="text-sm text-gray-600">Cấp độ</Label>
                  <Select
                    value={formData.level}
                    onValueChange={(value) => handleInputChange('level', value)}
                  >
                    <SelectTrigger className="h-11 rounded-xl border-gray-200 bg-white">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cơ bản">Cơ bản</SelectItem>
                      <SelectItem value="nâng cao">Nâng cao</SelectItem>
                      <SelectItem value="trực tuyến">Trực tuyến</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm text-gray-600">Mô tả chi tiết</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="rounded-xl border-gray-200 bg-white resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Thông tin khóa học */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Thông tin khóa học</h3>
              <p className="text-sm text-gray-500 mb-5">Thời lượng, số buổi học và giá tiền</p>
              
              <div className="grid grid-cols-3 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="durationHours" className="text-sm text-gray-600">Thời lượng (giờ)</Label>
                  <Input
                    id="durationHours"
                    type="number"
                    value={formData.durationHours}
                    onChange={(e) => handleInputChange('durationHours', e.target.value)}
                    className="h-11 rounded-xl border-gray-200 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sessions" className="text-sm text-gray-600">Số buổi học</Label>
                  <Input
                    id="sessions"
                    type="number"
                    value={formData.sessions}
                    onChange={(e) => handleInputChange('sessions', e.target.value)}
                    className="h-11 rounded-xl border-gray-200 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-sm text-gray-600">Giá tiền (VNĐ)</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="h-11 rounded-xl border-gray-200 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="px-6 py-4 bg-white gap-3">
            <Button 
              variant="outline" 
              onClick={() => setIsCreateDialogOpen(false)}
              className="h-11 px-6 rounded-lg"
            >
              Hủy
            </Button>
            <Button 
              onClick={handleSubmit} 
              className="h-11 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white"
            >
              Tạo môn học
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
