import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {  Search } from 'lucide-react'
import Image from 'next/image'
import CardLesson from '@/components/ui/cardLesson'

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            KHỞI ĐẦU Ở{' '}
            <span className="text-primary">MIN</span>
            {' '}- BÙNG NỔ Ở{' '}
            <span className="text-primary">MAX</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            DẠY THÊM VỀ CÁC MÔN HỌC LẬP TRÌNH
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Khám phá lộ trình học lập trình hiệu quả, được xây dựng bởi giảng viên giàu 
            kinh nghiệm, giúp bạn từng bước nâng cao kỹ năng và đạt thành công trong 
            học tập và sự nghiệp.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="flex rounded-lg shadow-sm">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm khóa học, lớp học, bài viết, video, ..."
                  className="pl-12 pr-4 py-4 h-14 text-base border-gray-300 rounded-l-lg rounded-r-none focus:border-primary focus:ring-2 focus:ring-primary/20 border-r-0"
                />
              </div>
              <Button 
                
                className="px-8 h-14 bg-primary hover:bg-primary/90 text-white rounded-r-lg rounded-l-none text-base font-semibold"
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
          
              className="px-8 py-4 h-14 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-lg"
            >
              Bắt đầu học ngay
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="px-8 py-4 h-14 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 text-base font-semibold rounded-lg"
            >
              Khám phá lộ trình
            </Button>
          </div>
        </section>

        <CardLesson />

      </div>
    </div>
  )
}