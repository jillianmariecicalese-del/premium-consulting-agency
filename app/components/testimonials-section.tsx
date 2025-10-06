
"use client"

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: "Marcus Thompson",
    title: "Procurement Manager",
    company: "TechSolutions International",
    country: "Canada",
    image: "/images/Marcus thompson.jpg",
    content: "Their market intelligence is unmatched. They alerted us to a technology tender before public advertisement, helping us secure a 3-year IT infrastructure contract with the National Technology Board.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    title: "Head of Business Development",
    company: "GlobalBuild Systems",
    country: "Spain",
    image: "/images/testimonial-2.jpg",
    content: "We won 3 out of 4 construction tenders through Premium Consulting Agency. Their local expertise saved us months of trial and error in international procurement processes.",
    rating: 5
  },
  {
    name: "James Chen",
    title: "CEO",
    company: "International Supply Corp",
    country: "Singapore",
    image: "/images/testimonial-3.jpg",
    content: "Secured a $2M supply contract within 2 months by leveraging their procurement navigation and Ministry connections. Outstanding results!",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="section-padding brand-grey-bg">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold brand-navy mb-4">Client Success Stories</h2>
          <p className="text-xl brand-grey max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients across Africa say about 
            our government tender consulting services and proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-blue-200 mb-4" />
                    <p className="brand-grey italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold brand-navy">{testimonial.name}</h4>
                      <p className="text-sm brand-grey">{testimonial.title}</p>
                      <p className="text-sm brand-grey">{testimonial.company}, {testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
