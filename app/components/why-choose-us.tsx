
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, TrendingUp, Globe, Shield, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const advantages = [
  {
    icon: Award,
    title: "Government-Recognized",
    description: "Officially recognized and authorized to facilitate government tender processes with full legal compliance."
  },
  {
    icon: Users,
    title: "Extensive Network",
    description: "Vast network of government contacts, suppliers, and international partners across multiple sectors."
  },
  {
    icon: TrendingUp,
    title: "Streamlined Process",
    description: "Optimized procurement processes that reduce complexity and accelerate project delivery timelines."
  },
  {
    icon: Globe,
    title: "International Reach",
    description: "Global partnerships enabling seamless connections between international businesses and local opportunities."
  },
  {
    icon: Shield,
    title: "Transparent & Reliable",
    description: "Complete transparency in operations with proven track record of reliable service delivery and ethical practices."
  },
  {
    icon: Handshake,
    title: "Direct Ministry Partnerships",
    description: "Established direct relationships with key government ministries and procurement departments."
  }
]

export default function WhyChooseUs() {
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
          <h2 className="text-4xl font-bold brand-navy mb-4">Why Choose Premium Consulting Agency?</h2>
          <p className="text-xl brand-grey max-w-3xl mx-auto">
            We stand apart as Uganda's premier consulting agency with unique advantages 
            that ensure your success in government tender processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full card-hover border-0 shadow-md bg-gray-50 hover:bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                      <IconComponent className="h-8 w-8 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold brand-navy mb-4">{advantage.title}</h3>
                    <p className="brand-grey leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
