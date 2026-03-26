import React from 'react'
import '../style/CodeTest.scss';
import {executeCode} from '../api'

const CodeTest = ({editorRef,language,output,setOutput}) => {

  const runCode = async () => {
  const sourceCode = editorRef.current.getValue();

  try {
    const data = await executeCode(sourceCode, language);

    const finalOutput =
      data.stdout || data.stderr || data.compile_output || "No Output";

    setOutput(finalOutput);   // 🔥 THIS LINE IS IMPORTANT

  } catch (err) {
    console.error(err);
    setOutput("Error running code");
  }
};

  return (
    <div className='code-test'>
      <p>Output</p>
      <button 
      onClick={runCode}>Run Code</button>
      <div className="output">
        <pre>
          {output}
        </pre>
      </div>
    </div>
  )
}

export default CodeTest
