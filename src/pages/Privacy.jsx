import { Helmet } from 'react-helmet-async'
import './Legal.css'

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Flight Atlas</title>
        <meta name="description" content="Flight Atlas privacy policy covering data collection, cookies, and information handling practices." />
      </Helmet>

      <div className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-content">
            <h1>Privacy Policy</h1>
            <p>Last updated: August 2025</p>
          </div>
        </section>

        <section className="legal-content">
          <div className="content-container">
            <div className="section">
              <h2>Information We Collect</h2>
              <p>
                Flight Atlas LLC ("Flight Atlas", "we", "our", or "us") operates the website 
                flightatlas.com (the "Service").  This privacy policy describes how we collect, 
                use, and protect information when you visit our website.
              </p>
              
              <h3>Information Collection</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> When you contact us via email or forms, 
                  we collect the information you provide such as your name, email address, 
                  company name, and message content.
                </li>
                <li>
                  <strong>Analytics Data:</strong> We may use web analytics services that 
                  collect standard internet log information and visitor behavior patterns. 
                  This data is collected in aggregate form and does not identify individual users.
                </li>
                <li>
                  <strong>Technical Information:</strong> Basic technical information such as 
                  browser type, operating system, and IP address may be automatically collected 
                  when you visit our site.
                </li>
              </ul>
            </div>

            <div className="section">
              <h2>How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries and provide consulting services</li>
                <li>To improve our website and understand visitor preferences</li>
                <li>To communicate with you about our services when appropriate</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div className="section">
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul>
                <li>When required by law or to comply with legal processes</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>With service providers who assist in operating our website (under confidentiality agreements)</li>
              </ul>
            </div>

            <div className="section">
              <h2>Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance user experience. 
                You can choose to disable cookies through your browser settings, though this may limit 
                some functionality of our website.
              </p>
            </div>

            <div className="section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.  However, no method of 
                transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="section">
              <h2>Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes 
                for which it was collected, comply with legal obligations, resolve disputes, and 
                enforce our agreements.
              </p>
            </div>

            <div className="section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of communications from us</li>
              </ul>
              <p>
                To exercise these rights, please contact us at 
                <a href="mailto:nima@flightatlas.com"> nima@flightatlas.com</a>.
              </p>
            </div>

            <div className="section">
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time.  Any changes will be posted on 
                this page with an updated revision date.  We encourage you to review this privacy 
                policy periodically.
              </p>
            </div>

            <div className="section">
              <h2>Contact Information</h2>
              <p>
                If you have questions about this privacy policy, please contact us at:
              </p>
              <div className="contact-details">
                <p>
                  <strong>Flight Atlas LLC</strong><br/>
                  17885 Soda Springs Rd<br/>
                  Los Gatos, CA 95033<br/>
                  Email: <a href="mailto:nima@flightatlas.com">nima@flightatlas.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Privacy