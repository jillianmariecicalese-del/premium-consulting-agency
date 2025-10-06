
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: "Tender & Contract Sourcing",
    description: "We identify and secure lucrative government tenders and contracts across various sectors, ensuring you never miss an opportunity.",
    icon: "/images/service-1.jpg",
    features: ["Government tender identification", "Contract opportunity mapping", "Sector-specific sourcing", "Real-time notifications"]
  },
  {
    title: "Bidder & Supplier Outsourcing",
    description: "Connect international businesses with local suppliers and vice versa, creating strategic partnerships for successful project delivery.",
    icon: "/images/service-2.jpg",
    features: ["International-local partnerships", "Supplier network connections", "Strategic alliance building", "Partnership facilitation"]
  },
  {
    title: "Supply Chain Management",
    description: "Comprehensive end-to-end procurement solutions that streamline your supply chain and optimize operational efficiency.",
    icon: "/images/service-3.jpg",
    features: ["End-to-end procurement", "Supply chain optimization", "Operational efficiency", "Cost reduction strategies"]
  },
  {
    title: "Tender Documentation",
    description: "Professional bid preparation and compliance documentation services to ensure your proposals meet all government requirements.",
    icon: "/images/service-4.jpg",
    features: ["Professional bid preparation", "Compliance documentation", "Proposal optimization", "Submission assistance"]
  }
]

export default function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="section-padding brand-grey-bg">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold brand-navy mb-4">Our Core Services</h2>
          <p className="text-xl brand-grey max-w-3xl mx-auto">
            Premium Consulting Agency specializes in connecting businesses with government 
            opportunities through our comprehensive range of consulting services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold brand-navy">{service.title}</h3>
                  </div>
                  
                  <p className="brand-grey mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm brand-grey">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/services">
                    <Button className="w-full brand-navy-bg hover:bg-blue-800 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="brand-navy-bg hover:bg-blue-800 px-8 py-3">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
