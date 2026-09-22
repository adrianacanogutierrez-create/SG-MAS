import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsappFloat from "@/components/landing/WhatsappFloat"

export default function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-20 sm:pb-24">{children}</main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}
