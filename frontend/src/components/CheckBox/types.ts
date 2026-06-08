import { ChangeEvent } from 'react';

import { Sizes } from './enums';

export interface Props {
  className?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  loading?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: boolean) => void;
  readOnly?: boolean;
  required?: boolean;
  size?: Sizes;
  checked?: boolean;
  indeterminate?: boolean;
}
