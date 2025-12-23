import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, DollarSign, CheckCircle, Laptop } from 'lucide-react'

type SubjectLevel = 'cơ bản' | 'nâng cao' | 'trực tuyến'

type Subject = {
  name: string
  code: string
  level: SubjectLevel
  description: string
  sessions: number
  price: string
  requirement: string
  format: string
}

const subjects: Subject[] = [
  {
    name: 'Lập trình JAVA cơ bản',
    code: 'JAVA101',
    level: 'cơ bản',
    description: 'Khóa học cung cấp kiến thức nền tảng về lập trình Java',
    sessions: 20,
    price: '5.000.000 VND',
    requirement: 'Không cần nền tảng',
    format: 'Online / Offline'
  },
  {
    name: 'Lập trình JAVA cơ bản',
    code: 'JAVA102',
    level: 'cơ bản',
    description: 'Khóa học cung cấp kiến thức nền tảng về lập trình Java',
    sessions: 20,
    price: '5.000.000 VND',
    requirement: 'Không cần nền tảng',
    format: 'Online / Offline'
  },
  {
    name: 'Lập trình JAVA mở rộng',
    code: 'JAVA102',
    level: 'cơ bản',
    description: 'Ôn tập nền tảng và thực hành thêm cấu trúc dữ liệu cơ bản',
    sessions: 21,
    price: '5.200.000 VND',
    requirement: 'Không cần nền tảng',
    format: 'Online / Offline'
  },
  {
    name: 'Lập trình Java nâng cao',
    code: 'JAVA201',
    level: 'nâng cao',
    description: 'Chuyên sâu về OOP, Spring Boot và triển khai dự án thực tế',
    sessions: 24,
    price: '6.500.000 VND',
    requirement: 'Không cần nền tảng',
    format: 'Online / Offline'
  },
  {
    name: 'Lập trình Java trực tuyến',
    code: 'JAVA101-OL',
    level: 'trực tuyến',
    description: 'Phiên bản online với mentor, bài tập và buổi live hàng tuần',
    sessions: 18,
    price: '4.500.000 VND',
    requirement: 'Không cần nền tảng',
    format: 'Online / Offline'
  }
]

const levelStyles: Record<SubjectLevel, string> = {
  'cơ bản': 'bg-cyan-100 text-cyan-700 hover:bg-cyan-100',
  'nâng cao': 'bg-purple-100 text-purple-700 hover:bg-purple-100',
  'trực tuyến': 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
}

export default function SubjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Môn học</h1>
        <p className="text-gray-600 mt-1">Quản lý thông tin và tài liệu các môn học</p>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2 font-semibold">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>{subject.price}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span>{subject.sessions} buổi học</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle className="w-4 h-4 text-gray-400" />
                  <span>Yêu cầu: {subject.requirement}</span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Laptop className="w-4 h-4 text-gray-400" />
                  <span>Hình thức: {subject.format}</span>
                </div>
              </div>

              <div className="mt-2 border-t border-[#96C4CD] pt-4 flex items-center justify-end">
                <Button variant="outline" size="lg" className="rounded-xl px-6" asChild>
                  <Link href={`/teacher/subjects/${subject.code}`}>
                    chi tiết
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

