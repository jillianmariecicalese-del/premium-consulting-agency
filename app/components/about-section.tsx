"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Target, Eye, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function AboutSection() {
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
    <section id="about" className="section-padding brand-grey-bg">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold brand-navy mb-4">About Premium Consulting Agency</h2>
          <p className="text-xl brand-grey max-w-3xl mx-auto">
            Your trusted partner for government tender opportunities and procurement solutions across Uganda and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/premium-consulting-agency.png"
                alt="Premium Consulting Agency team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold brand-navy">
              Connecting Businesses with Government Opportunities
            </h3>
            <p className="brand-grey leading-relaxed">
              Premium Consulting Agency is Uganda's premier consulting firm specializing in government 
              tenders and procurement opportunities. We bridge the gap between businesses and government 
              contracts through our extensive network, deep expertise, and commitment to excellence.
            </p>
            <p className="brand-grey leading-relaxed">
              Our team of experienced professionals understands the complexities of government procurement 
              processes and works tirelessly to ensure our clients access the most lucrative opportunities 
              while maintaining full compliance with all regulatory requirements.
            </p>
            <Button 
              size="lg" 
              className="brand-navy-bg hover:bg-blue-800"
              onClick={scrollToContact}
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full border-0 shadow-md card-hover bg-white">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Target className="h-8 w-8 text-blue-900" />
                </div>
                <h4 className="text-xl font-bold brand-navy mb-4">Our Mission</h4>
                <p className="brand-grey">
                  To empower businesses by providing seamless access to government tender opportunities 
                  while ensuring transparency, compliance, and mutual success.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="h-full border-0 shadow-md card-hover bg-white">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Eye className="h-8 w-8 text-blue-900" />
                </div>
                <h4 className="text-xl font-bold brand-navy mb-4">Our Vision</h4>
                <p className="brand-grey">
                  To become East Africa's leading government procurement consulting firm, 
                  known for integrity, results, and transformative business partnerships.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="h-full border-0 shadow-md card-hover bg-white">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Award className="h-8 w-8 text-blue-900" />
                </div>
                <h4 className="text-xl font-bold brand-navy mb-4">Our Values</h4>
                <p className="brand-grey">
                  Integrity, transparency, excellence, and client success drive everything we do. 
                  We build lasting partnerships based on trust and proven results.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
