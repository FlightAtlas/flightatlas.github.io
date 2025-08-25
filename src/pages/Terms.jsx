import { Helmet } from 'react-helmet-async'
import './Legal.css'

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Flight Atlas</title>
        <meta name="description" content="Flight Atlas terms of service covering website usage, consulting services, and legal agreements." />
      </Helmet>

      <div className="legal-page">
        <section className="legal-hero">
          <div className="legal-hero-content">
            <h1>Terms of Service</h1>
            <p>Last updated: August 2025</p>
          </div>
        </section>

        <section className="legal-content">
          <div className="content-container">
            <div className="section">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using the Flight Atlas LLC website ("flightatlas.com"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div className="section">
              <h2>Description of Service</h2>
              <p>
                Flight Atlas LLC provides robotics and autonomous systems consulting services, 
                including but not limited to ROS2 development, computer vision, GPS/INS fusion, 
                and related technical consulting services.  This website serves as an informational 
                platform about our services.
              </p>
            </div>

            <div className="section">
              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on 
                Flight Atlas LLC's website for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="section">
              <h2>Disclaimer</h2>
              <p>
                The materials on Flight Atlas LLC's website are provided on an 'as is' basis. 
                Flight Atlas LLC makes no warranties, expressed or implied, and hereby disclaims 
                and negates all other warranties including without limitation, implied warranties 
                or conditions of merchantability, fitness for a particular purpose, or 
                non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Flight Atlas LLC does not warrant or make any representations concerning 
                the accuracy, likely results, or reliability of the use of the materials on its 
                website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            <div className="section">
              <h2>Limitations</h2>
              <p>
                In no event shall Flight Atlas LLC or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to 
                business interruption) arising out of the use or inability to use the materials 
                on Flight Atlas LLC's website, even if Flight Atlas LLC or an authorized 
                representative has been notified orally or in writing of the possibility of such damage. 
                Because some jurisdictions do not allow limitations on implied warranties, or 
                limitations of liability for consequential or incidental damages, these limitations 
                may not apply to you.
              </p>
            </div>

            <div className="section">
              <h2>Consulting Services</h2>
              <p>
                Any consulting services provided by Flight Atlas LLC are subject to separate 
                written agreements.  This website serves as informational content only and does 
                not constitute an offer for services or create any contractual obligations.
              </p>
              <p>
                Actual consulting engagements require separate written agreements that specify 
                scope of work, deliverables, timelines, and compensation.
              </p>
            </div>

            <div className="section">
              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, 
                is the property of Flight Atlas LLC and is protected by copyright and other 
                intellectual property laws.  The Flight Atlas name and logo are trademarks of 
                Flight Atlas LLC.
              </p>
            </div>

            <div className="section">
              <h2>Export Control and ITAR</h2>
              <p>
                Flight Atlas LLC is committed to compliance with all applicable export control 
                laws and regulations, including the International Traffic in Arms Regulations (ITAR) 
                and Export Administration Regulations (EAR).  Information on this website does not 
                contain export-controlled technical data.
              </p>
            </div>

            <div className="section">
              <h2>Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the 
                laws of the State of California, United States, and you irrevocably submit to 
                the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <div className="section">
              <h2>Revisions and Errata</h2>
              <p>
                The materials appearing on Flight Atlas LLC's website could include technical, 
                typographical, or photographic errors.  Flight Atlas LLC does not warrant that 
                any of the materials on its website are accurate, complete, or current. 
                Flight Atlas LLC may make changes to the materials contained on its website 
                at any time without notice.
              </p>
            </div>

            <div className="section">
              <h2>Site Terms of Use Modifications</h2>
              <p>
                Flight Atlas LLC may revise these terms of use for its website at any time 
                without notice.  By using this website, you are agreeing to be bound by the 
                then current version of these terms of service.
              </p>
            </div>

            <div className="section">
              <h2>Contact Information</h2>
              <p>
                If you have questions about these terms of service, please contact us at:
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

export default Terms