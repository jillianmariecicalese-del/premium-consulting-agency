
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import WhyChooseUs from '@/components/why-choose-us'
import GovernmentPartnerships from '@/components/government-partnerships'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <GovernmentPartnerships />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
