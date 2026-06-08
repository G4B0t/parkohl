import { MouseEvent } from 'react';

import { ICONS_TYPES } from './constants';

export interface Props {
  className?: string;
  disabled?: boolean;
  icon: keyof typeof ICONS_TYPES;
  onClick?: (event: MouseEvent<HTMLElement> | KeyboardEvent) => void;
  rotate?: number;
  size: number;
  tabIndex?: number;
}
