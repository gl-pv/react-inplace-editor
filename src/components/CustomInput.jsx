import { useCallback, cloneElement } from 'react'

export default function CustomInput({
  inputRef,
  inputValue,
  hideInput,
  submitInput,
  setInputValue,
  withChangesSubmitOnEnter,
  children
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (withChangesSubmitOnEnter && e.key === 'Enter') {
        e.preventDefault()
        hideInput()
        submitInput()
      }
      children.props.onKeyDown && children.props.onKeyDown(e)
    },
    [withChangesSubmitOnEnter, hideInput, submitInput, children]
  )

  const handleChange = useCallback(
    (e) => {
      setInputValue(e.target.value)
      children.props.onChange && children.props.onChange(e)
    },
    [setInputValue, children]
  )

  return cloneElement(children, {
    ref: inputRef,
    value: inputValue,
    onChange: handleChange,
    onKeyDown: handleKeyDown
  })
}
