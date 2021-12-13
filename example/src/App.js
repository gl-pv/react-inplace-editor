import React from 'react';
import 'react-inplace-editor/dist/index.css';
import InplaceEditor from 'react-inplace-editor';

const App = () => {
  return (
    <InplaceEditor
      withChangesSubmitOnEnter
      defaultInputValue="test value"
      onChange={(value) => { console.log(value) }}
      activator={<div>Click here for input showing!</div>}
      valuePresenter={(value) => (<div>Example: {value}</div>)}
    >
      <input autoFocus />
    </InplaceEditor>
  );
}

export default App
