"use client";

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
    <main className="bg-[#0f0f0f] min-h-screen relative">

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* ALI SECTION */}
      <section id="ali">
        <Ali />
      </section>

      {/* PERFORMANCE MENTORSHIP */}
      <section id="performance">
        <PerformanceMentorship />
      </section>

      {/* SKILLS FOR DUBAI AGENTS */}
      <section id="skills">
        <SkillsDubaiAgents />
      </section>

      {/* WHO I ACCEPT */}
      <section id="accept">
        <AcceptMentorship />
      </section>

      {/* STRATEGY SESSION */}
      <section id="strategy">
        <StrategySession />
      </section>

      {/* HOW SESSIONS WORK */}
      <section id="sessions">
        <HowSessionsWork />
      </section>

      {/* INVESTMENT */}
      <section id="investment">
        <Investment />
      </section>

      {/* REFERRAL PRIVILEGES */}
      <section id="referral">
        <ReferralPrivileges />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* UPGRADE CTA */}
      <section id="upgrade">
        <UpgradeCTA />
      </section>

      {/* CONTACT FORM */}
      <section id="contact">
        <QuestionForm />
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
