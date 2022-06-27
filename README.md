# react-inplace-editor

> This library allows to create inline editor with input or textarea.

[![NPM](https://img.shields.io/npm/v/react-inplace-editor.svg)](https://www.npmjs.com/package/react-inplace-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-inplace-editor
```

## Usage

### With clicking on editor for input visibility
```jsx
import React, { Component } from 'react'
import InplaceEditor from 'react-inplace-editor'

class Example extends Component {
  render() {
    return (
      <InplaceEditor
        as="input"
        withChangesSubmitOnEnter
        defaultInputValue="init value"
        onChange={(value) => { console.log(value) }}
        inputProps={{
          className: 'example-styles-class',
        }}
      />
    );
  }
}
```

### With clicking on activator component for input visibility
```jsx
import React, { Component } from 'react'
import InplaceEditor from 'react-inplace-editor'

class Example extends Component {
  render() {
    return (
      <InplaceEditor
        as="textarea"
        withChangesSubmitOnEnter={false}
        defaultInputValue="init value"
        onChange={(value) => { console.log(value) }}
        activator={<div>Click me for textarea showing!</div>}
      />
    );
  }
}
```

## Customization

InplaceEditor allows to pass custom input as children.
It is usefull for custom styled inputs like inputs from antd.

```jsx
import React, { Component } from 'react'
import InplaceEditor from 'react-inplace-editor'

class Example extends Component {
  render() {
    return (
      <InplaceEditor
        defaultInputValue="init value"
        onChange={(value) => { console.log(value) }}
        activator={<div>Click me for textarea showing!</div>}
      >
        <input onChange={() => { console.log('this onChange will be called too') }} />
      </InplaceEditor>
    );
  }
}
```

## Available props

#### onChange
Handler for input changes.

```jsx
  onChange={(value) => { console.log(value)}}
```

#### activator
React component responsible for input displaying.

```jsx
  activator={<div>Click on me!</div>}
```

#### valuePresenter
Custom presentation for saved value.

```jsx
  valuePresenter={(value) => <div>{`Result: ${value}`}</div>}
```

#### withChangesSubmitOnEnter
Allows input submittion by Enter key down. Default value is true.

```jsx
  withChangesSubmitOnEnter={false}
```

#### inputProps
Custom props for built in input. Useless with custom input.

```jsx
  inputProps={{ className: "example-class" }}
```

#### defaultInputValue
Default value for input.

```jsx
  defaultInputValue="default value"
```

#### emptyValue
Presenter for empty input value. Displaying only when input value is empty.

```jsx
  emptyValue="Input value is empty!"
```

#### as
Built in input type. Available: input, textarea. Default value is 'input'.

```jsx
  as="textarea"
```

#### closeOnOutsideClick
Close input on outside click. Default value is true.

```jsx
  closeOnOutsideClick={false}
```
## License

MIT © [](https://github.com/)
