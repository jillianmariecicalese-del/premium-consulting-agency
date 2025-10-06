
import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Premium Consulting Agency</h3>
            <p className="text-blue-100 leading-relaxed">
              Your trusted gateway to government tenders and contracts in Uganda. 
              We specialize in connecting businesses with lucrative opportunities 
              across various sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-blue-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-blue-100 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#about" className="block text-blue-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/#contact" className="block text-blue-100 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                <span className="text-blue-100">
                  Plot 1032 Wavamuno Road<br />
                  Munyonyo, Kampala, Uganda
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <a 
                  href="mailto:Info@premiumconsultingagency.com" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Info@premiumconsultingagency.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="text-center text-blue-100">
            <p>&copy; 2025 Premium Consulting Agency. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
