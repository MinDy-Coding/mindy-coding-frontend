import React from 'react'
import { Button } from './button'
import Image from 'next/image'

export default function CardLesson() {
  return (
    <div>
       {/* Course Cards Section */}
        <section className="mt-20">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Frontend Course Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {/* Logo */}
                          <div className="flex items-center">
                            <Image 
                              src="/logos/logo-mindy.png" 
                              alt="Mindy Coding Logo"
                              width={60}
                              height={60}
                              className="h-50 w-30"
                            />
                          
                          </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    Lộ trình Frontend Developer
                  </h3>
                  <p className="text-sm text-gray-600">
                    Từ HTML/CSS cơ bản đến React/Vue.js nâng cao
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Số khóa học</span>
                  <span className="text-sm font-bold text-gray-900">8 khóa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Thời gian</span>
                  <span className="text-sm font-bold text-gray-900">3 tháng</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Cấp độ</span>
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                    Cơ bản → Nâng cao
                  </span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                  React
                </span>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                Bắt đầu lộ trình
              </Button>
            </div>

            {/* Empty Card Placeholders */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-48 flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  Khóa học sắp ra mắt
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-48 flex items-center justify-center">
                <p className="text-gray-400 text-center">
                  Khóa học sắp ra mắt
                </p>
              </div>
            </div>

          </div>
        </section> 
    </div>
  )
}
