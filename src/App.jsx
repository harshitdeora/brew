import { useEffect, useState } from 'react'
import './App.css'
import { HeroSection } from './components/HeroSection/HeroSection'
import { EmailSignup } from './components/EmailSignup/EmailSignup'
import { Footer } from './components/Footer/Footer'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const isDark = theme === 'dark'

  return (
    <div className="appRoot">
      <main className="shell" aria-label="Royal chai coming soon landing page">
        <div className="topBar">
          <button
            type="button"
            className="themeToggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <span className="themeToggleIcon" aria-hidden="true">
              {isDark ? '☾' : '☼'}
            </span>
            <span>{isDark ? 'Night' : 'Day'} mode</span>
          </button>
        </div>
        <div className="content">
          <HeroSection />
          <EmailSignup />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
