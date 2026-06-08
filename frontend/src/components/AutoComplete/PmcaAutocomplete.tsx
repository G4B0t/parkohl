import { memo, useCallback, useMemo } from 'react'

import AutoComplete from './index'
import { Sizes } from './enums'
import { OptionType } from './types'

interface PmcaAutocompleteProps {
  disableCloseOnSelect?: boolean
  enableSelectedTooltip?: boolean
  error?: boolean
  errorMessages?: string[]
  label: string
  loading?: boolean
  onChange: (newValue: OptionType | undefined) => void
  options: OptionType[]
  value: OptionType | undefined
}

const PmcaAutocomplete = ({
  disableCloseOnSelect = false,
  error = false,
  errorMessages = [],
  label,
  loading = false,
  onChange,
  options,
  value,
}: PmcaAutocompleteProps) => {
  const errorMessage = useMemo(
    () => (error ? errorMessages.join(', ') || label : undefined),
    [error, errorMessages, label],
  )

  const handleChange = useCallback(
    (newValue: OptionType | undefined) => {
      onChange(newValue)
    },
    [onChange],
  )

  return (
    <AutoComplete
      disableCloseOnSelect={disableCloseOnSelect}
      error={errorMessage}
      fullWidth
      label={label}
      loading={loading}
      name={label}
      onChange={handleChange}
      options={options}
      placeholder={label}
      size={Sizes.small}
      value={value}
    />
  )
}

export default memo(PmcaAutocomplete)
