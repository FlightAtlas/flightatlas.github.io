import { useEffect, useRef } from 'react'
import CTAButtons from './CTAButtons'
import './Hero.css'

function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const resizeText = () => {
      const element = titleRef.current
      if (!element) return

      // Clear any existing font size to start fresh
      element.style.fontSize = ''
      
      requestAnimationFrame(() => {
        const heroContent = element.closest('.hero-content')
        if (!heroContent) return

        const isMobile = window.innerWidth <= 768
        
        // Get container width (make sure it's current)
        const containerWidth = isMobile 
          ? heroContent.getBoundingClientRect().width * 0.85
          : heroContent.getBoundingClientRect().width * 0.45

        const longestLine = 'Mission-critical robotics.' // This is actually the longest

        // Create measuring element
        const temp = document.createElement('div')
        temp.style.visibility = 'hidden'
        temp.style.position = 'absolute'
        temp.style.top = '-9999px'
        temp.style.left = '-9999px'
        temp.style.fontFamily = window.getComputedStyle(element).fontFamily
        temp.style.fontWeight = window.getComputedStyle(element).fontWeight
        temp.style.letterSpacing = window.getComputedStyle(element).letterSpacing
        temp.style.whiteSpace = 'nowrap'
        temp.style.lineHeight = '1'
        temp.textContent = longestLine
        document.body.appendChild(temp)

        // Binary search for optimal font size
        let minSize = 16
        let maxSize = isMobile ? 50 : 45 // Very small max size
        let optimalSize = minSize

        while (minSize <= maxSize) {
          const testSize = Math.floor((minSize + maxSize) / 2)
          temp.style.fontSize = `${testSize}px`
          
          const textWidth = temp.getBoundingClientRect().width
          
          if (textWidth <= containerWidth) {
            optimalSize = testSize
            minSize = testSize + 1
          } else {
            maxSize = testSize - 1
          }
        }

        // Apply the optimal font size
        element.style.fontSize = `${optimalSize}px`
        document.body.removeChild(temp)
      })
    }

    // Initial resize
    resizeText()

    // Resize on window resize with debounce
    let resizeTimer
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resizeText, 50)
    }

    window.addEventListener('resize', debouncedResize)
    
    // Also listen to orientation change for mobile devices
    window.addEventListener('orientationchange', () => {
      setTimeout(resizeText, 250) // Extra delay for orientation changes
    })
    
    return () => {
      window.removeEventListener('resize', debouncedResize)
      window.removeEventListener('orientationchange', resizeText)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title" ref={titleRef}>
            Mission-critical robotics.<br/>
            Aerospace-grade systems.<br/>
            Built to deploy.
          </h1>
          <div className="hero-cta desktop-only">
            <CTAButtons variant="hero" />
          </div>
        </div>
        <div className="hero-visual">
          <div className="tracking-demo">
            <div className="world-grid"></div>
            <div className="aircraft aircraft-1"></div>
            <div className="aircraft aircraft-2"></div>
            <div className="aircraft aircraft-3"></div>
            <div className="sight-line line-1"></div>
            <div className="sight-line line-2"></div>
            <div className="zoom-window">
              <div className="target"></div>
            </div>
          </div>
        </div>
        <div className="hero-cta mobile-only">
          <CTAButtons variant="hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero