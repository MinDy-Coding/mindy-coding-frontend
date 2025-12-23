/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, MapPin, CalendarRange, FileUp } from "lucide-react"

type Lesson = {
  title: string
  duration: string
  topics: string[]
  status?: "done" | "pending"
}

type SubjectDetail = {
  code: string
  name: string
  level: "cơ bản" | "nâng cao" | "trực tuyến"
  description: string
  students: number
  schedule: string
  room: string
  dateRange: string
  goals: string[]
  requirements: string[]
  lessons: Lesson[]
  materials: {
    title: string
    size: string
    updatedAt: string
    files: number
  }[]
  progress: number
  sessionsDone: number
  sessionsTotal: number
  materialsCount: number
}

const subjectDetails: Record<string, SubjectDetail> = {
  JAVA101: {
    code: "JAVA101",
    name: "Lập trình Java cơ bản",
    level: "cơ bản",
    description:
      "Kiến thức nền tảng về Java: cú pháp cơ bản, OOP, xử lý ngoại lệ, collections và file I/O.",
    students: 25,
    schedule: "Thứ 2, 4, 6 | 08:00 - 10:00",
    room: "Phòng A101",
    dateRange: "01/09/2024 - 30/12/2024",
    goals: [
      "Hiểu và áp dụng các khái niệm cơ bản của Java",
      "Thành thạo lập trình hướng đối tượng",
      "Xử lý ngoại lệ và debug hiệu quả",
      "Làm việc với Collections Framework",
      "Xây dựng ứng dụng Java đơn giản",
    ],
    requirements: ["Kiến thức cơ bản về máy tính", "Tư duy logic"],
    lessons: [
      {
        title: "Buổi 1: Giới thiệu về Java và cài đặt môi trường",
        duration: "2 giờ",
        topics: ["Lịch sử Java", "JDK và JRE", "Hello World"],
        status: "done",
      },
      {
        title: "Buổi 2: Biến, kiểu dữ liệu và toán tử",
        duration: "2 giờ",
        topics: ["Primitive vs Reference", "Toán tử", "Ép kiểu"],
        status: "done",
      },
      {
        title: "Buổi 3: Cấu trúc điều khiển",
        duration: "2 giờ",
        topics: ["if/else", "switch", "for/while/do-while"],
        status: "pending",
      },
    ],
    progress: 15,
    sessionsDone: 3,
    sessionsTotal: 20,
    materialsCount: 5,
    materials: [
      { title: "Slide bài giảng - Giới thiệu Java", size: "25 MB", updatedAt: "01/09/2025", files: 1 },
      { title: "Slide bài giảng - Giới thiệu Java", size: "25 MB", updatedAt: "01/09/2025", files: 1 },
      { title: "Slide bài giảng - Giới thiệu Java", size: "25 MB", updatedAt: "01/09/2025", files: 1 },
      { title: "Slide bài giảng - Giới thiệu Java", size: "25 MB", updatedAt: "01/09/2025", files: 1 },
    ],
  },
  JAVA102: {
    code: "JAVA102",
    name: "Lập trình Java mở rộng",
    level: "cơ bản",
    description: "Ôn tập nền tảng, thực hành collections, generics và xử lý file nâng cao.",
    students: 22,
    schedule: "Thứ 3, 5 | 14:00 - 16:00",
    room: "Phòng B203",
    dateRange: "10/09/2024 - 10/12/2024",
    goals: [
      "Củng cố OOP và làm việc với collections",
      "Sử dụng generics và lambda cơ bản",
      "Đọc/ghi file và xử lý ngoại lệ nâng cao",
    ],
    requirements: ["Hoàn thành JAVA101 hoặc kiến thức tương đương"],
    lessons: [
      {
        title: "Buổi 1: Ôn tập OOP và Collections",
        duration: "2 giờ",
        topics: ["List/Set/Map", "Equals & HashCode"],
        status: "done",
      },
      {
        title: "Buổi 2: Generics và Stream cơ bản",
        duration: "2 giờ",
        topics: ["Generics", "Stream API intro"],
        status: "pending",
      },
      {
        title: "Buổi 3: Xử lý file nâng cao",
        duration: "2 giờ",
        topics: ["NIO", "Buffered IO", "Serialization"],
        status: "pending",
      },
    ],
    progress: 10,
    sessionsDone: 2,
    sessionsTotal: 21,
    materialsCount: 4,
    materials: [
      { title: "Lab OOP & Collections", size: "12 MB", updatedAt: "05/09/2025", files: 3 },
      { title: "Slide Generics & Stream", size: "9 MB", updatedAt: "08/09/2025", files: 1 },
    ],
  },
  JAVA201: {
    code: "JAVA201",
    name: "Lập trình Java nâng cao",
    level: "nâng cao",
    description: "Chuyên sâu OOP, Spring Boot và triển khai dự án thực tế.",
    students: 18,
    schedule: "Thứ 2, 4 | 18:00 - 20:00",
    room: "Phòng C305",
    dateRange: "15/09/2024 - 15/12/2024",
    goals: [
      "Thiết kế ứng dụng với Spring Boot",
      "Triển khai REST API và bảo mật cơ bản",
      "Quản lý dữ liệu với JPA/Hibernate",
      "Triển khai dự án mini end-to-end",
    ],
    requirements: ["Nắm vững Java core", "Hiểu OOP và collections"],
    lessons: [
      {
        title: "Buổi 1: Kiến trúc Spring Boot",
        duration: "2 giờ",
        topics: ["Spring Boot starter", "Dependency Injection"],
        status: "done",
      },
      {
        title: "Buổi 2: REST API & Validation",
        duration: "2 giờ",
        topics: ["Controller/Service", "DTO & Validation"],
        status: "pending",
      },
      {
        title: "Buổi 3: JPA & Hibernate",
        duration: "2 giờ",
        topics: ["Entity/Repository", "Relationships"],
        status: "pending",
      },
    ],
    progress: 8,
    sessionsDone: 1,
    sessionsTotal: 24,
    materialsCount: 6,
    materials: [
      { title: "Slide Spring Boot Intro", size: "18 MB", updatedAt: "02/09/2025", files: 1 },
      { title: "API Spec draft", size: "1.2 MB", updatedAt: "03/09/2025", files: 1 },
    ],
  },
  "JAVA101-OL": {
    code: "JAVA101-OL",
    name: "Lập trình Java trực tuyến",
    level: "trực tuyến",
    description: "Phiên bản online với mentor, bài tập và buổi live hàng tuần.",
    students: 32,
    schedule: "Thứ 7 | 09:00 - 11:00 (Online)",
    room: "Zoom/Meet",
    dateRange: "05/09/2024 - 05/12/2024",
    goals: [
      "Nắm vững Java cơ bản qua học online",
      "Thực hành bài tập có mentor hỗ trợ",
      "Hoàn thành mini project cuối khóa",
    ],
    requirements: ["Laptop và kết nối internet ổn định"],
    lessons: [
      {
        title: "Buổi 1: Làm quen Java online",
        duration: "2 giờ",
        topics: ["IDE setup", "Hello World", "Quy ước lớp online"],
        status: "done",
      },
      {
        title: "Buổi 2: Kiểu dữ liệu & toán tử",
        duration: "2 giờ",
        topics: ["Primitive", "Toán tử", "Bài tập live coding"],
        status: "pending",
      },
      {
        title: "Buổi 3: Vòng lặp & điều kiện",
        duration: "2 giờ",
        topics: ["if/else", "loop practice"],
        status: "pending",
      },
    ],
    progress: 12,
    sessionsDone: 2,
    sessionsTotal: 18,
    materialsCount: 3,
    materials: [
      { title: "Checklist buổi online", size: "0.6 MB", updatedAt: "04/09/2025", files: 1 },
      { title: "Slide tuần 1", size: "7 MB", updatedAt: "04/09/2025", files: 1 },
    ],
  },
}

const levelStyles = {
  "cơ bản": "bg-cyan-100 text-cyan-700",
  "nâng cao": "bg-purple-100 text-purple-700",
  "trực tuyến": "bg-emerald-100 text-emerald-700",
}

export default function SubjectDetailPage() {
  const params = useParams<{ code?: string }>()
  const code = params?.code?.toString().toUpperCase()
  const detail = code ? subjectDetails[code] : undefined

  if (!detail) {
    return (
      <div className="space-y-3">
        <Link href="/teacher/subjects" className="text-sm text-blue-600 hover:underline">
          Quay lại danh sách
        </Link>
        <p className="text-sm text-red-600">Không tìm thấy môn học.</p>
      </div>
    )
  }

  const [tab, setTab] = useState<"lessons" | "materials">("lessons")

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

      <div className="flex gap-1 mt-6 bg-cyan-50 w-fit rounded-full p-1">
        <button
          onClick={() => setTab("lessons")}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === "lessons" ? "bg-white shadow text-cyan-700" : "text-gray-600 hover:text-black"
          }`}
        >
          Lộ trình học
        </button>
        <button
          onClick={() => setTab("materials")}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === "materials" ? "bg-white shadow text-cyan-700" : "text-gray-600 hover:text-black"
          }`}
        >
          Tài liệu
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-4">
          {tab === "lessons" ? (
            <Card key="lessons" className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Lộ trình từng buổi học</CardTitle>
                <p className="text-sm text-gray-500">Chi tiết nội dung và tiến độ các buổi học</p>
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
                    <div className="flex-1 border border-gray-300 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                          <p className="text-sm text-gray-600">Thời lượng: {lesson.duration}</p>
                        </div>
                        {lesson.status === "done" ? (
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
          ) : (
            <Card key="materials" className="border-gray-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Tài liệu theo buổi học</CardTitle>
                <p className="text-sm text-gray-500">Slide, bài tập và tài liệu tham khảo</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {detail.materials.map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    className="border border-gray-200 rounded-xl p-3 flex flex-wrap items-center gap-3"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-[250px]">
                      <div className="w-12 h-12 rounded-xl bg-[#B5D3DA]" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <div className="text-xs text-gray-600 flex gap-3">
                          <span>{item.size}</span>
                          <span>{item.files} files</span>
                          <span>{item.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Tải xuống
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4" />
      </div>
    </div>
  )
}
