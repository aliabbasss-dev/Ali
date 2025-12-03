import Navbar from "@/components/header";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import About from "@/components/About";
import Ali from "@/components/Ali";
import PerformanceMentorship from "@/components/PerformanceMentorship";
import SkillsDubaiAgents from "@/components/SkillsDubaiAgents";
import AcceptMentorship from "@/components/AcceptMentorship";
import StrategySession from "@/components/StrategySession";
import HowSessionsWork from "@/components/HowSessionsWork";
import Investment from "@/components/Investment";
import ReferralPrivileges from "@/components/ReferralPrivileges";
import FAQSection from "@/components/FAQSection";
import UpgradeCTA from "@/components/UpgradeCTA";
import QuestionForm from "@/components/QuestionForm";

export default function Page() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <Ali />
      <PerformanceMentorship />
      <SkillsDubaiAgents />
      <AcceptMentorship />
      <StrategySession />
      <HowSessionsWork />
      <Investment />
      <ReferralPrivileges/>
      <FAQSection />
      <Testimonials />
      <UpgradeCTA />  
      <QuestionForm />
      <Footer />
    </main>
  );
}
