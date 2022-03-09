import React, { useState, useEffect } from 'react'
import MetamaskButton from './login/MetamaskButton'
import Upload from './uploadFiles'

const App = () => {
  const [facts, setFacts] = useState([])
  const [listening, setListening] = useState(false)
  const token = localStorage.getItem('token')
  const user = JSON.parse(token)

  const url = `http://localhost:5000/events/${user}`
  const buildUrl = `/events${user}`

  const subscribeUrl = process.env.REACT_ENV !== 'production' ? url : buildUrl

  useEffect(() => {
    if (!listening) {
      const events = new EventSource(subscribeUrl)

      events.onmessage = (event) => {
        const data = JSON.parse(event.data)
        console.log({
          initialEvent: data,
          event
        })
        const parsedData = JSON.parse(event.data)
        setFacts((facts) => facts.concat(parsedData))
      }

      setListening(true)
    }
  }, [listening, facts])

  console.log(facts)

  return (
<div className="bg-gray-500 font-mono" >
    <MetamaskButton />
    <div>
      <Upload user={user} />
    </div>
    <table className="stats-table">
      <thead>
        <tr>
          <th>Fact</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {
          facts.map((fact, i) =>
            <tr key={i}>
              <td>{fact.name}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
  )
}
export default App
