import * as React from 'react'
import { useSpring, animated } from '@react-spring/web'

interface HamburgerToggleProps {
  svgIconSize?: number
  svgIconWeight?: number
  svgXWeight?: number
  svgColor?: string
  isOpen?: boolean
  onClick?: () => void
}

interface PathProps {
  d: string
  style: object
}

const Path = ({d, style}: PathProps) => (
  <animated.path
    fill='none'
    stroke='inherit'
    strokeLinecap='round'
    d={d}
    style={style}
  />
)

const useBarAnimation = (isOpen: boolean, svgIconWeight: number) => {
  return useSpring({
    reverse: isOpen,
    config: {
      friction: 27,
      tension: 400
    },
    from: {
      opacity: 0,
      strokeWidth: 0,
      transform: 'scale(0)',
      transformOrigin: 'center'
    },
    to: {
      opacity: 1,
      strokeWidth: svgIconWeight,
      transform: 'scale(1)',
      transformOrigin: 'center'
    }
  })
}

const HamburgerToggle = ({
  svgIconSize = 50,
  svgIconWeight = 2,
  svgXWeight = 2,
  svgColor = '#000',
  isOpen = false,
  onClick = () => {console.log("Clicked")}
}: HamburgerToggleProps): React.ReactElement => {

  const topBar = useBarAnimation(isOpen, svgIconWeight)
  const middleBar = useBarAnimation(isOpen, svgIconWeight)
  const bottomBar = useBarAnimation(isOpen, svgIconWeight)

  const dotXLeft = useSpring({
    reverse: isOpen,
    config: {
      friction: 27,
      tension: 400
    },
    from: {
      d: 'M 15 15 L 35 35',
      strokeWidth: svgXWeight
    },
    to: {
      d: 'M 25 25 L 25 25',
      strokeWidth: 0
    }
  })

  const dotXRight = useSpring({
    reverse: isOpen,
    config: {
      friction: 27,
      tension: 400
    },
    from: {
      d: 'M 15 35 L 35 15',
      strokeWidth: svgXWeight
    },
    to: {
      d: 'M 25 25 L 25 25',
      strokeWidth: 0
    }
  })

  return (
    <svg
      width={svgIconSize}
      height={svgIconSize}
      stroke={svgColor}
      onClick={onClick}
      viewBox='0 0 50 50'
    >
      <Path d='M 10 15 L 40 15' style={topBar} />
      <Path d='M 10 25 L 40 25' style={middleBar} />
      <Path d='M 10 35 L 40 35' style={bottomBar} />
      <Path d='M 15 15 L 35 35' style={dotXLeft} />
      <Path d='M 15 35 L 35 15' style={dotXRight} />
    </svg>
  )
}

export default HamburgerToggle
