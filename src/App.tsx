import { useState } from 'react'
import AppMenuToggle from './components/AppMenuToggle'
import './App.css'

function App() {
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  function toggleAppMenu() {
    setIsAppMenuOpen(!isAppMenuOpen)
  }

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  return (
    <>
      <AppMenuToggle
        svgIconSize={150}
        svgIconWeight={5}
        svgXWeight={4}
        isOpen={isAppMenuOpen}
        onClick={toggleAppMenu}
      />
      <HamburgerToggle
        svgIconSize={150}
        svgIconWeight={4}
        svgXWeight={4}
        isOpen={isHamburgerOpen}
        onClick={toggleHamburger}
      />
    </>
  )
}

export default App
