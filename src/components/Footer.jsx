import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#/about">About</a>
          <a href="#/services">Services</a>
          <a href="#/contact">Contact</a>
          <a href="#/privacy">Privacy</a>
          <a href="#/terms">Terms</a>
        </div>
        <div className="footer-info">
          <p>© 2025 Flight Atlas LLC.   All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer