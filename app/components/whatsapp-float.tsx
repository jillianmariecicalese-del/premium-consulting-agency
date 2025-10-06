
"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number - using Uganda format
    const phoneNumber = "+256700000000" // Update with actual number
    const message = "Hello! I'm interested in your government tender consulting services."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          width={28}
          height={28}
          className="filter brightness-0 invert"
        />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
      </button>
    </motion.div>
  )
}
