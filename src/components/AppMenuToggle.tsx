import * as React from 'react'
import { useSpring, animated } from '@react-spring/web'

interface AppMenuToggleProps {
  svgIconSize?: number
  svgIconWeight?: number
  svgXWeight?: number
  svgColor?: string
  isOpen?: boolean
  onClick?: () => void
}

const Path = (props: any) => (
  <animated.path
    stroke='inherit'
    strokeLinecap='round'
    style={{ transformOrigin: 'center' }}
    {...props}
  />
)

const AppMenuToggle = ({
  svgIconSize = 50,
  svgIconWeight = 2,
  svgXWeight = 2,
  svgColor = '#000',
  isOpen = false,
  onClick = () => {console.log('clicked')},
}: AppMenuToggleProps): React.ReactElement => {
  const animationDefaults = {
    reverse: isOpen,
    config: {
      friction: 27,
      tension: 400
    }
  }

  const dot = useSpring({
    ...animationDefaults,
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

  const dotXLeft = useSpring({
    ...animationDefaults,
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
    ...animationDefaults,
    from: {
      d: 'M 15 35 L 35 15',
      strokeWidth: svgXWeight
    },
    to: {
      d: 'M 25 25 L 25 25',
      strokeWidth: 0
    }
  })

  // Coordinates for the 9 dots
  const coordinates = ['16 16', '25 16', '34 16', '16 25', '25 25', '34 25', '16 34', '25 34', '34 34'];

  return (
    <svg
      width={svgIconSize}
      height={svgIconSize}
      stroke={svgColor}
      fill={svgColor}
      onClick={onClick}
      viewBox='0 0 50 50'
    >
      {coordinates.map((coordinate, i) => (
        <Path key={i} style={dot} d={`M ${coordinate} L ${coordinate}`} />
      ))}
      <Path {...dotXLeft} />
      <Path {...dotXRight} />
    </svg>
  )
}

export default AppMenuToggle
