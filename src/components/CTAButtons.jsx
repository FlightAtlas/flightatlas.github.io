import { useState } from 'react'
import ContactModal from './ContactModal'
import './CTAButtons.css'

function CTAButtons({ variant = 'default' }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleContactClick = () => {
    setIsModalOpen(true)
  }

  const containerClass = variant === 'hero' ? 'cta-buttons hero-variant' : 'cta-buttons'
  const secondaryClass = variant === 'hero' ? 'cta-secondary hero-secondary' : 'cta-secondary'

  return (
    <>
      <div className={containerClass}>
        <a 
          href="https://booknima.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-primary"
        >
          Book a meeting
        </a>
        <button 
          onClick={handleContactClick}
          className={secondaryClass}
        >
          Get a quote
        </button>
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default CTAButtons