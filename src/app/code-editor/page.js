'use client';

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';

const languageExtensions = {
  javascript: javascript(),
  python: python(),
  html: html(),
};

export default function MultiLangEditor() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleCodeChange = (code) => {
    console.log('code: ', code);
    setCode(code);
  }

  return (
    <div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
      </select>

      <CodeMirror
        value={code}
        height="300px"
        extensions={[languageExtensions[language]]}
        onChange={(value) => handleCodeChange(value)}
      />
    </div>
  );
}