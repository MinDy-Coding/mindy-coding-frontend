'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Mail, 
  Chrome, 
  Facebook, 
  Github, 
  X 
} from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Register Modal */}
      <div className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/50">
        
        {/* Close Button */}
        <button className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image 
              src="/logos/logo.png" 
              alt="MinDy Coding Logo"
              width={60}
              height={60}
              className="w-15 h-15"
            />
          </div>
          <h3 className="text-lg font-medium text-primary">
            MinDy Coding
          </h3>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Đăng ký tài khoản MinDy
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
          </p>
        </div>

        {/* Registration Methods */}
        <div className="space-y-3 mb-6">
          
          {/* Email Registration */}
          <Button asChild
            variant="outline"
            size="lg"
            className="w-full h-12 bg-white/80 hover:bg-white border-gray-200 text-gray-700 font-medium justify-center"
          >
            
            <Link href="/register2" className="font-medium text-gray-700 hover:text-gray-900">
            <Mail className="w-5 h-5 mr-3 text-gray-500" />
              Sử dụng email
            </Link>
          </Button>

          {/* Google Registration */}
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 bg-white/80 hover:bg-white border-gray-200 text-gray-700 font-medium justify-center"
          >
            <Chrome className="w-5 h-5 mr-3 text-red-500" />
            Đăng ký với Google
          </Button>

          {/* Facebook Registration */}
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 bg-white/80 hover:bg-white border-gray-200 text-gray-700 font-medium justify-center"
          >
            <Facebook className="w-5 h-5 mr-3 text-blue-600" />
            Đăng ký với Facebook
          </Button>

          {/* GitHub Registration */}
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 bg-white/80 hover:bg-white border-gray-200 text-gray-700 font-medium justify-center"
          >
            <Github className="w-5 h-5 mr-3 text-gray-900" />
            Đăng ký với Github
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">
            Bạn đã có tài khoản?{' '}
            <Link 
              href="/login" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Đăng nhập
            </Link>
          </p>
          
          <p className="text-sm">
            <Link 
              href="/forgot-password" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Quên mật khẩu?
            </Link>
          </p>
        </div>

        
      </div>
    </div>
  )
}