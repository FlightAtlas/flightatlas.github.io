import { Helmet } from 'react-helmet-async'
import CTAButtons from '../components/CTAButtons'
import './Services.css'

const services = [
  {
    title: 'ROS2 Platform Development & Migration',
    description: 'End-to-end ROS2 architecture design and legacy system migration for flight-grade autonomy applications.',
    deliverables: ['Custom ROS2 node architecture', 'Migration from ROS1 to ROS2', 'Real-time performance optimization', 'Integration with existing systems'],
    outcomes: 'Scalable robotics platforms that meet aerospace reliability standards',
    technologies: 'ROS2, DDS, C++, Python, Docker, Real-time Linux',
    icon: '🔧',
    color: '#e74c3c'
  },
  {
    title: 'Computer Vision & ML Model Development',
    description: 'Custom CV/ML solutions with embedded inference optimization for real-time applications.',
    deliverables: ['Object detection and tracking models', 'Embedded inference optimization', 'Custom dataset generation', 'Model deployment pipelines'],
    outcomes: 'High-performance vision systems running on edge hardware',
    technologies: 'PyTorch, TensorRT, OpenCV, CUDA, TensorFlow Lite',
    icon: '👁️',
    color: '#3498db'
  },
  {
    title: 'Multi-Sensor Fusion & GPS/INS Integration',
    description: 'Precision navigation and localization systems integrating multiple sensor modalities.',
    deliverables: ['Kalman filter implementations', 'RTK GPS integration', 'IMU calibration and fusion', 'Multi-sensor timing synchronization'],
    outcomes: 'Centimeter-level positioning accuracy for mission-critical applications',
    technologies: 'GPS/GNSS, RTK, IMU, Kalman Filters, GeographicLib',
    icon: '🛰️',
    color: '#f39c12'
  },
  {
    title: 'Real-Time Video Analytics & Multi-Object Tracking',
    description: 'Wide-area surveillance systems with multi-target tracking and behavioral analysis.',
    deliverables: ['Real-time object tracking', 'Behavioral pattern recognition', 'Multi-camera coordination', 'Alert and notification systems'],
    outcomes: 'Comprehensive situational awareness for security applications',
    technologies: 'OpenCV, YOLO, DeepSORT, GStreamer, FFmpeg',
    icon: '📹',
    color: '#9b59b6'
  },
  {
    title: 'Calibration: Cameras, IMUs, Timing & Sync',
    description: 'Precision calibration systems for multi-sensor platforms requiring tight synchronization.',
    deliverables: ['Camera intrinsic/extrinsic calibration', 'IMU bias estimation', 'Hardware timestamp synchronization', 'Cross-sensor alignment'],
    outcomes: 'Accurate sensor fusion with sub-millisecond timing precision',
    technologies: 'OpenCV, Ceres Solver, PTP, Hardware timestamping',
    icon: '⚙️',
    color: '#1abc9c'
  },
  {
    title: 'Simulation, Datasets & ML Pipeline Tooling',
    description: 'Complete ML infrastructure including simulation environments and automated labeling systems.',
    deliverables: ['Physics-based simulation environments', 'Automated data labeling pipelines', 'Model training infrastructure', 'Dataset management systems'],
    outcomes: 'Scalable ML development with reduced human labeling costs',
    technologies: 'Gazebo, AirSim, MLflow, Kubernetes, Apache Airflow',
    icon: '🔬',
    color: '#e67e22'
  },
  {
    title: 'On-Site Integration & Field Test Support',
    description: 'Hands-on deployment and testing support for demanding field environments.',
    deliverables: ['Field deployment planning', 'On-site technical support', 'Performance validation testing', 'Training and documentation'],
    outcomes: 'Successful system deployment with validated performance metrics',
    technologies: 'Field test protocols, Performance monitoring, Remote diagnostics',
    icon: '🚁',
    color: '#2ecc71'
  },
  {
    title: 'Robotic ML Software & Hardware System Design',
    description: 'Complete system architecture from hardware selection to software deployment.',
    deliverables: ['Hardware platform selection', 'System architecture design', 'Integration roadmap', 'Scalability planning'],
    outcomes: 'Production-ready systems designed for long-term operation',
    technologies: 'System architecture, Hardware selection, Performance modeling',
    icon: '🤖',
    color: '#34495e'
  }
]

function Services() {
  return (
    <>
      <Helmet>
        <title>Robotics Consulting Services | Flight Atlas</title>
        <meta name="description" content="Expert robotics consulting in ROS2, computer vision, GPS/INS fusion, and multi-sensor systems. Government-ready solutions from prototype to production." />
      </Helmet>

      <div className="services-page">
        <section className="services-hero">
          <div className="services-hero-content">
            <h1>Robotics Consulting Services</h1>
            <p>Expert capabilities in perception, navigation, and autonomous systems</p>
          </div>
        </section>

        <section className="detailed-services">
          <div className="services-container">
            {services.map((service, index) => (
              <div key={index} className="detailed-service" style={{'--service-color': service.color}}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-desc">{service.description}</p>
                
                <div className="service-details">
                  <div className="detail-section">
                    <h4>Key Capabilities</h4>
                    <ul>
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Outcome & Technologies</h4>
                    <p className="outcome">{service.outcomes}</p>
                    <p className="tech-stack"><strong>Tech Stack:</strong> {service.technologies}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="engagement-models">
          <div className="engagement-container">
            <h2>How We Engage</h2>
            <div className="engagement-grid">
              <div className="engagement-item">
                <h3>Project-Based</h3>
                <p>Fixed-scope engagements with defined deliverables and timelines.  Ideal for specific technical challenges or prototype development.</p>
              </div>
              <div className="engagement-item">
                <h3>Retainer</h3>
                <p>Ongoing technical advisory and development support.  Perfect for evolving projects requiring consistent expertise.</p>
              </div>
              <div className="engagement-item">
                <h3>Field Support</h3>
                <p>On-site deployment, testing, and integration assistance.  Essential for mission-critical field deployments.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="services-cta-content">
            <h2>Ready to discuss your project?</h2>
            <p>Contact us for a detailed quote and project timeline.</p>
            <CTAButtons />
          </div>
        </section>
      </div>
    </>
  )
}

export default Services