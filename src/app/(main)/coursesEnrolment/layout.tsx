import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - xuất hiện trên tất cả trang trong (main) group */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer - xuất hiện trên tất cả trang trong (main) group */}
      <Footer />
    </div>
  )
}