import './ServiceTiles.css'

const services = [
  {
    title: 'ROS2 Autonomy Platform Development',
    description: 'ROS2 architecture and migration • Multi-sensor fusion & GPS/INS • Camera and IMU calibration systems',
    icon: '🤖'
  },
  {
    title: 'Intelligence & Analytics',
    description: 'Computer vision and ML models • Real-time video analytics • Auto-labeling and ML pipeline tooling',
    icon: '👁️'
  },
  {
    title: 'Systems Engineering',
    description: 'Complete system architecture design • Field integration and deployment support • Scalable hardware-software systems',
    icon: '🏗️'
  },
  {
    title: 'Leadership & Growth',
    description: 'Technical interviewing and team scaling • Engineering management • Talent acquisition with proven track record',
    icon: '👥'
  }
]

function ServiceTiles() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">What we do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-tile">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceTiles