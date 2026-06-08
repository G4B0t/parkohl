import { memo, useCallback, useMemo } from 'react'

import AutoComplete from './index'
import { Sizes } from './enums'
import { OptionType } from './types'

interface PmcaMultipleOptionType {
  id: string
  label: string
}

interface PmcaMultipleAutocompleteProps {
  disableCloseOnSelect?: boolean
  error?: boolean
  errorMessages?: string[]
  label: string
  loading?: boolean
  maxVisibleChips?: number
  onChange: (newValue: PmcaMultipleOptionType[]) => void
  options: PmcaMultipleOptionType[]
  value: PmcaMultipleOptionType[]
}

const toOptionType = (option: PmcaMultipleOptionType): OptionType => ({
  label: option.label,
  value: option.id,
})

const fromOptionType = (option: OptionType): PmcaMultipleOptionType => ({
  id: String(option.value),
  label: option.label,
})

const PmcaMultipleAutocomplete = ({
  disableCloseOnSelect = false,
  error = false,
  errorMessages = [],
  label,
  loading = false,
  maxVisibleChips = 1,
  onChange,
  options,
  value,
}: PmcaMultipleAutocompleteProps) => {
  const mappedOptions = useMemo(() => options.map(toOptionType), [options])
  const mappedValue = useMemo(() => value.map(toOptionType), [value])
  const errorMessage = useMemo(
    () => (error ? errorMessages.join(', ') || label : undefined),
    [error, errorMessages, label],
  )

  const handleChange = useCallback(
    (newValue: OptionType[]) => {
      onChange(newValue.map(fromOptionType))
    },
    [onChange],
  )

  return (
    <AutoComplete<OptionType, true>
      disableCloseOnSelect={disableCloseOnSelect}
      error={errorMessage}
      fullWidth
      label={label}
      limitTags={maxVisibleChips}
      loading={loading}
      multiple
      name={label}
      onChange={handleChange}
      options={mappedOptions}
      placeholder={label}
      size={Sizes.small}
      value={mappedValue}
    />
  )
}

export default memo(PmcaMultipleAutocomplete)
