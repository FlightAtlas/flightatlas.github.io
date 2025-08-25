import { createHashRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Services from './pages/Services'
import Experience from './pages/Experience'
import About from './pages/About'
import ResearchSBIR from './pages/ResearchSBIR'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/research-sbir',
        element: <ResearchSBIR />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/terms',
        element: <Terms />
      }
    ]
  }
])