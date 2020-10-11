// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({style, className= '', size, ...props}) => {
  size = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small"
           style={{backgroundColor: 'lightblue'}}
           >small lightblue box</Box>
      <Box size="medium" 
           style={{backgroundColor: 'pink'}}
           >medium pink box</Box>
      <Box size="large" 
           style={{backgroundColor: 'orange'}}
           >large orange box</Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App