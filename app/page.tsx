import Navbar from "@/components/header"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero"

export default function Page() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen">
       <Navbar /> 
      <HeroSection />  {/* Hero ALWAYS BELOW */}
    </main>
  );
}
