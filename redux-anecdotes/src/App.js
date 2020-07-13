import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  anecdotes.sort(function (a, b) {
    return b.votes - a.votes
  })

  const addNewAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch({
      type: 'NEW_ANECDOTE',
      data:{
        content: content,
        id: generateId(),
        votes: 0

      }
    })

  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type:'VOTE',
      data:{
        id:id
      }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App