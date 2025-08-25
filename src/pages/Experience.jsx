import { Helmet } from 'react-helmet-async'
import './Experience.css'

function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Flight Atlas</title>
        <meta name="description" content="Flight Atlas experience in flight-grade autonomy systems at Airbus and Google, with expertise in robotics platforms and perception systems." />
      </Helmet>

      <div className="experience-page">
        <section className="experience-hero">
          <div className="experience-hero-content">
            <h1>Selected Experience</h1>
            <p>Building mission-critical systems at scale</p>
          </div>
        </section>

        <section className="experience-overview">
          <div className="overview-container">
            <div className="overview-text">
              <p>
                Airbus, Google, and additional confidential partners.  Commercial aviation autonomy, 
                data orchestration for labeling at scale.  Embedded inference for perception stacks.
              </p>
            </div>
          </div>
        </section>

        <section className="experience-domains">
          <div className="domains-container">
            <h2>Technical Domains</h2>
            <div className="domains-grid">
              <div className="domain-item">
                <h3>🛩️ Commercial Aviation Autonomy</h3>
                <p>
                  Flight-grade autonomous systems development including sensor fusion, 
                  path planning, and safety-critical decision making for commercial aircraft applications.
                </p>
              </div>
              
              <div className="domain-item">
                <h3>🔍 Perception Pipelines</h3>
                <p>
                  End-to-end computer vision systems from raw sensor data to actionable intelligence, 
                  including real-time object detection, tracking, and behavioral analysis.
                </p>
              </div>
              
              <div className="domain-item">
                <h3>🏷️ Label Orchestration</h3>
                <p>
                  Large-scale data labeling infrastructure and workflow management systems 
                  supporting machine learning model development across multiple domains.
                </p>
              </div>
              
              <div className="domain-item">
                <h3>⚡ Embedded Inference</h3>
                <p>
                  Optimization and deployment of ML models on constrained embedded platforms 
                  for real-time inference in field applications.
                </p>
              </div>
              
              <div className="domain-item">
                <h3>🎯 GPS/INS with RTK</h3>
                <p>
                  High-precision navigation systems integrating GPS, inertial navigation, 
                  and real-time kinematic positioning for centimeter-level accuracy.
                </p>
              </div>
              
              <div className="domain-item">
                <h3>🤖 ROS2 Platform Work</h3>
                <p>
                  Distributed robotics system architecture using ROS2 for scalable, 
                  real-time autonomous platforms in demanding operational environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="technical-achievements">
          <div className="achievements-container">
            <h2>Key Achievements</h2>
            <div className="achievements-content">
              <div className="achievement">
                <div className="achievement-image">
                  <img 
                    src="https://images.ctfassets.net/enls6777jgmn/6ROCJvHkdXo2GuFCBrU3IC/66ed40b81dfbf0043c6ae6dfd0727535/KSFO_28L_evening_summer.png?q=85&fm=jpg&fl=progressive"
                    alt="KSFO Airport Evening View"
                    className="achievement-img"
                  />
                </div>
                <div className="achievement-content">
                  <h3>Engineering Leadership</h3>
                  <p>
                    Led platform and labeling teams at Airbus on autonomy programs, building end-to-end data systems 
                    for flight test operations.  Productionized internal robotics libraries that enabled 
                    broader engineering teams to contribute effectively to autonomous systems development.
                  </p>
                </div>
              </div>
              
              <div className="achievement">
                <div className="achievement-image">
                  <img 
                    src="https://docs.ros.org/en/foxy/_images/Nodes-TopicandService.gif"
                    alt="ROS2 Nodes and Topics Architecture"
                    className="achievement-img"
                  />
                </div>
                <div className="achievement-content">
                  <h3>Scalable Data Infrastructure</h3>
                  <p>
                    Designed and implemented data orchestration systems supporting large-scale machine learning 
                    operations, enabling efficient labeling workflows and model training pipelines 
                    across distributed teams and computing resources.
                  </p>
                </div>
              </div>
              
              <div className="achievement">
                <div className="achievement-image">
                  <img 
                    src="https://images.ctfassets.net/enls6777jgmn/42zaRCtDOY71vWkyD8uPNq/ac6b99260135528ed0ba541317690023/Acubed_AI_Autonomy_King_Air_C90_mods.jpg?q=85&fm=jpg&fl=progressive&w=900"
                    alt="Autonomous Aircraft System Integration"
                    className="achievement-img"
                  />
                </div>
                <div className="achievement-content">
                  <h3>System Integration</h3>
                  <p>
                    Successfully integrated complex sensor systems, perception algorithms, and navigation 
                    solutions into flight-certified platforms, meeting stringent aerospace reliability 
                    and performance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-cta">
          <div className="experience-cta-content">
            <h2>Ready to leverage this experience?</h2>
            <p>Let's discuss how our proven track record can accelerate your project.</p>
            <div className="cta-buttons">
              <a 
                href="https://booknima.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Book a meeting
              </a>
              <a 
                href="mailto:nima@flightatlas.com?subject=Experience%20Discussion&body=I'd%20like%20to%20discuss%20how%20your%20experience%20applies%20to%20my%20project."
                className="cta-secondary"
              >
                Discuss experience
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Experience