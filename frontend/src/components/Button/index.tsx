import { LegacyRef, Ref, forwardRef, memo, useMemo } from 'react'

import { DEFAULT_BUTTON_TYPE } from './constants'
import { Sizes, StyleTypes } from './enums'
import {
  Label,
  LeftIcon,
  RightIcon,
  Root,
  StyledLink,
  StyledLoader,
} from './styles'
import { Props } from './types'

const Button = (
  {
    className,
    disabled,
    id,
    label,
    leftIcon,
    loading,
    onClick,
    rightIcon,
    size = Sizes.medium,
    styleType = StyleTypes.filled,
    to,
    type = DEFAULT_BUTTON_TYPE,
    width100 = false,
    ...rest
  }: Props,
  ref: unknown,
) => {
  const hasLabel = useMemo(() => !!label, [label])
  const content = useMemo(
    () =>
      loading ? (
        <StyledLoader aria-label="Loading" role="status" />
      ) : (
        <>
          {leftIcon && (
            <LeftIcon
              $buttonDisabled={disabled}
              $hasLabel={hasLabel}
              {...leftIcon.props}
              icon={leftIcon.type}
              size={leftIcon.size}
            />
          )}
          {label && <Label>{label}</Label>}
          {rightIcon && (
            <RightIcon
              $buttonDisabled={disabled}
              $hasLabel={hasLabel}
              {...rightIcon.props}
              icon={rightIcon.type}
              size={rightIcon.size}
            />
          )}
        </>
      ),
    [disabled, hasLabel, label, leftIcon, loading, rightIcon],
  )

  if (to) {
    return (
      <StyledLink
        ref={ref as Ref<HTMLAnchorElement>}
        className={className}
        onClick={onClick}
        to={to}>
        <Root
          $hasLabel={hasLabel}
          disabled={disabled || loading}
          size={size}
          styleType={styleType}
          type={DEFAULT_BUTTON_TYPE}>
          {loading ? <StyledLoader aria-label="Loading" role="status" /> : content}
        </Root>
      </StyledLink>
    )
  }

  return (
    <Root
      $hasLabel={hasLabel && !loading}
      className={className}
      disabled={disabled || loading}
      id={id}
      onClick={onClick}
      ref={ref as LegacyRef<HTMLButtonElement>}
      size={size}
      styleType={styleType}
      type={type}
      width100={width100}
      {...rest}>
      {content}
    </Root>
  )
}

export { Sizes, StyleTypes }
export type { Props }

export default memo(forwardRef(Button))
