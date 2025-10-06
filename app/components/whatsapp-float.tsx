"use client"

import { motion } from 'framer-motion'
import { useCallback } from 'react'

export default function WhatsAppFloat() {
  const handleWhatsAppClick = useCallback(() => {
    const phoneNumber = "+256745025772" // Correct number
    const message = "Hello! I'm interested in your government tender consulting services."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Failed to open WhatsApp:', error)
      alert('Unable to open WhatsApp. Please try again.')
    }
  }, [])

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
        <svg
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.719-.911-.99-.24-.272-.482-.247-.67-.119-.186.128-.864.629-1.333.943-.469.313-.719.684-.594 1.081.125.496.562 1.554.944 2.311.382.757.896 1.496 1.507 2.216.611.72 1.379 1.336 2.256 1.813.876.477 1.776.763 2.664.84.888.077 1.734.016 2.31-.297.576-.313 1.081-.892 1.255-1.468.173-.576.074-.992-.074-1.14-.148-.149-.346-.223-.644-.372zm-5.452 2.766c-2.768 0-5.077-2.24-5.077-5.008s2.309-5.008 5.077-5.008 5.077 2.24 5.077 5.008-2.309 5.008-5.077 5.008zm6.672-11.258c-1.584-2.717-4.417-4.512-7.595-4.512-4.776 0-8.66 3.884-8.66 8.66 0 1.584.427 3.132 1.235 4.512l-.86 4.305 4.417-.86c1.284.784 2.733 1.197 4.208 1.197 4.776 0 8.66-3.884 8.66-8.66 0-2.208-.832-4.256-2.2-5.842zm-7.595 11.66c-1.584 0-3.084-.427-4.368-1.235l-.308-.174-2.616.512.512-2.616-.174-.308c-.808-1.284-1.235-2.784-1.235-4.368 0-3.6 2.933-6.532 6.532-6.532 1.776 0 3.432.692 4.68 1.94 1.248 1.248 1.94 2.904 1.94 4.68 0 3.6-2.933 6.532-6.532 6.532z"/>
        </svg>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 motion-reduce:hidden"></div>
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
