import React, { useCallback } from 'react'

const AS_TYPE_MAP = {
  input: <input />,
  textarea: <textarea />
}

export default function BuiltInInput({
  as,
  inputProps,
  inputRef,
  inputValue,
  withChangesSubmitOnEnter,
  hideInput,
  submitInput,
  setInputValue
}) {
  let AsInput = AS_TYPE_MAP[as]
  if (!AsInput) { AsInput = <input /> }

  const handleKeyDown = useCallback(
    (e) => {
      if (withChangesSubmitOnEnter && e.key === 'Enter') {
        e.preventDefault()
        hideInput()
        submitInput()
      }
      inputProps.onKeyDown && inputProps.onKeyDown(e)
    },
    [withChangesSubmitOnEnter, hideInput, submitInput, inputProps]
  )

  const handleChange = useCallback(
    (e) => {
      setInputValue(e.target.value)
      inputProps.onChange && inputProps.onChange(e)
    },
    [setInputValue, inputProps]
  )

  return (
    <AsInput.type
      {...inputProps}
      autoFocus
      ref={inputRef}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}
