import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check if page loaded with submitted=true parameter
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('submitted') === 'true') {
      setShowSuccess(true)
      
      // Clean up URL without refreshing
      window.history.replaceState({}, document.title, window.location.pathname)
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showSuccess) {
        setShowSuccess(false)
      }
    }

    if (showSuccess) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [showSuccess])

  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        
        {/* Success notification */}
        {showSuccess && (
          <div className="success-notification">
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h4>Message Sent!</h4>
              <p>Your inquiry has been sent successfully. You'll receive a response within 24 hours.</p>
              <button onClick={() => setShowSuccess(false)} className="success-close">×</button>
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  )
}

export default App
