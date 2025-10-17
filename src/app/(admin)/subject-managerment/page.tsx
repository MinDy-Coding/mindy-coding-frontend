import React from 'react'
import Image from 'next/image'
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
    BookOpen,
    Plus,
    Search,
    Users,
    Calendar,
    Layers,
} from 'lucide-react'

export default function SubjectManagerPage() {
    const subjects = [
        {
            code: 'JAVA101',
            name: 'Lập trình JAVA cơ bản',
            level: 'Cơ bản',
            status: 'Hoạt động',
            description: 'Khóa học cung cấp kiến thức nền tảng về Java và OOP.',
            hours: 40,
            sessions: 20,
            activeClasses: 5,
            students: 125,
            price: '5.000.000 VND',
        },
        {
            code: 'JS101',
            name: 'Lập trình JavaScript cơ bản',
            level: 'Cơ bản',
            status: 'Hoạt động',
            description: 'Làm chủ cú pháp JavaScript, DOM, và nền tảng cho Frontend.',
            hours: 36,
            sessions: 18,
            activeClasses: 3,
            students: 98,
            price: '4.000.000 VND',
        },
        {
            code: 'PY101',
            name: 'Lập trình Python cơ bản',
            level: 'Cơ bản',
            status: 'Nháp',
            description: 'Làm quen Python, biến, cấu trúc điều khiển, và hàm.',
            hours: 30,
            sessions: 15,
            activeClasses: 0,
            students: 0,
            price: '4.500.000 VND',
        },
        {
            code: 'C101',
            name: 'Lập trình C cơ bản',
            level: 'Cơ bản',
            status: 'Hoạt động',
            description: 'Cơ sở ngôn ngữ C: con trỏ, mảng, struct, và quản lý bộ nhớ.',
            hours: 40,
            sessions: 20,
            activeClasses: 2,
            students: 60,
            price: '4.000.000 VND',
        },
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Hoạt động':
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Hoạt động</Badge>
            case 'Nháp':
                return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Nháp</Badge>
            default:
                return <Badge variant="secondary">{status}</Badge>
        }
    }

    const getSubjectIdentity = (code: string) => {
        // Simple visual identity: colored circle with abbreviation
        const upper = code.toUpperCase()
        const colorClasses: Record<string, string> = {
            JAVA: 'bg-red-100 text-red-700',
            JS: 'bg-yellow-100 text-yellow-700',
            PY: 'bg-blue-100 text-blue-700',
            C: 'bg-gray-100 text-gray-700',
        }
        const key = Object.keys(colorClasses).find(k => upper.startsWith(k)) || 'C'
        const classes = colorClasses[key]
        const label = key
        return (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${classes}`}>
                {label}
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Quản lý môn học</h1>
                    <p className="text-gray-600 mt-1">Xem và quản lý tất cả môn học</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Tạo môn
                </Button>
            </div>

            {/* Search and Filter */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">Danh sách môn học</CardTitle>
                    <p className="text-sm text-gray-600">Tìm kiếm và lọc các môn theo kì</p>
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
                                <SelectItem value="active">Đang hoạt động</SelectItem>
                                <SelectItem value="draft">Nháp</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Subjects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {subjects.map((subject, idx) => (
                            <Card key={idx} className={`border border-gray-200 ${subject.status === 'Nháp' ? 'opacity-70' : ''}`}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <div className="flex items-center flex-wrap gap-2 mb-1">
                                                {getSubjectIdentity(subject.code)}
                                                <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">{subject.level}</Badge>
                                                {getStatusBadge(subject.status)}
                                            </div>
                                            <p className="text-xs text-gray-500">Mã môn: {subject.code}</p>
                                            <p className="text-sm text-gray-600 mt-1">{subject.description}</p>
                                        </div>
                                    </div>

                                    {/* Stats box with explicit labels */}
                                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="text-center">
                                                <div className="text-gray-900 font-semibold">{subject.hours}</div>
                                                <div className="text-xs text-gray-600 mt-0.5">Thời lượng (giờ)</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-gray-900 font-semibold">{subject.students}</div>
                                                <div className="text-xs text-gray-600 mt-0.5">Học viên</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-gray-900 font-semibold">{subject.sessions}</div>
                                                <div className="text-xs text-gray-600 mt-0.5">Số buổi</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-gray-900 font-semibold">{subject.activeClasses}</div>
                                                <div className="text-xs text-gray-600 mt-0.5">Lớp đang dạy</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-gray-900">{subject.price}</p>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">Chi Tiết</Button>
                                            <Button variant="outline" size="sm">Sửa</Button>
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


