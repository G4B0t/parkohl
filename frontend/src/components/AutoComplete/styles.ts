import { Chip } from '@mui/material';
import { flexStyle, rgba, textStyle } from '@themes/mixins';
import styled, { css } from 'styled-components';

import CheckBox from '../CheckBox';
import Icon from '../Icon';

import { Sizes } from './enums';

export const Root = styled.div<{ fullWidth: boolean }>`
  ${flexStyle({
    align: 'flex-start',
    direction: 'column',
    justify: 'flex-start',
    wrap: 'nowrap',
  })};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
export const StyledChip = styled(Chip)`
  ${flexStyle({ align: 'center', wrap: 'nowrap' })};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  height: 25px;
  max-width: 100px;
  margin-right: 5px;
  cursor: pointer;

  & .MuiChip-deleteIcon {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 18px;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
      opacity: 0.8;
    }
  }
`;
export const AutoCompleteContainer = styled.div<{
  sizeType: Sizes;
  readOnly: boolean;
}>`
  width: 100%;

  ${StyledChip} {
    ${({ sizeType }) => {
      switch (sizeType) {
        case Sizes.small:
          return css`
            height: 15px;
          `;

        default:
          return css`
            height: 25px;
          `;
      }
    }}
  }

  & label {
    color: ${({ theme }) => theme.colors.textSecondary};

    ${({ sizeType }) => {
      switch (sizeType) {
        case Sizes.small:
          return css`
            font-size: 14px;
            top: -10px;
          `;
        case Sizes.medium:
          return css`
            top: -4px;
          `;
        default:
          return css``;
      }
    }}
  }

  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.textPrimary};
    top: 0;
  }

  & label.MuiFormLabel-filled {
    top: 0;
  }

  & label.MuiInputLabel-shrink {
    top: 0;
  }

  & .MuiAutocomplete-tag {
    margin: 7px 3px 3px 3px;
    max-width: calc(100% - 26px);
  }

  & span.MuiAutocomplete-tag {
    position: absolute;
    right: 28px;
  }

  & .MuiAutocomplete-tag + input.MuiAutocomplete-input {
    position: relative;
  }

  & .MuiInputLabel-formControl.Mui-error {
    color: ${({ theme }) => theme.colors.red};

    & .MuiInputLabel-asterisk.Mui-error {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.colors.textPrimary};

    ${({ sizeType }) => {
      switch (sizeType) {
        case Sizes.small:
          return css`
            padding: 2px 14px;
            font-size: 12px;
          `;
        case Sizes.medium:
          return css`
            padding: 5px 14px;
          `;
        default: //large
          return css`
            padding: 9px;
          `;
      }
    }}
    ${({ readOnly }) => {
      switch (readOnly) {
        case true:
          return css`
            background-color: ${({ theme }) => rgba(theme.colors.divider, 10)};
          `;
        default:
          return css``;
      }
    }}
    & input.MuiAutocomplete-input {
      ${({ sizeType }) => {
        switch (sizeType) {
          case Sizes.small:
            return css`
              padding: 5px 4px 3px 5px;
              font-size: 12px;
            `;
          default: //large
            return css``;
        }
      }}
    }

    & .MuiChip-root + input.MuiAutocomplete-input {
      position: absolute;
    }

    & .MuiChip-label {
      ${textStyle({
        color: 'textPrimary',
        lineHeight: 1,
        size: '11px',
        textAlign: 'left',
        weight: 400,
      })};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 6px;
      padding-right: 6px;

      ${({ sizeType }) => {
        switch (sizeType) {
          case Sizes.small:
            return css`
              font-size: 10px;
            `;
          default:
            return css``;
        }
      }}
    }

    & fieldset {
      border-color: ${({ theme }) => theme.colors.divider};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.textSecondary};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.textSecondary};
    }

    &.Mui-focused .MuiChip-root + input.MuiAutocomplete-input:focus {
      position: relative;
      width: 100%;
    }

    & .MuiAutocomplete-endAdornment {
      & .MuiIconButton-root {
        color: ${({ theme }) => theme.colors.textPrimary};

        &:hover {
          background-color: ${({ theme }) =>
            rgba(theme.colors.textPrimary, 10)};
        }
      }
    }

    &.Mui-error {
      & .MuiOutlinedInput-input::placeholder {
        color: ${({ theme }) => theme.colors.red};
      }

      &.Mui-focused fieldset {
        border-color: ${({ theme }) => theme.colors.red};
      }

      & fieldset {
        color: ${({ theme }) => theme.colors.red};
      }

      &:hover fieldset {
        border-color: ${({ theme }) => theme.colors.red};
      }

      & .MuiAutocomplete-endAdornment {
        & .MuiIconButton-root {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
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
  margin-right: 8px;
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
export const StyledCheckBox = styled(CheckBox)`
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0;
  margin-right: 8px;

  & .MuiCheckbox-root {
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: 2px 9px 2px 9px;
  }
`;
export const Option = styled.li`
  ${textStyle({
    color: 'textPrimary',
    lineHeight: 1,
    size: '12px',
    textAlign: 'left',
    weight: 400,
  })};
  letter-spacing: 0.4px;
`;
export const Label = styled.label<{ error?: boolean }>`
  ${flexStyle({ align: 'center', wrap: 'nowrap' })};
  ${textStyle({
    color: 'textPrimary',
    lineHeight: 1,
    size: '12px',
    textAlign: 'left',
    weight: 400,
  })};
  margin-bottom: 8px;
  letter-spacing: 0.5px;

  ${({ error, theme }) =>
    error &&
    css`
      color: ${theme.colors.red};
    `}
`;
export const RequiredMark = styled.span<{ error?: boolean }>`
  ${textStyle({
    color: 'textPrimary',
    lineHeight: 1,
    size: '12px',
    textAlign: 'left',
    weight: 400,
  })};
  margin-left: 5px;

  ${({ error, theme }) =>
    error &&
    css`
      color: ${theme.colors.red};
    `}
`;
