import React, { Component } from "react";
import AceEditor from "react-ace";

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import 'brace/ext/language_tools'
import 'brace/ext/beautify'

export default class Home extends Component {
  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          name="code"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          width={'100%'}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
      </div>
    );
  }
}
