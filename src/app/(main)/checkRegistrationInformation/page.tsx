"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Mail,
  Phone,
  User,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  CreditCard,
  GraduationCap,
  ChevronRight,
  AlertCircle,
  FileText,
  CheckSquare,
  Circle,
} from "lucide-react";

export default function CheckRegistrationInformationPage() {
  const [searchMethod, setSearchMethod] = useState("email");
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  // Mock data for demonstration
  const registrationData = {
    id: "DA1001",
    personalInfo: {
      name: "Lương Gia Hào",
      email: "daianhmin2025@gmail.com",
      phone: "0912345678",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    courseInfo: {
      name: "Lập trình React",
      instructor: "Lê Thành Đạt",
      schedule: "Thứ 2, 4, 6 - 19:00-21:00",
      mode: "Offline tại trung tâm",
    },
    timeline: [
      {
        status: "completed",
        title: "Đăng ký thành công",
        date: "15/09/2025",
        description: "Hệ thống đã ghi nhận thông tin đăng ký của bạn.",
      },
      {
        status: "completed",
        title: "Đã xếp lớp",
        date: "20/09/2025",
        description: "Bạn đã được xếp vào lớp K15-Sáng.",
      },
      {
        status: "current",
        title: "Thanh toán học phí",
        date: "25/09/2025",
        description: "Vui lòng hoàn tất học phí để giữ chỗ.",
      },
      {
        status: "upcoming",
        title: "Bắt đầu học",
        date: "02/10/2025",
        description: "Ngày khai giảng dự kiến.",
      },
    ],
  };

  const studentData = {
    courses: [
      {
        courseId: "COURSE-1",
        title: registrationData.courseInfo.name,
        status: "payment_pending", // 'payment_pending' | 'enrolled'
        classCode: "K15-Sáng",
        currentStep: "Thanh toán học phí",
        regId: registrationData.id,
        tuitionStatus: "Chờ thanh toán",
        startDate: "02/10/2025",
        timeline: registrationData.timeline.map((item) => ({
          stage: item.title,
          status: item.status,
          date: item.date,
          desc: item.description || "",
        })),
      },
    ],
  };

  const toggleCourseDetail = (courseId: string) => {
    setExpandedCourse((prev) => (prev === courseId ? null : courseId));
  };

  const handleSearch = () => {
    setShowResult(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tra cứu <span className="text-primary">thông tin</span> đã đăng ký
          </h1>
          <p className="text-lg text-gray-600">
            Nhập email hoặc số điện thoại để kiểm tra trạng thái đăng ký khóa
            học của bạn
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Search className="w-5 h-5 text-primary mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">
                Tìm kiếm thông tin đăng ký
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Chọn phương thức tìm kiếm và nhập thông tin của bạn
            </p>

            {/* Search Method Tabs */}
            <Tabs
              value={searchMethod}
              onValueChange={setSearchMethod}
              className="mb-6"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Tìm theo email
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Tìm theo SĐT
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="mt-4">
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Địa chỉ email đã đăng ký
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="mb-4"
                  />
                </div>
              </TabsContent>

              <TabsContent value="phone" className="mt-4">
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                  >
                    Số điện thoại đã đăng ký
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại của bạn"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="mb-4"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <Button
              onClick={handleSearch}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Tìm kiếm
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        {showResult && (
          <>
            {/* 1. Personal Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row items-center gap-6 overflow-hidden mb-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4" />
              <img
                src={registrationData.personalInfo.avatar}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-4 border-blue-50 shadow-sm shrink-0"
              />
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  {registrationData.personalInfo.name}
                </h2>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Mail size={14} /> {registrationData.personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={14} /> {registrationData.personalInfo.phone}
                  </span>
                </div>
              </div>
            </div>


            {/* 2. Registration Status List */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Hồ sơ đăng ký
              </h3>

              {studentData.courses.map((course) => {
                const isExpanded = expandedCourse === course.courseId;

                return (
                  <div
                    key={course.courseId}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-4 overflow-hidden transition-all"
                  >
                    {/* Header Summary */}
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex flex-col sm:flex-row gap-4 justify-between items-center"
                      onClick={() => toggleCourseDetail(course.courseId)}
                    >
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg text-gray-800">
                            {course.title}
                          </h4>
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${
                              course.status === "payment_pending"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {course.status === "payment_pending"
                              ? "Chờ thanh toán"
                              : "Đã nhập học"}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mb-1">
                          Lớp đã xếp:{" "}
                          <span className="font-bold text-gray-800">
                            {course.classCode}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mb-3">
                          Thời gian học:{" "}
                          <span className="font-medium text-gray-800">
                            {registrationData.courseInfo.schedule}
                          </span>
                        </div>

                        {/* Simple Status Text */}
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100 inline-flex w-full sm:w-auto">
                          <Clock size={16} className="text-blue-500" />
                          <span>
                            Bước hiện tại: <b>{course.currentStep}</b>
                          </span>
                        </div>
                      </div>

                      <div className="text-blue-600">
                        {isExpanded ? (
                          <ChevronRight className="rotate-90 transition-transform" />
                        ) : (
                          <ChevronRight className="transition-transform" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Detail: Registration Timeline */}
                    {isExpanded && (
                      <div className="bg-gray-50 p-6 border-t border-gray-100 animate-in slide-in-from-top-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">
                              Mã hồ sơ
                            </div>
                            <div className="font-bold text-gray-900 flex items-center gap-2">
                              <FileText size={16} className="text-blue-500" />{" "}
                              {course.regId}
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">
                              Tình trạng học phí
                            </div>
                            <div
                              className={`font-bold flex items-center gap-2 ${
                                course.tuitionStatus === "Chờ thanh toán"
                                  ? "text-orange-600"
                                  : "text-green-600"
                              }`}
                            >
                              <CreditCard size={16} /> {course.tuitionStatus}
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center">
                            <div className="text-gray-500 text-xs uppercase font-bold mb-1">
                              Ngày khai giảng
                            </div>
                            <div className="font-bold text-gray-900 flex items-center gap-2">
                              <Calendar size={16} className="text-blue-500" />{" "}
                              {course.startDate}
                            </div>
                          </div>
                        </div>

                        {/* Alert box for Payment Pending */}
                        {course.status === "payment_pending" && (
                          <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl mb-8 flex items-start gap-3">
                            <AlertCircle
                              className="text-orange-600 shrink-0 mt-1"
                              size={20}
                            />
                            <div>
                              <h4 className="font-bold text-orange-800">
                                Bạn đã được xếp lớp thành công!
                              </h4>
                              <p className="text-orange-700 text-sm mt-1">
                                Vui lòng hoàn tất học phí trước ngày{" "}
                                <b>20/09/2025</b> để giữ chỗ.
                                <br />
                                Sau thời gian này, chỗ của bạn có thể được
                                nhường cho học viên khác.
                              </p>
                              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
                                Thanh toán ngay
                              </button>
                            </div>
                          </div>
                        )}

                        <h5 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                          <CheckSquare size={18} className="text-blue-500" />{" "}
                          Tiến độ xử lý hồ sơ
                        </h5>

                        <div className="relative pl-4 sm:pl-8 border-l-2 border-gray-200 space-y-8 pb-2">
                          {course.timeline.map((stage: any, idx: number) => {
                            let icon;
                            let colorClass;

                            if (stage.status === "completed") {
                              icon = (
                                <CheckCircle size={16} className="text-white" />
                              );
                              colorClass = "bg-green-500 border-green-500";
                            } else if (stage.status === "current") {
                              icon = <Clock size={16} className="text-white" />;
                              colorClass =
                                "bg-blue-600 border-blue-600 ring-4 ring-blue-100";
                            } else {
                              icon = (
                                <Circle size={14} className="text-gray-400" />
                              );
                              colorClass = "bg-gray-100 border-gray-300";
                            }

                            return (
                              <div key={idx} className="relative pl-6">
                                {/* Dot on timeline */}
                                <div
                                  className={`absolute -left-[2.3rem] sm:-left-[2.35rem] w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 ${colorClass}`}
                                >
                                  {icon}
                                </div>

                                <div
                                  className={`rounded-lg p-3 ${
                                    stage.status === "current"
                                      ? "bg-white shadow-md border border-blue-100"
                                      : ""
                                  }`}
                                >
                                  <div className="flex justify-between items-start">
                                    <div
                                      className={`font-bold text-base ${
                                        stage.status === "completed"
                                          ? "text-gray-900"
                                          : stage.status === "current"
                                          ? "text-blue-600"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      {stage.stage}
                                    </div>
                                    {stage.date && (
                                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded ml-2 whitespace-nowrap">
                                        {stage.date}
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {stage.desc}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>


            {/* Support Contact */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Cần hỗ trợ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Hotline</h4>
                      <p className="text-sm text-gray-600">
                        1900-6969 (8:00-21:00)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Email hỗ trợ
                      </h4>
                      <p className="text-sm text-gray-600">
                        daianhdat2025@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
