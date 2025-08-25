import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ContactModal from '../components/ContactModal'
import './Contact.css'

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleContactClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact | Flight Atlas</title>
        <meta name="description" content="Contact Flight Atlas for robotics consulting. Book a meeting or send a consulting inquiry for ROS2, computer vision, and autonomous systems." />
      </Helmet>

      <div className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1>Contact Flight Atlas</h1>
            <p>Ready to accelerate your robotics project?</p>
          </div>
        </section>

        <section className="contact-methods">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-method primary-method">
                <h3>📅 Book a Meeting</h3>
                <p>
                  Schedule a direct conversation to discuss your project requirements, 
                  technical challenges, and how Flight Atlas can help.
                </p>
                <a 
                  href="https://booknima.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-button primary"
                >
                  Meet with Nima
                </a>
              </div>

              <div className="contact-method">
                <h3>✉️ Email Inquiry</h3>
                <p>
                  Send a detailed project inquiry with your scope, timeline, 
                  and technical requirements for a comprehensive response.
                </p>
                <button 
                  onClick={handleContactClick}
                  className="contact-button secondary"
                >
                  Send an inquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <div className="info-container">
            <div className="info-grid">
              <div className="info-item">
                <h3>📍 Mailing Address</h3>
                <p>
                  17885 Soda Springs Rd<br/>
                  Los Gatos, CA 95033
                </p>
              </div>

              <div className="info-item">
                <h3>🔐 NDA Available</h3>
                <p>
                  We regularly operate under NDA and handle sensitive material 
                  with care.  NDA available upon request.
                </p>
              </div>

              <div className="info-item">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:nima@flightatlas.com">nima@flightatlas.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="response-expectations">
          <div className="expectations-container">
            <h2>What to Expect</h2>
            <div className="expectations-grid">
              <div className="expectation-item">
                <h4>🕐 Response Time</h4>
                <p>
                  Initial response within 24 hours for all inquiries. 
                  Detailed technical discussions typically scheduled within 2-3 business days.
                </p>
              </div>

              <div className="expectation-item">
                <h4>🎯 Technical Discussion</h4>
                <p>
                  We'll dive deep into your technical requirements, existing systems, 
                  and project constraints to provide accurate scope and timeline estimates.
                </p>
              </div>

              <div className="expectation-item">
                <h4>💼 Proposal Process</h4>
                <p>
                  After initial discussion, we provide detailed proposals with 
                  deliverables, timelines, and pricing for project-based or retainer engagements.
                </p>
              </div>

              <div className="expectation-item">
                <h4>🚀 Quick Start</h4>
                <p>
                  For well-defined projects, we can typically begin work within 
                  1-2 weeks of signed agreement, depending on current capacity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="engagement-types">
          <div className="engagement-container">
            <h2>Engagement Options</h2>
            <div className="engagement-options">
              <div className="option-item">
                <h4>🎯 Project-Based</h4>
                <p>
                  Fixed-scope engagements with defined deliverables and timelines. 
                  Perfect for specific technical challenges or prototype development.
                </p>
              </div>

              <div className="option-item">
                <h4>🔄 Retainer</h4>
                <p>
                  Ongoing technical advisory and development support. 
                  Ideal for evolving projects requiring consistent expertise.
                </p>
              </div>

              <div className="option-item">
                <h4>🚁 Field Support</h4>
                <p>
                  On-site deployment, testing, and integration assistance. 
                  Essential for mission-critical field deployments.
                </p>
              </div>

              <div className="option-item">
                <h4>🤝 SBIR Partnership</h4>
                <p>
                  Research collaboration as a prime or teaming partner.  
                  Contributions to technical volumes, prototype development, and field demonstrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="contact-cta-content">
            <h2>Let's Build Something Amazing</h2>
            <p>
              From concept to deployment, Flight Atlas is your partner in 
              building next-generation autonomous systems.
            </p>
            <div className="final-cta-buttons">
              <a 
                href="https://booknima.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Meet with Nima
              </a>
              <button 
                onClick={handleContactClick}
                className="cta-secondary"
              >
                Send an inquiry
              </button>
            </div>
          </div>
        </section>
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default Contact