'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 flex flex-col items-center justify-center p-4 py-4">
      
      {/* Logo Section - Tách biệt hoàn toàn */}
      <div className="flex flex-col items-center mb-4 flex-shrink-0">
        <Image 
          src="/logos/logo-mindy.png" 
          alt="MinDy Coding Logo"
          width={200}
          height={200}
          className="w-40 h-40 mb-2"
        />
      
      </div>

      
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg border border-gray-100 flex-shrink-0">
        
        {/* Form Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Đăng nhập
          </h1>
          <p className="text-gray-600 text-sm">
            Đăng nhập vào tài khoản của bạn để tiếp tục học tập
          </p>
        </div>

        {/* Rest of your form stays the same */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="h-12 border-gray-200"
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
              className="h-12 border-gray-200"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => 
                  handleInputChange('rememberMe', checked as boolean)
                }
              />
              <Label htmlFor="remember" className="text-sm text-gray-600">
                Ghi nhớ đăng nhập
              </Label>
            </div>
            
            <Link 
              href="/forgot-password" 
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Quên mật khẩu?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold mt-6"
          >
            Đăng nhập
          </Button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Chưa có tài khoản?{' '}
            <Link 
              href="/register1" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}