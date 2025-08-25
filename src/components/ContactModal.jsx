import { useState, useEffect } from 'react'
import { sendEmailViaEmailJS, sendEmailViaFormspree } from './EmailService'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    // Let the form submit naturally to FormSubmit
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Send an Inquiry</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {isSubmitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h4>Message Sent!</h4>
            <p>Your inquiry has been sent directly to Nima.  You'll receive a response within 24 hours.</p>
          </div>
        ) : (
          <form 
            className="contact-form" 
            action="https://formsubmit.co/nima@flightatlas.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New message from Flight Atlas website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{display: 'none'}} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={`${window.location.origin}/?submitted=true`} />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="">Select a topic...</option>
                <option value="ROS2 Development">ROS2 Development</option>
                <option value="Computer Vision">Computer Vision</option>
                <option value="Autonomous Systems">Autonomous Systems</option>
                <option value="SBIR Partnership">SBIR Partnership</option>
                <option value="General Consulting">General Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, timeline, and technical requirements..."
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal