import { SVGProps } from 'react'

import { IconName } from './enums'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export interface IconFrameProps {
  $size: number
}
