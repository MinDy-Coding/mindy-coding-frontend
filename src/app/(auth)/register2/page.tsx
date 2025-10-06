'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import Link from 'next/link'

export default function Register2Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 flex items-center justify-center p-4">
      
      {/* Logo at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center mb-4 flex-shrink-0">
          <Image 
            src="/logos/logo-mindy.png" 
            alt="MinDy Coding Logo"
            width={130}
            height={130}
            className="w-15 h-15 mb-2"
          />
        </div>
      </div>

      {/* Registration Form Card */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg border border-gray-100 mt-20">
        
        {/* Form Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            <span className="text-primary">Đăng ký</span> tài khoản
          </h1>
          <p className="text-gray-600 text-sm">
            Tạo tài khoản mới để bắt đầu hành trình học tập
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1 block">
                Họ
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="h-10"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1 block">
                Tên
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="h-10"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-10"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
              Số điện thoại
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="h-10"
              required
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
              Mật khẩu
            </Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-10"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-1 block">
              Xác nhận mật khẩu
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="h-10"
              required
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2 py-2">
            <Checkbox
              id="terms"
              checked={formData.agreeTerms}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreeTerms: checked as boolean }))
              }
              className="mt-0.5"
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              Tôi đồng ý với{' '}
              <Link href="/terms" className="text-primary hover:text-primary/80 underline">
                Điều khoản sử dụng
              </Link>
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-semibold mt-6"
            
          >
            Đăng ký
          </Button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <Link 
              href="/login" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}