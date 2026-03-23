import React from 'react'
import './style/App.scss'
import { Editor } from '@monaco-editor/react'
import CodeEditor from './components/CodeEditor'
import LanguageSelector from './components/LanguageSelector'
import { useState } from 'react'

const App = () => {
  const [language, setLanguage] = useState('javascript');
  const handleButtonValue = (data) => {
    setLanguage(data)
  }

  return (
    <div className='box'>
      <LanguageSelector onSelect={handleButtonValue} language={language}/>
      <CodeEditor language={language}/>
    </div>
  )
}

export default App
