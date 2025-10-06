
"use client"

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Handshake, Building } from 'lucide-react'

const partnerships = [
  {
    title: "Ministry Partnerships",
    image: "/images/B1.jpg",
    description: "Direct partnerships with key government ministries and departments across Uganda."
  },
  {
    title: "Corporate Meetings",
    image: "/images/B2.jpg",
    description: "High-level corporate meetings with government officials and international partners."
  },
  {
    title: "Government Relations",
    image: "/images/B3.jpg",
    description: "Strong relationships with procurement officers and decision-makers."
  },
  {
    title: "International Cooperation",
    image: "/images/B4.jpg",
    description: "Facilitating international business partnerships with local government entities."
  },
  {
    title: "Tender Facilitation",
    image: "/images/B5.jpg",
    description: "Active participation in tender processes and government procurement meetings."
  },
  {
    title: "Strategic Alliances",
    image: "/images/B6.jpg",
    description: "Building strategic alliances between government and private sector partners."
  }
]

export default function GovernmentPartnerships() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold brand-navy mb-4">Government Partnerships & Relations</h2>
          <p className="text-xl brand-grey max-w-4xl mx-auto">
            Our strong relationships with government officials, ministers, and procurement departments 
            across Uganda enable us to facilitate successful partnerships and tender opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={partnership.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg bg-white overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={partnership.image}
                    alt={partnership.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{partnership.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="brand-grey leading-relaxed text-sm">
                    {partnership.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Building className="h-8 w-8 text-blue-900" />
              </div>
              <h4 className="text-3xl font-bold brand-navy mb-2">15+</h4>
              <p className="brand-grey">Government Ministries</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Handshake className="h-8 w-8 text-blue-900" />
              </div>
              <h4 className="text-3xl font-bold brand-navy mb-2">200+</h4>
              <p className="brand-grey">Successful Partnerships</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <h4 className="text-3xl font-bold brand-navy mb-2">50M+</h4>
              <p className="brand-grey">USD in Tender Value</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
