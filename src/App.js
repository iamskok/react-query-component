import React from 'react'
import Query from './Query'

const KEY = ``

const RenderJSON = ({ data }) => {
  return (
    <>
      <br />
      <br />
      <pre>
        <code>
          {JSON.stringify(data)}
        </code>
      </pre>
      <br />
      <br />
    </>
  )
}

function App() {
  return (
    <Query
      urls={`https://api.flipsidecrypto.com/api/v2/projects/metrics?api_key=${KEY}`}
    >
      <RenderJSON />
      <RenderJSON />
    </Query>
  )
}

export default App
