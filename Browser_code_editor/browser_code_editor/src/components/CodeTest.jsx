import React from 'react'
import '../style/CodeTest.scss';
import {executeCode} from '../api'

const CodeTest = ({editorRef,language}) => {

  const runCode=async()=>{
    const sourceCode=editorRef.current.getValue();
    try{
      const data=await executeCode(sourceCode,language)
      console.log(data)
    }catch(err){
      throw err
    }
  }

  return (
    <div className='code-test'>
      <p>Output</p>
      <button 
      onClick={runCode}>Run Code</button>
      <div className="output">
        test
      </div>
    </div>
  )
}

export default CodeTest
