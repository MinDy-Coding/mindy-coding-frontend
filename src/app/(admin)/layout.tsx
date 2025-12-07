"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Layers,
  CreditCard,
  FileText,
  Settings,
  ArrowLeft,
  User,
  ClipboardList,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hàm kiểm tra route có đang active không
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  // Hàm tạo CSS classes cho navigation links
  const getNavLinkClasses = (path: string) => {
    const baseClasses =
      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors font-medium";

    if (isActive(path)) {
      return `${baseClasses} bg-primary/10 text-primary`; // Trạng thái active
    }

    return `${baseClasses} text-gray-700 hover:bg-gray-100`; // Trạng thái bình thường
  };

  return (
    // Container chính - chiếm full screen height và flex column
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header cố định ở trên cùng */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          {/* Logo và tiêu đề */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logos/logo.png"
              alt="MinDy Coding Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>

          {/* Các nút action ở header */}
          <div className="flex items-center space-x-4">
            {/* Nút về trang chủ */}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                <span>Về trang chủ</span>
              </Link>
            </Button>

            {/* Thông tin admin user */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Admin user
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Phần nội dung chính bên dưới header */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar cố định bên trái */}
        <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {/* Link Dashboard */}
            <Link href="/dashboard" className={getNavLinkClasses("/dashboard")}>
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            {/* Link Quản lý User */}
            <Link
              href="/users-management"
              className={getNavLinkClasses("/users-management")}
            >
              <Users className="w-5 h-5" />
              <span>Quản lý User</span>
            </Link>

            {/* Link Quản lý lớp học */}
            <Link
              href="/classes-management"
              className={getNavLinkClasses("/classes-management")}
            >
              <BookOpen className="w-5 h-5" />
              <span>Quản lý lớp học</span>
            </Link>

            {/* Link Quản lý môn học */}
            <Link
              href="/subject-managerment"
              className={getNavLinkClasses("/subject-managerment")}
            >
              <Layers className="w-5 h-5" />
              <span>Quản lý môn học</span>
            </Link>

            {/* Link Quản lý đăng ký tư vấn  */}
            <Link
              href="/consultation-management"
              className={getNavLinkClasses("/consultation-management")}
            >
              <ClipboardList className="w-5 h-5" />
              <span>Quản lý tư vấn</span>
            </Link>

            {/* Link Thanh toán & Ưu đãi */}
            <Link
              href="/payments-and-promotions"
              className={getNavLinkClasses("/payments-and-promotions")}
            >
              <CreditCard className="w-5 h-5" />
              <span>Thanh toán & Ưu đãi</span>
            </Link>

            {/* Link Quản lý Blog */}
            <Link
              href="/blogs-management"
              className={getNavLinkClasses("/blogs-management")}
            >
              <FileText className="w-5 h-5" />
              <span>Quản lý Blog</span>
            </Link>

            {/* Link Hệ thống & Báo cáo */}
            <Link
              href="/system-reports"
              className={getNavLinkClasses("/system-reports")}
            >
              <Settings className="w-5 h-5" />
              <span>Hệ thống & Báo cáo</span>
            </Link>
          </nav>
        </aside>

        {/* Khu vực nội dung chính - có thể scroll */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
