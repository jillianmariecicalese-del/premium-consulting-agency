
"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    question: "Are you officially authorized by the Government of Uganda?",
    answer: "Yes, Premium Consulting Agency is officially recognized and authorized by the Government of Uganda to facilitate tender processes. We maintain all necessary licenses and certifications, with direct partnerships with key ministries including Ministry of Finance, Ministry of Trade, and various procurement departments. Our government recognition ensures full compliance with all regulatory requirements and gives our clients confidence in the legitimacy of our services."
  },
  {
    question: "How do you source government tenders and contracts?",
    answer: "We utilize our extensive network of government contacts and established relationships with procurement departments across all government ministries. Our team monitors tender publications, maintains direct communication channels with decision-makers, and leverages our partnerships to identify opportunities early. We cover all major sectors including infrastructure, healthcare, education, agriculture, and technology. Our proprietary database tracks tender opportunities in real-time, ensuring our clients never miss a valuable opportunity."
  },
  {
    question: "Can foreign companies participate in Ugandan government tenders through your services?",
    answer: "Absolutely! Foreign companies can participate in Ugandan government tenders, and we specialize in facilitating this process. We help international businesses navigate local requirements, establish necessary legal structures, and connect with local partners when joint ventures are required. Our international reach enables us to bridge the gap between foreign expertise and local opportunities. We handle all compliance issues, documentation requirements, and provide ongoing support throughout the tender process."
  },
  {
    question: "What industries and sectors do you cover?",
    answer: "Premium Consulting Agency covers all major sectors of the Ugandan economy including: Infrastructure Development (roads, bridges, buildings), Healthcare (medical equipment, pharmaceuticals, hospital supplies), Education (construction, equipment, educational materials), Agriculture (equipment, fertilizers, processing facilities), Technology (IT systems, telecommunications, software), Energy (solar, hydro, grid infrastructure), Mining (equipment, exploration services), and Manufacturing (industrial equipment, factory setup). Our diverse network ensures comprehensive coverage across all government procurement areas."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold brand-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-xl brand-grey max-w-3xl mx-auto">
            Get answers to the most common questions about our government tender consulting services 
            and how we can help your business succeed.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold brand-navy pr-4">
                        {faq.question}
                      </h3>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="brand-grey leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
