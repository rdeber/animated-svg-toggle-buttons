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
    fill='#0f0'
    stroke='inherit'
    strokeLinecap='round'
    style={{ transformOrigin: 'center' }}
    {...props}
  />
)

const AppMenuToggle = (
  props: AppMenuToggleProps
): React.ReactElement => {
  const animationDefaults = {
    reverse: props?.isOpen,
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
      strokeWidth: props?.svgIconWeight,
      transform: 'scale(1)',
      transformOrigin: 'center'
    }
  })

  const dotXLeft = useSpring({
    ...animationDefaults,
    from: {
      d: 'M 15 15 L 35 35',
      strokeWidth: props?.svgXWeight
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
      strokeWidth: props?.svgXWeight
    },
    to: {
      d: 'M 25 25 L 25 25',
      strokeWidth: 0
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
      <Path style={{ ...dot }} d="M 16 16 L 16 16" />
      <Path style={{ ...dot }} d="M 25 16 L 25 16" />
      <Path style={{ ...dot }} d="M 34 16 L 34 16" />
      <Path style={{ ...dot }} d="M 16 25 L 16 25" />
      <Path style={{ ...dot }} d="M 25 25 L 25 25" />
      <Path style={{ ...dot }} d="M 34 25 L 34 25" />
      <Path style={{ ...dot }} d="M 16 34 L 16 34" />
      <Path style={{ ...dot }} d="M 25 34 L 25 34" />
      <Path style={{ ...dot }} d="M 34 34 L 34 34" />
      <Path {...dotXLeft} />
      <Path {...dotXRight} />
    </svg>
  )
}

export default AppMenuToggle
