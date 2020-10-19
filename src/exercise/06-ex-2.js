// Styling
// http://localhost:3000/isolated/exercise/06-ex-2.js

import React from 'react'
  const UsernameForm = ({onSubmitUsername}) =>{
    const [error, setError] = React.useState(null)

    const handleSubmit = (event) => {
      event.preventDefault()
      onSubmitUsername(event.target.elements.usernameInput.value)
    }

    const handleChange = (event) => {
        const {value} = event.target
        const isValid = value === value.toLowerCase()
        setError(isValid ? null : 'Username must be lower case')
      }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange}/>
      </div>
      <div>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App