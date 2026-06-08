import { Checkbox, FormControlLabel } from '@mui/material';
import { flexStyle, textStyle } from '@themes/mixins';
import styled, { css } from 'styled-components';

import Icon from '../Icon';

import { Sizes } from './enums';
import { Props } from './types';

export const Root = styled.div<Partial<Props>>`
  ${flexStyle({
    align: 'flex-start',
    direction: 'column',
    justify: 'flex-start',
    wrap: 'nowrap',
  })};
`;
export const StyledFormControlLabel = styled(FormControlLabel)<{
  error?: string;
  sizetype: Sizes;
}>`
  color: ${({ theme }) => theme.colors.textPrimary};

  & .MuiCheckbox-root {
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 0 8px;
  }
  & .MuiFormControlLabel-label {
      ${({ sizetype }) => {
        switch (sizetype) {
          case Sizes.small:
            return css`
              ${textStyle({
                color: 'textPrimary',
                lineHeight: 1,
                size: '12px',
                textAlign: 'left',
                weight: 400,
              })};
            `;
          default:
            return css`
              ${textStyle({
                color: 'textPrimary',
                lineHeight: 1,
                size: '16px',
                textAlign: 'left',
                weight: 400,
              })};
            `;
        }
      }}
  }
  &.Mui-error {
      margin-bottom: 6px !important;
  }
  &.Mui-error span.MuiCheckbox-root {
      color: ${({ theme }) => theme.colors.red};
  }
  
  ${({ error, theme }) =>
    error &&
    css`
      color: ${theme.colors.red};

      & span.MuiCheckbox-root {
        color: ${({ theme }) => theme.colors.red};
      }
      &.Mui-error .MuiFormControlLabel-label {
        color: ${({ theme }) => theme.colors.red};
      }
    `}
`;
export const StyledCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.colors.textPrimary} !important;

  &.Mui-checked {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`;
export const ErrorMessageContainer = styled.div<{
  sizetype: Sizes;
}>`
  ${flexStyle({ align: 'center', wrap: 'nowrap' })};
  ${({ sizetype }) => {
    switch (sizetype) {
      case Sizes.small:
        return css`
          margin-top: 2px;
        `;
      case Sizes.medium:
        return css`
          margin-top: 8px;
        `;
      default:
        return css`
          margin-top: 8px;
        `;
    }
  }}
`;
export const AttentionIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.red};
  margin-right: 4px;
`;
export const ErrorMessage = styled.span`
  ${textStyle({
    color: 'red',
    lineHeight: 1,
    size: '12px',
    textAlign: 'left',
    weight: 400,
  })};
  letter-spacing: 0.4px;
`;
