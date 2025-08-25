import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ContactModal from '../components/ContactModal'
import './About.css'

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Helmet>
        <title>About | Flight Atlas</title>
        <meta name="description" content="Learn about Nima Rahnemoon, founder of Flight Atlas, and our boutique robotics consulting approach with deep autonomy and perception expertise." />
      </Helmet>

      <div className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Flight Atlas</h1>
            <p>Boutique robotics lab led by proven expertise in autonomous systems</p>
          </div>
        </section>

        <section className="founder-bio">
          <div className="bio-container">
            <div className="founder-header">
              <div className="founder-photo">
                <img 
                  src="/images/headshot.png" 
                  alt="Nima Rahnemoon, Founder of Flight Atlas"
                  className="founder-headshot"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-fallback" style={{display: 'none'}}>
                  <span>NR</span>
                </div>
              </div>
              <div className="founder-info">
                <h2>Our Founder</h2>
                <h3>Nima Rahnemoon</h3>
              </div>
            </div>
            <div className="bio-content">
              <p>
                Nima Rahnemoon holds an MS in Robotic Systems Development from Carnegie Mellon University 
                and a BS in Computer Science from UCLA.  He brings over a decade of experience building 
                machine learning, computer vision, and robotic systems across industry and research.
              </p>
              
              <p>
                At Airbus, Nima led the development of autonomy and perception infrastructure.  His work 
                included designing data collection platforms, integrating advanced sensor suites, and 
                implementing navigation and synchronization systems.  He contributed to improvements in 
                calibration, multi-sensor fusion, and real-time analytics while supporting flight test 
                and field operations.  His efforts enabled teams across the company to contribute to 
                mission-critical autonomy programs.
              </p>

              <p>
                Nima's earlier experience includes roles at Google, where he worked on large-scale data 
                platforms, and at robotics startups, where he improved localization, reliability, and 
                deployment readiness of autonomous systems.
              </p>
            </div>
          </div>
        </section>

        <section className="company-approach">
          <div className="approach-container">
            <h2>Our Approach</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>🎯 Technical Leadership</h3>
                <p>
                  Led cross-functional teams at Airbus including platform and labeling teams, 
                  mentored 3 successful interns, and conducted 220+ technical interviews. 
                  Direct access to senior expertise with proven ability to resolve critical issues.
                </p>
              </div>
              
              <div className="approach-item">
                <h3>🚀 Complete System Ownership</h3>
                <p>
                  From concept to flight test - single-handedly developed the OWL data collection 
                  system including electrical, mechanical, and software components.  We own the 
                  entire development lifecycle, not just individual components.
                </p>
              </div>
              
              <div className="approach-item">
                <h3>⚡ End-to-End Delivery</h3>
                <p>
                  We don't just write code - we own architecture, roadmaps, and delivery. 
                  From initial concept through field deployment, we ensure your systems 
                  meet mission-critical requirements.
                </p>
              </div>
              
              <div className="approach-item">
                <h3>🔬 Research Integration</h3>
                <p>
                  Our consulting work directly informs our product vision: a gimbaled, 
                  multi-target tracking camera system.  This synergy ensures our solutions 
                  are forward-looking and technically sound.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="key-achievements">
          <div className="achievements-container">
            <h2>Key Technical Achievements</h2>
            <div className="achievements-content">
              <div className="achievement-item">
                <div className="achievement-emoji">🛩️</div>
                <h3>Data Collection System</h3>
                <p>
                  Single-handedly developed complete autonomous data collection platform from concept 
                  through flight test, including sensor suite design, calibration algorithms, and 
                  flight test leadership.
                </p>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-emoji">⚙️</div>
                <h3>Infrastructure & Platform Migration</h3>
                <p>
                  Led ROS2 migration enabling advanced debugging capabilities, revamped intrinsic 
                  calibration for consistent results, added multi-spectral camera support (LWIR/NIR), 
                  and optimized storage architecture with NVMe drives.
                </p>
              </div>
              
              <div className="achievement-item">
                <div className="achievement-emoji">📡</div>
                <h3>Sensor Fusion & Navigation</h3>
                <p>
                  Implemented Kalman filter optimizations reducing mislocalizations, integrated 
                  RTK for centimeter-level precision localization, and performed INS/IMU 
                  validation testing for flight-grade accuracy.
                </p>
              </div>
              
            </div>
          </div>
        </section>

        <section className="technical-philosophy">
          <div className="philosophy-container">
            <h2>Engineering Philosophy</h2>
            <div className="philosophy-content">
              <div className="philosophy-point">
                <h3>Maximum Impact Decisions</h3>
                <p>
                  Make engineering decisions that have the greatest impact while investing 
                  in solutions that yield long-term returns.  Focus on resolving critical 
                  issues rather than incremental improvements.
                </p>
              </div>
              
              <div className="philosophy-point">
                <h3>Rapid Iteration Systems</h3>
                <p>
                  Design systems that enable rapid testing, sensor integration, and algorithm 
                  plug-and-play capabilities.  Build infrastructure that accelerates development 
                  across entire engineering organizations.
                </p>
              </div>
              
              <div className="philosophy-point">
                <h3>Field-Proven Solutions</h3>
                <p>
                  Real-world deployment requires different engineering than laboratory prototypes.  
                  Every solution is designed for operational environments with flight-grade 
                  reliability and maintainability.
                </p>
              </div>
              
              <div className="philosophy-point">
                <h3>Cross-Disciplinary Integration</h3>
                <p>
                  Bridge hardware, software, and systems engineering to deliver complete solutions.  
                  Technical leadership requires understanding the full stack from embedded systems 
                  to cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-cta-content">
            <h2>Ready to work together?</h2>
            <p>Let's discuss how Flight Atlas can accelerate your robotics project.</p>
            <div className="cta-buttons">
              <a 
                href="https://booknima.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Book a meeting
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="cta-secondary"
              >
                Start a conversation
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

export default About