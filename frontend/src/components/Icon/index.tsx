import { memo, useMemo } from 'react'

import { IconName } from './enums'
import { IconFrame } from './styles'
import { IconProps } from './types'

const Icon = ({ name, size = 22, ...svgProps }: IconProps) => {
  const paths = useMemo(() => {
    switch (name) {
      case IconName.check:
        return <path d="M5 12.5 10 17.5 19 6.5" />
      case IconName.email:
        return (
          <>
            <rect height="14" rx="3" width="18" x="3" y="5" />
            <path d="m4 7 8 6 8-6" />
          </>
        )
      case IconName.eye:
        return (
          <>
            <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
            <circle cx="12" cy="12" r="2.5" />
          </>
        )
      case IconName.google:
        return (
          <>
            <path d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3" />
            <path d="M12 22a9.7 9.7 0 0 0 6.8-2.5l-3.3-2.6a6.2 6.2 0 0 1-9.2-3.2" />
            <path d="M6.3 13.7a6 6 0 0 1 0-3.4L3 7.8a10 10 0 0 0 0 8.4" />
            <path d="M12 5.8c1.5 0 2.8.5 3.9 1.5l2.9-2.9A9.8 9.8 0 0 0 12 2 10 10 0 0 0 3 7.8" />
          </>
        )
      case IconName.lock:
        return (
          <>
            <rect height="10" rx="2" width="14" x="5" y="11" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            <path d="M12 15v2" />
          </>
        )
      case IconName.microsoft:
        return (
          <>
            <path d="M3 3h8v8H3Z" />
            <path d="M13 3h8v8h-8Z" />
            <path d="M3 13h8v8H3Z" />
            <path d="M13 13h8v8h-8Z" />
          </>
        )
      case IconName.parkohl:
        return (
          <>
            <path d="M12 2 21 7v10l-9 5-9-5V7Z" />
            <path d="m7 9 5-3 5 3-5 3Z" />
            <path d="m7 15 5 3 5-3" />
          </>
        )
    }
  }, [name])

  return (
    <IconFrame $size={size}>
      <svg
        aria-hidden="true"
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width={size}
        {...svgProps}>
        {paths}
      </svg>
    </IconFrame>
  )
}

export default memo(Icon)
