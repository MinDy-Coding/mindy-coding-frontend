import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from "next/link"


export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/logos/logo.png" 
              alt="Mindy Coding Logo"
              width={60}
              height={60}
              className="h-50 w-30"
            />
          
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="coursesEnrolment" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Khóa học
            </Link>
            <Link 
              href="coursesEnrollment" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Lộ trình học
            </Link>
            <a 
              href="#" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Blog
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Đăng ký thông tin
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* Tra cứu thông tin - Secondary Button */}
            <Button 
              variant="secondary" 
              className="px-4 py-2 text-sm font-medium"
            >
              Tra cứu thông tin
            </Button>

            {/* Đăng ký - Outline Button */}
            <Button 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Đăng ký
            </Button>

            {/* Đăng nhập - Default/Primary Button */}
            <Button 
              className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary/90 text-white"
            >
              Đăng nhập
            </Button>
          </div>

          {/* Mobile Menu Button (Hidden for now) */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}