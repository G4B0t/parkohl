import { isDef } from '@utils/def'
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { ToastContentProps } from 'react-toastify'

import { ICONS_TYPES } from '../../../Icon'

import { ToastProps } from '../../types'

import {
  ArrowDown,
  BodyItem,
  BodyWrapper,
  Label,
  More,
  Root,
  Title,
} from './styles'

const Body: FC<ToastContentProps<ToastProps>> = ({ data }) => {
  const { body, title } = data
  const lines = useMemo(() => (Array.isArray(body) ? body : [body]), [body])
  const [collapsed, setCollapsed] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [bodyNode, setBodyNode] = useState<HTMLDivElement>()

  const handleBodyRef = useCallback((node: HTMLDivElement) => {
    setBodyNode(node)
  }, [])

  const handleCollapsed = useCallback(() => {
    setCollapsed(false)
    setShowMore(false)
  }, [])

  useEffect(() => {
    if (isDef(bodyNode)) {
      const { clientHeight, scrollHeight } = bodyNode
      if (scrollHeight - clientHeight > 1) {
        setShowMore(true)
      }
    }
  }, [bodyNode])

  return (
    <Root>
      {isDef(title) && <Title>{title}</Title>}
      <BodyWrapper ref={handleBodyRef} collapsed={collapsed}>
        {lines.map((line, i) => (
          <BodyItem key={i}>{line}</BodyItem>
        ))}
      </BodyWrapper>
      {showMore && (
        <More onClick={handleCollapsed}>
          <Label>Show more</Label>
          <ArrowDown
            icon={ICONS_TYPES['ChevronDown']}
            onClick={handleCollapsed}
            size={18}
          />
        </More>
      )}
    </Root>
  )
}

export default memo(Body)
