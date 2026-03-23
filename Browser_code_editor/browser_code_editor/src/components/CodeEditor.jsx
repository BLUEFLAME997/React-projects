import { Box } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'

const CodeEditor = ({language}) => {
  const [values,setValues]=useState('');
  const editorRef=useRef();
  const onMount=(editor)=>{
    editorRef.current=editor;
    editor.focus();
  }

  return (
    <div>
    
      <Editor
        height="90vh"
        language={language}
        defaultValue="// some comment"
        value={values}
        onChange={(value,)=>{setValues(value)
        }}
        onMount={onMount}
        theme='vs-dark'
      />;

    </div>
  )
}

export default CodeEditor
