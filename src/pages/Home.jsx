import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import ServiceTiles from '../components/ServiceTiles'
import CTAButtons from '../components/CTAButtons'
import './Home.css'

function Home() {
  return (
    <>
      <Helmet>
        <title>Flight Atlas — Robotics, Vision, and Tracking Consulting</title>
        <meta name="description" content="Flight Atlas builds perception platforms, ROS2 infrastructure, and GPS/INS fusion that scale from prototype to fielded systems. Government-ready robotics consulting." />
        <meta property="og:title" content="Flight Atlas — Robotics, Vision, and Tracking Consulting" />
        <meta property="og:description" content="Flight Atlas builds perception platforms, ROS2 infrastructure, and GPS/INS fusion that scale from prototype to fielded systems." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Flight Atlas",
            "legalName": "Flight Atlas LLC",
            "url": "https://flightatlas.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "17885 Soda Springs Rd",
              "addressLocality": "Los Gatos",
              "addressRegion": "CA",
              "postalCode": "95033",
              "addressCountry": "US"
            },
            "founder": {
              "@type": "Person",
              "name": "Nima Rahnemoon"
            },
            "sameAs": []
          })}
        </script>
      </Helmet>

      <Hero />
      <ServiceTiles />
      
      <section className="why-section">
        <div className="why-container">
          <h2>Why Flight Atlas</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>Flight-Grade Experience</h3>
              <p>Built flight-grade autonomy and data systems at Airbus' Silicon Valley unit</p>
            </div>
            <div className="why-item">
              <h3>Full-Stack Robotics</h3>
              <p>Strong CV/ML with embedded inference and ROS2 platforms</p>
            </div>
            <div className="why-item">
              <h3>Delivery Leadership</h3>
              <p>Leadership that owns architecture and delivery, not just code</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gov-ready-section">
        <div className="gov-ready-container">
          <h2>Defense-Grade Compliance</h2>
          <div className="gov-ready-content">
            <p>
              U.S. Person with clearance eligibility with full compliance framework ready for engagement: ITAR/EAR compliant handling under NDA, SAM registration and UEI number, CAGE code available, and NAICS coverage for robotics R&D/software.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-container">
          <h2>Our Mission</h2>
          <div className="vision-content">
            <p>
              By applying deep experience in autonomy, perception, and multi-sensor integration, we help organizations accelerate their missions, from safer skies and smarter traffic systems to more effective scientific and security monitoring.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to get started?</h2>
          <CTAButtons />
        </div>
      </section>
    </>
  )
}

export default Home