import React, { FC, memo, useCallback } from 'react'

import { ICONS_TYPES } from '../../../Icon'
import { Root } from './styles'
import { Props } from './types'

const ToastCloseButton: FC<Props> = ({ closeToast }) => {
  const onHandleClick = useCallback(
    (e: React.MouseEvent<HTMLElement> | KeyboardEvent) =>
      closeToast(e as React.MouseEvent<HTMLElement>),
    [closeToast],
  )

  return <Root icon={ICONS_TYPES.XMark} size={20} onClick={onHandleClick} />
}

export default memo(ToastCloseButton)
