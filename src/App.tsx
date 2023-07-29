import { useState } from 'react'
import './App.css'
import AppMenuToggle from './components/AppMenuToggle'
import HamburgerToggle from './components/HamburgerToggle'
import SearchToggle from './components/SearchToggle'

function App() {
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [iconWeight, setIconWeight] = useState(5);
  const [xWeight, setXWeight] = useState(5);

  function toggleAppMenu() {
    setIsAppMenuOpen(!isAppMenuOpen)
  }

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  function toggleSearch() {
    setIsSearchOpen(!isSearchOpen)
  }

  function handleIconWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setIconWeight(value);
  }

  function handleXWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setXWeight(value);
  }

  return (
    <>
      {/* <div>
        <label htmlFor="iconWeightInput">Icon Weight:</label>
        <input
          type="number"
          id="iconWeightInput"
          value={iconWeight}
          onChange={handleIconWeightChange}
        />
      </div>
      <div>
        <label htmlFor="xWeightInput">X Weight:</label>
        <input
          type="number"
          id="xWeightInput"
          value={xWeight}
          onChange={handleXWeightChange}
        />
      </div> */}
      <AppMenuToggle
        svgIconSize={200}
        svgIconWeight={iconWeight}
        svgXWeight={xWeight}
        isOpen={isAppMenuOpen}
        onClick={toggleAppMenu}
      />
      <HamburgerToggle
        svgIconSize={200}
        svgIconWeight={iconWeight}
        svgXWeight={xWeight}
        isOpen={isHamburgerOpen}
        onClick={toggleHamburger}
      />
      <SearchToggle
        svgIconSize={200}
        svgIconWeight={iconWeight}
        svgXWeight={xWeight}
        isOpen={isSearchOpen}
        onClick={toggleSearch}
      />
    </>
  )
}

export default App
