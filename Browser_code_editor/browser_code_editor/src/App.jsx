import React from 'react'
import './style/App.scss'
import { Editor } from '@monaco-editor/react'
import CodeEditor from './components/CodeEditor'
import LanguageSelector from './components/LanguageSelector'
import { useState } from 'react'
import CodeTest from './components/CodeTest'
import { useRef } from 'react'

const App = () => {
  const [language, setLanguage] = useState('javascript');
  const [values, setValues] = useState('');
  const [output,setOutput]=useState('');
  const editorRef = useRef();

  const handleButtonValue = (data) => {
    setLanguage(data)
  }

  return (
    <div className='box'>
      <div className="code">
        <LanguageSelector onSelect={handleButtonValue} language={language} />
        <CodeEditor language={language} values={values} setValues={setValues} editorRef={editorRef} />
      </div>
      <CodeTest editorRef={editorRef} language={language} output={output} setOutput={setOutput}/>
    </div>
  )
}

export default App
