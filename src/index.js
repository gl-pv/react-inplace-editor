import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
  cloneElement
} from 'react'
import BuiltInInput from './components/BuiltInInput'
import CustomInput from './components/CustomInput'

export default function InplaceEditor({
  children,
  onChange,
  activator,
  valuePresenter,
  closeOnOutsideClick = true,
  withChangesSubmitOnEnter = true,
  inputProps = {},
  defaultInputValue = '',
  emptyValue = 'empty value',
  as = 'input'
}) {
  const inputRef = useRef(null)
  const [isInputVisible, setIsInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState(defaultInputValue)

  useEffect(() => {
    if (isInputVisible) {
      document.addEventListener('click', handleClickOutside)

      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [inputValue, isInputVisible])

  function handleClickOutside(e) {
    const target = e.target

    if (closeOnOutsideClick && target !== inputRef.current) {
      setIsInputVisible(false)
      submitInput()
    }
  }

  const showInput = useCallback(() => {
    setIsInputVisible(true)
  }, [setIsInputVisible])

  const hideInput = useCallback(() => {
    setIsInputVisible(false)
  }, [setIsInputVisible])

  const submitInput = useCallback(() => {
    onChange && onChange(inputValue)
  }, [inputValue, onChange])

  function renderInput() {
    if (children) {
      return (
        <CustomInput
          inputRef={inputRef}
          inputValue={inputValue}
          withChangesSubmitOnEnter={withChangesSubmitOnEnter}
          hideInput={hideInput}
          submitInput={submitInput}
          setInputValue={setInputValue}
          children={children}
        />
      )
    }

    return (
      <BuiltInInput
        as={as}
        inputProps={inputProps}
        inputRef={inputRef}
        inputValue={inputValue}
        withChangesSubmitOnEnter={withChangesSubmitOnEnter}
        hideInput={hideInput}
        submitInput={submitInput}
        setInputValue={setInputValue}
      />
    )
  }

  const handleWrapperClick = useCallback(() => {
    if (activator) {
      return
    }

    showInput()
  }, [activator, showInput])

  const activatorClick = useCallback(
    (e) => {
      showInput()
      activator.props.onClick && activator.props.onClick(e)
    },
    [showInput]
  )

  function renderValuePresentation() {
    let valuePresentation = inputValue || emptyValue
    if (valuePresenter) {
      valuePresentation = valuePresenter(inputValue)
    }

    return <div onClick={handleWrapperClick}>{valuePresentation}</div>
  }

  function renderActivator() {
    return cloneElement(activator, { onClick: activatorClick })
  }

  return (
    <Fragment>
      {isInputVisible ? renderInput() : renderValuePresentation()}
      {activator && renderActivator()}
    </Fragment>
  )
}
