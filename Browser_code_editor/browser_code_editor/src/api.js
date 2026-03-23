import axios from 'axios';
import { LANGUAGE_VERSIONS } from './contants';

const API=axios.create({
  baseURL:'https://emkc.org/api/v2/piston/'
})

export async function executeCode(sourceCode,language){
  const response=await API.post('execute',{
  "language": language,
  "version": LANGUAGE_VERSIONS[language],
  "files": [
    {
      "content": sourceCode
    }
  ]
  })

  return response.data;
}

