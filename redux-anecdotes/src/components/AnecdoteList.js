import React from 'react'

const ancdoteList = ({dispatch, voteAnecdote, anecdotes}) => {
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
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
    </div>
  )
}

export default ancdoteList