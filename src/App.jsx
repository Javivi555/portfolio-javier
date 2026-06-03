import { useLayoutEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const navItems = [
  { href: '#sobre-mi', label: 'Perfil' },
  { href: '#skills', label: 'Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const THEME_STORAGE_KEY = 'portfolio-theme'

const isValidTheme = (theme) => theme === 'light' || theme === 'dark'

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

    if (isValidTheme(savedTheme)) {
      return savedTheme
    }
  } catch {
    // localStorage can be unavailable in restricted browser contexts.
  }

  const currentTheme = document.documentElement.dataset.theme

  return isValidTheme(currentTheme) ? currentTheme : 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDarkTheme = theme === 'dark'

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
      } catch {
        // Keep the visual toggle working even if persistence is unavailable.
      }

      return nextTheme
    })
  }

  return (
    <div className="min-h-screen text-slate-100">
      <header className="site-header sticky top-0 z-30 border-b backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src="/favicon.svg"
              alt=""
              className="brand-mark h-8 w-8 rounded-lg border p-1.5"
            />
            <span className="truncate text-sm font-semibold text-white">Javier Escobar Criado</span>
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <div className="nav-links hidden items-center gap-1 rounded-full border p-1 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-xs font-medium transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="theme-toggle"
              aria-label={isDarkTheme ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={isDarkTheme ? 'Activar modo claro' : 'Activar modo oscuro'}
              onClick={toggleTheme}
            >
              <span className="theme-toggle__track" aria-hidden="true">
                <span className="theme-toggle__thumb" />
              </span>
              <span className="hidden sm:inline">{isDarkTheme ? 'Oscuro' : 'Claro'}</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12 lg:py-14">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
