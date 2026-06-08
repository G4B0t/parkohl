import { ChangeEvent, LegacyRef, forwardRef, useCallback } from 'react';

import { ICONS_TYPES } from '../Icon';

import { Sizes } from './enums';
import {
  AttentionIcon,
  ErrorMessage,
  ErrorMessageContainer,
  Root,
  StyledCheckbox,
  StyledFormControlLabel,
} from './styles';
import { Props } from './types';

const CheckBox = (
  {
    className,
    checked,
    disabled,
    error,
    label,
    loading,
    name,
    onChange,
    readOnly = false,
    required,
    size = Sizes.medium,
    indeterminate = false,
  }: Props,
  ref: unknown,
) => {
  const disabledOrLoading = disabled || loading;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!readOnly) {
        onChange?.(e, e.target.checked);
      }
    },
    [onChange, readOnly],
  );

  return (
    <Root className={className} ref={ref as LegacyRef<HTMLInputElement>}>
      <StyledFormControlLabel
        checked={checked}
        control={
          <StyledCheckbox
            indeterminate={indeterminate}
            onChange={handleChange}
            readOnly={readOnly}
          />
        }
        disabled={disabledOrLoading}
        error={error}
        label={label}
        name={name}
        required={required}
        sizetype={size}
        className={className}
      />
      {!!error && (
        <ErrorMessageContainer sizetype={size}>
          <AttentionIcon icon={ICONS_TYPES.Attention} size={20} />
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorMessageContainer>
      )}
    </Root>
  );
};

export type { Props };

export default forwardRef(CheckBox);
