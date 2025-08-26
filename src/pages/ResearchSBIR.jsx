import { Helmet } from 'react-helmet-async'
import './ResearchSBIR.css'

function ResearchSBIR() {
  return (
    <>
      <Helmet>
        <title>Research & SBIR | Flight Atlas</title>
        <meta name="description" content="Flight Atlas SBIR partnership for perception systems, aerial tracking, GPS/INS fusion, and embedded inference research. Government research ready." />
      </Helmet>

      <div className="research-page">
        <section className="research-hero">
          <div className="research-hero-content">
            <h1>Research & SBIR</h1>
            <p>Advancing the state of the art in autonomous perception systems</p>
          </div>
        </section>

        <section className="research-overview">
          <div className="overview-container">
            <h2>Research Partnership</h2>
            <p className="overview-text">
              We collaborate with government agencies and industry teams to develop technical volumes, 
              deliver working prototypes, and conduct field demonstrations.  Our contributions bring deep 
              expertise in autonomous perception and tracking, helping programs achieve their technical 
              objectives and accelerate mission success.
            </p>
          </div>
        </section>

        <section className="research-areas">
          <div className="areas-container">
            <h2>Areas of Interest</h2>
            <div className="areas-grid">
              <div className="area-item">
                <h3>🛩️&nbsp;&nbsp;Perception for Aerial Systems</h3>
                <p>
                  Advanced computer vision and sensor fusion for unmanned aerial vehicles, 
                  including object detection, tracking, and environmental understanding 
                  in challenging conditions.
                </p>
              </div>
              
              <div className="area-item">
                <h3>👁️&nbsp;&nbsp;Wide-Area Tracking</h3>
                <p>
                  Multi-target tracking systems capable of maintaining awareness across 
                  large geographic areas, with applications in border security and 
                  airspace monitoring.
                </p>
              </div>
              
              <div className="area-item">
                <h3>🎯&nbsp;&nbsp;Fusion with GPS/INS</h3>
                <p>
                  Integration of visual-inertial odometry with GPS and inertial navigation 
                  systems for robust positioning in GPS-denied or degraded environments.
                </p>
              </div>
              
              <div className="area-item">
                <h3>🔄&nbsp;&nbsp;Scalable Data Pipelines</h3>
                <p>
                  Large-scale data processing and machine learning infrastructure for 
                  training and deploying perception models at operational scale.
                </p>
              </div>
              
              <div className="area-item">
                <h3>⚡&nbsp;&nbsp;Embedded Inference</h3>
                <p>
                  Optimization of machine learning models for deployment on resource-constrained 
                  embedded platforms while maintaining real-time performance.
                </p>
              </div>
              
              <div className="area-item">
                <h3>🤖&nbsp;&nbsp;Autonomous Decision Making</h3>
                <p>
                  AI systems for autonomous decision making in complex, dynamic environments 
                  with applications in defense and security operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="target-agencies">
          <div className="agencies-container">
            <h2>Target Agencies</h2>
            <div className="agencies-grid">
              <div className="agency-item">
                <h3>🇺🇸 USAF</h3>
                <p>
                  Air Force research initiatives focusing on autonomous systems, 
                  sensor integration, and battlefield awareness technologies.
                </p>
              </div>
              
              <div className="agency-item">
                <h3>🏛️ DHS</h3>
                <p>
                  Department of Homeland Security programs in border protection, 
                  critical infrastructure monitoring, and security technologies.
                </p>
              </div>
              
              <div className="agency-item">
                <h3>⚓ Navy</h3>
                <p>
                  Naval Research Laboratory and Office of Naval Research projects 
                  in maritime autonomy and surveillance systems.
                </p>
              </div>
              
              <div className="agency-item">
                <h3>🔬 NSF</h3>
                <p>
                  National Science Foundation fundamental research in robotics, 
                  computer vision, and autonomous systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="example-topics">
          <div className="topics-container">
            <h2>Example Research Topics</h2>
            <div className="topics-list">
              <div className="topic-item">
                <h4>Multi-Modal Perception in Degraded Environments</h4>
                <p>
                  Robust object detection and classification across visible, infrared, 
                  and radar spectra for autonomous operations in adverse weather, 
                  low-visibility, and electronically contested environments.
                </p>
              </div>
              
              <div className="topic-item">
                <h4>Distributed Multi-Target Tracking at Scale</h4>
                <p>
                  Scalable fusion architectures for persistent tracking across 
                  distributed sensor networks, maintaining target identity through 
                  occlusions and sensor handoffs in wide-area surveillance.
                </p>
              </div>
              
              <div className="topic-item">
                <h4>Assured Navigation in Contested Environments</h4>
                <p>
                  Multi-sensor fusion combining visual-inertial odometry, terrain 
                  reference navigation, and opportunistic RF signals for precise 
                  positioning in GPS-denied and electronically contested domains.
                </p>
              </div>
              
              <div className="topic-item">
                <h4>Edge Intelligence for Autonomous Systems</h4>
                <p>
                  Neural architecture optimization and quantization techniques for 
                  deploying perception and decision models on SWaP-constrained 
                  embedded platforms while maintaining mission-critical performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-benefits">
          <div className="benefits-container">
            <h2>Partnership Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-emoji">✅</div>
                <h3>Proven Delivery</h3>
                <p>
                  Track record of successful project delivery in demanding 
                  aerospace and government environments with Flight Atlas leadership.
                </p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-emoji">🔬</div>
                <h3>Research Excellence</h3>
                <p>
                  Strong technical foundation with advanced degrees and hands-on 
                  experience in cutting-edge autonomous systems development.
                </p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-emoji">🚀</div>
                <h3>Rapid Prototyping</h3>
                <p>
                  Ability to quickly develop and demonstrate proof-of-concept 
                  systems that validate research approaches and meet program milestones.
                </p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-emoji">🏢</div>
                <h3>Government Ready</h3>
                <p>
                  U.S. Person, clearance eligible, with understanding of government 
                  contracting processes and security requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="defense-compliance">
          <div className="compliance-container">
            <h2>Defense-Grade Compliance</h2>
            <p className="compliance-text">
              U.S. Person with clearance eligibility with full compliance framework ready for engagement: (1) ITAR/EAR compliant handling under NDA, (2) SAM registration and UEI number, (3) CAGE code available, and (4) NAICS coverage for robotics R&D/software.
            </p>
          </div>
        </section>

        <section className="research-cta">
          <div className="research-cta-content">
            <h2>Partner with Flight Atlas on Proposals</h2>
            <p>
              Company certifications available upon request.  Let's discuss how our expertise 
              can strengthen your research proposal or ongoing program.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://booknima.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Schedule Discussion
              </a>
              <a 
                href="mailto:nima@flightatlas.com?subject=SBIR%20Partnership%20Inquiry&body=I'd%20like%20to%20discuss%20potential%20SBIR%20collaboration.%0A%0AProgram:%0AAgency:%0ADeadline:%0AScope:"
                className="cta-secondary"
              >
                Partnership Inquiry
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ResearchSBIR