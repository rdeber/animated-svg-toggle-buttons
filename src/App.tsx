import { useState } from 'react'
import AppMenuToggle from './components/AppMenuToggle'
import './App.css'
import HamburgerToggle from './components/HamburgerToggle'
import SearchToggle from './components/SearchToggle'

function App() {
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  function toggleAppMenu() {
    setIsAppMenuOpen(!isAppMenuOpen)
  }

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  function toggleSearch() {
    setIsSearchOpen(!isSearchOpen)
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
      <SearchToggle
        svgIconSize={150}
        svgIconWeight={4}
        svgXWeight={4}
        isOpen={isSearchOpen}
        onClick={toggleSearch}
      />
    </>
  )
}

export default App
