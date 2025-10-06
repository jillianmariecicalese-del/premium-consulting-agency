"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCallback } from 'react'

export default function WhatsAppFloat() {
  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "+256745025772"
    const message = "Hello! I'm interested in your government tender consulting services."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Failed to open WhatsApp:', error)
      // Optional: Show user feedback (e.g., alert or toast)
      alert('Unable to open WhatsApp. Please try again.')
    }
  }, [])

  // Framer Motion variants for button animation
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 2 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-700 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          width={28}
          height={28}
          className="filter brightness-0 invert"
          priority // Optimize for above-the-fold content
          onError={() => console.warn('WhatsApp icon failed to load')}
        />
        
        {/* Pulse Animation (optional, disabled on low-end devices) */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 motion-reduce:hidden"></div>
        
        {/* Tooltip */}
        <div
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 whitespace-nowrap md:right-20"
          role="tooltip"
          id="whatsapp-tooltip"
        >
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      </button>
    </motion.div>
  )
}
