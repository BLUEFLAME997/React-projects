import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { CODE_SNIPPETS } from '../contants'
import '../style/CodeEditor.scss'

const CodeEditor = ({language,values,setValues,editorRef}) => {
  
  const onMount=(editor)=>{
    editorRef.current=editor;
    editor.focus();
  }

  const onSelect=()=>{
    setValues(
      CODE_SNIPPETS[language]
    )
  }

  useEffect(()=>{
    onSelect()
  },[language])

  return (
    <div className='code-editor-container'>
    
      <Editor
        height="90vh"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
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
