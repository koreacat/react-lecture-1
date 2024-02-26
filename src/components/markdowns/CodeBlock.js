import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

function CodeBlock(props) {
  const {children, className, node, ...rest} = props
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      children={String(children).replace(/\n$/, '')}
      language={match[1]}
    />
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  )
}

export default CodeBlock
