// Styling
// http://localhost:3000/isolated/exercise/06-ex-1.js

import React from 'react'
  const UsernameForm = ({onSubmitUsername}) =>{
    const usernameInputRef = React.useRef()

    const handleSubmit = (event) => {
      event.preventDefault()
      onSubmitUsername(usernameInputRef.current.value)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App