import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CheckCircle,
  Circle,
  Clock,
  MapPin,
  CalendarRange,
  Users,
  FileUp,
} from 'lucide-react'

type Lesson = {
  title: string
  duration: string
  topics: string[]
  status?: 'done' | 'pending'
}

type SubjectDetail = {
  code: string
  name: string
  level: 'cơ bản' | 'nâng cao' | 'trực tuyến'
  description: string
  students: number
  schedule: string
  room: string
  dateRange: string
  goals: string[]
  requirements: string[]
  lessons: Lesson[]
  progress: number
  sessionsDone: number
  sessionsTotal: number
  materials: number
}

const subjectDetails: Record<string, SubjectDetail> = {
  JAVA101: {
    code: 'JAVA101',
    name: 'Lập trình Java cơ bản',
    level: 'cơ bản',
    description:
      'Khóa học cung cấp kiến thức nền tảng về lập trình Java, bao gồm cú pháp cơ bản, lập trình hướng đối tượng, xử lý ngoại lệ, làm việc với collections và file I/O.',
    students: 25,
    schedule: 'Thứ 2, 4, 6 | 08:00 - 10:00',
    room: 'Phòng A101',
    dateRange: '01/09/2024 - 30/12/2024',
    goals: [
      'Hiểu và áp dụng các khái niệm cơ bản của Java',
      'Thành thạo lập trình hướng đối tượng',
      'Xử lý ngoại lệ và debug hiệu quả',
      'Làm việc với Collections Framework',
      'Xây dựng ứng dụng Java đơn giản',
    ],
    requirements: [
      'Kiến thức cơ bản về máy tính',
      'Tư duy logic',
      'Không yêu cầu kinh nghiệm lập trình trước đó',
    ],
    lessons: [
      {
        title: 'Buổi 1: Giới thiệu về Java và cài đặt môi trường',
        duration: '2 giờ',
        topics: ['Lịch sử Java', 'JDK và JRE', 'Hello World'],
        status: 'done',
      },
      {
        title: 'Buổi 2: Biến, kiểu dữ liệu và toán tử',
        duration: '2 giờ',
        topics: ['Primitive vs Reference', 'Toán tử', 'Ép kiểu'],
        status: 'done',
      },
      {
        title: 'Buổi 3: Cấu trúc điều khiển',
        duration: '2 giờ',
        topics: ['if/else', 'switch', 'for/while/do-while'],
        status: 'pending',
      },
    ],
    progress: 15,
    sessionsDone: 3,
    sessionsTotal: 20,
    materials: 5,
  },
}

const levelStyles = {
  'cơ bản': 'bg-cyan-100 text-cyan-700',
  'nâng cao': 'bg-purple-100 text-purple-700',
  'trực tuyến': 'bg-emerald-100 text-emerald-700',
}

export default function SubjectDetailPage({ params }: { params: { code: string } }) {
  const detail = subjectDetails[params.code.toUpperCase()]

  if (!detail) return notFound()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <Link href="/teacher/subjects" className="hover:underline">
          Quay lại danh sách
        </Link>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-[#96C4CD] flex items-center justify-center text-white text-xl font-bold">
          {detail.name.slice(0, 1)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl font-bold text-gray-900">{detail.name}</h1>
            <Badge className={`${levelStyles[detail.level]} capitalize`}>{detail.level}</Badge>
          </div>
          <p className="text-sm text-gray-500 mt-1">Mã môn: {detail.code}</p>
          <p className="text-sm text-gray-700 mt-2 max-w-3xl">{detail.description}</p>

          <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-700">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-400" /> {detail.students} học viên
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" /> {detail.schedule}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" /> {detail.room}
            </span>
            <span className="flex items-center gap-2">
              <CalendarRange className="w-4 h-4 text-gray-400" /> {detail.dateRange}
            </span>
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <FileUp className="w-4 h-4" />
          Tải tài liệu lên
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Lộ trình từng buổi học</CardTitle>
              <p className="text-sm text-gray-500">
                Chi tiết nội dung và tiến độ các buổi học
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {detail.lessons.map((lesson, index) => (
                <div key={lesson.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#96C4CD]" />
                    {index < detail.lessons.length - 1 && (
                      <div className="flex-1 w-px bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">Thời lượng: {lesson.duration}</p>
                      </div>
                      {lesson.status === 'done' ? (
                        <span className="text-xs text-green-600 font-semibold">Đã hoàn thành</span>
                      ) : (
                        <span className="text-xs text-gray-500 font-semibold">Đang hoàn thành</span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {lesson.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="bg-gray-50">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Mục tiêu khóa học</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {detail.goals.map((goal) => (
                <div key={goal} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>{goal}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Yêu cầu đầu vào</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {detail.requirements.map((req) => (
                <div key={req} className="flex items-start gap-2 text-sm text-gray-700">
                  <Circle className="w-3 h-3 text-gray-400 mt-1" />
                  <span>{req}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Thống kê</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Tiến độ</span>
                  <span>{detail.progress}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-[#96C4CD]"
                    style={{ width: `${detail.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Buổi đã dạy</span>
                <span>
                  {detail.sessionsDone} / {detail.sessionsTotal}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>Tài liệu</span>
                <span>{detail.materials} files</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

