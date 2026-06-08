import React, {
  forwardRef,
  KeyboardEventHandler,
  LegacyRef,
  useCallback,
} from 'react';

import { ICONS_TYPES, ICON_COMPS } from './constants';
import { Root, SvgWrapper } from './styles';
import { Props } from './types';

const Icon = (
  { className, disabled, icon, onClick, rotate = 0, size, tabIndex }: Props,
  ref: unknown,
) => {
  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' && onClick) {
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <Root
      className={className}
      ref={ref as LegacyRef<HTMLDivElement>}
      onClick={disabled ? undefined : onClick}
      onKeyDown={
        disabled
          ? undefined
          : (keyDownHandler as unknown as KeyboardEventHandler<HTMLDivElement>)
      }
      tabIndex={tabIndex && undefined}
      role="button">
      <SvgWrapper size={size} rotate={rotate}>
        {React.createElement(ICON_COMPS[icon])}
      </SvgWrapper>
    </Root>
  );
};

export { ICONS_TYPES };
export type { Props };

export default forwardRef(Icon);
