import * as React from 'react'
import { useSpring, animated } from '@react-spring/web'

interface SearchToggleProps {
  svgIconSize?: number
  svgIconWeight?: number
  svgXWeight?: number
  svgColor?: string
  isOpen?: boolean
  onClick?: () => void
}

const Path = (props: any) => (
  <animated.path
    fill='transparent'
    strokeWidth={props?.svgIconWeight}
    stroke='inherit'
    strokeLinecap='round'
    {...props}
  />
)

const SearchToggle = (
  props: SearchToggleProps
): React.ReactElement => {
  const animationDefaults = {
    reverse: props?.isOpen,
    config: {
      friction: 27,
      tension: 400
    }
  }

  const handle = useSpring({
    ...animationDefaults,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  const closeBar = useSpring({
    ...animationDefaults,
    from: { opacity: 1 },
    to: { opacity: 0 }
  })

  const circle = useSpring({
    ...animationDefaults,
    from: { opacity: 0, transform: 'scale(0)', transformOrigin: 'center' },
    to: { opacity: 1, transform: 'scale(1)', transformOrigin: 'center' }
  })

  const dotXLeft = useSpring({
    ...animationDefaults,
    from: {
      d: 'M 15 15 L 35 35',
      strokeWidth: props?.svgXWeight,
      opacity: '1'
    },
    to: {
      d: 'M 25 25 L 25 25',
      strokeWidth: 0,
      opacity: '0'
    }
  })

  const dotXRight = useSpring({
    ...animationDefaults,
    from: {
      d: 'M 15 35 L 35 15',
      strokeWidth: props?.svgXWeight,
      opacity: '1'
    },
    to: {
      d: 'M 25 25 L 25 25',
      strokeWidth: 0,
      opacity: '0'
    }
  })

  return (
    <svg
      width={props?.svgIconSize}
      height={props?.svgIconSize}
      stroke={props?.svgColor}
      onClick={props?.onClick}
      viewBox='0 0 50 50'
    >
      <Path
        fill='transparent'
        strokeWidth={props?.svgIconWeight}
        stroke='inherit'
        d='M 28 28 L 35 35'
        {...handle}
      />
      <animated.circle
        style={{ ...circle }}
        cx='22'
        cy='22'
        r='8'
        fill='transparent'
        strokeWidth={props?.svgIconWeight}
        stroke='inherit'
      />
      <Path {...dotXLeft} />
      <Path {...dotXRight} />
    </svg>
  )
}

export default SearchToggle
