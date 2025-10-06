
"use client"

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, FileText, Users, TrendingUp, Package } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FAQSection from './faq-section'
import AboutSection from './about-section'
import ContactSection from './contact-section'

const detailedServices = [
  {
    title: "Tender & Contract Sourcing",
    description: "Our comprehensive tender sourcing service connects you with high-value government opportunities across all sectors. We maintain real-time monitoring systems and direct relationships with procurement departments to ensure you never miss a lucrative tender.",
    icon: FileText,
    features: [
      "Real-time government tender monitoring across all ministries",
      "Early opportunity identification through insider networks",
      "Sector-specific tender alerts and notifications",
      "Detailed tender analysis and feasibility assessment",
      "Pre-qualification assistance and requirements guidance",
      "Bid submission deadlines and process management"
    ],
    benefits: [
      "Access to exclusive tender opportunities worth $100M+ annually",
      "50% faster opportunity identification vs. traditional methods",
      "95% success rate in pre-qualification processes"
    ]
  },
  {
    title: "Bidder & Supplier Outsourcing",
    description: "Bridge the gap between international businesses and local opportunities through our extensive network. We facilitate strategic partnerships that combine international expertise with local market knowledge for winning combinations.",
    icon: Users,
    features: [
      "International business partnership facilitation",
      "Local supplier network access and vetting",
      "Joint venture structuring and legal compliance",
      "Cross-border contract negotiation support",
      "Cultural and regulatory guidance services",
      "Ongoing partnership management and support"
    ],
    benefits: [
      "Access to 500+ verified local and international partners",
      "Reduced market entry costs by up to 60%",
      "Accelerated partnership formation (2-4 weeks vs. 3-6 months)"
    ]
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end procurement solutions that optimize your supply chain from sourcing to delivery. Our proven methodologies ensure cost efficiency, quality control, and timely project execution across all sectors.",
    icon: Package,
    features: [
      "Complete supply chain design and optimization",
      "Vendor selection, evaluation, and management",
      "Quality assurance and compliance monitoring",
      "Logistics coordination and delivery management",
      "Cost optimization and budget management",
      "Risk assessment and mitigation strategies"
    ],
    benefits: [
      "Average 30% cost reduction in procurement processes",
      "99% on-time delivery rate across all projects",
      "Zero compliance violations in government contracts"
    ]
  },
  {
    title: "Tender Documentation",
    description: "Professional bid preparation and compliance documentation services that maximize your chances of winning. Our expert team ensures all requirements are met with compelling, compliant proposals.",
    icon: TrendingUp,
    features: [
      "Professional proposal writing and formatting",
      "Compliance documentation and legal review",
      "Technical specification development",
      "Financial proposal optimization",
      "Supporting document preparation and certification",
      "Submission process management and follow-up"
    ],
    benefits: [
      "85% tender success rate (vs. 15% industry average)",
      "100% compliance with government requirements",
      "Average 40% higher scoring vs. competitor proposals"
    ]
  }
]

export default function ServicesDetailPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient section-padding text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert guidance for every stage of your government tender journey
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3"
              onClick={scrollToContact}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50" ref={ref}>
        <div className="container-custom">
          <div className="space-y-16">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                        <IconComponent className="h-8 w-8 text-blue-900" />
                      </div>
                      <h2 className="text-3xl font-bold brand-navy">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg brand-grey leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold brand-navy">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="brand-grey">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="border-0 shadow-md bg-blue-50">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold brand-navy mb-3">Proven Results:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="brand-grey font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                    <Card className="border-0 shadow-xl overflow-hidden">
                      <div className="relative h-80 lg:h-96">
                        <Image
                          src="https://bryghtpath.com/wp-content/uploads/2025/05/business-meeting-in-a-bright-office-16-9-scaled.jpg"
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="border-0 shadow-lg bg-blue-900 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let Premium Consulting Agency help you unlock government tender opportunities 
                  and grow your business with our proven expertise.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3"
                  onClick={scrollToContact}
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Extended FAQ Section */}
      <FAQSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
