
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServicesDetailPage from '@/components/services-detail-page'

export const metadata = {
  title: 'Our Services - Premium Consulting Agency',
  description: 'Comprehensive government tender and procurement consulting services. Expert assistance in tender sourcing, supplier outsourcing, supply chain management, and documentation.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesDetailPage />
      <Footer />
    </>
  )
}
