import React from 'react'


const ancdoteList = ({dispatch, voteAnecdote, anecdotes , notificationVote, searchFilter}) => {
    
    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(voteAnecdote(anecdote))
        dispatch(notificationVote(anecdote.content, 2))
      }

      

    if(searchFilter === null){
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                  </div>
                </div>
              )}
            </div>
          )
    }else{
        const filteredAnecdotes = anecdotes.filter((anecdote)=>{
            return anecdote.content.toLowerCase().includes(searchFilter.toLowerCase())
          })
          if(filteredAnecdotes.length === 0 ) {
              return (
                  <div>
                    <p>Could not find enything</p>
                  </div>
              )
          }else {
            return (
                <div>
                <h2>Anecdotes</h2>
                  {filteredAnecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                      <div>
                        {anecdote.content}
                      </div>
                      <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                      </div>
                    </div>
                  )}
                </div>
              )
          }
    }

}

export default ancdoteList