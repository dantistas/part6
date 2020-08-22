import React from 'react'
import { connect } from 'react-redux'


const anecdoteList = (props) => {
    
    // const vote = (anecdote) => {
    //     console.log('vote', anecdote.id)
    //     dispatch(voteAnecdote(anecdote))
    //     dispatch(notificationVote(anecdote.content, 2))
    //   }

      
    console.log('props: ', props.anecdotes) 
if(props.anecdotes === null ){
  return (
    <div>
      <p>Could not find anything</p> 
    </div>
)
} else {
    return (
      
      <ul>
      <h2>Anecdotes</h2>
        {props.anecdotes.map(anecdote=>
          <div
            key={anecdote.id}
            >
            <div>{anecdote.content} has {anecdote.votes} <button>vote</button></div>
        
  
            </div>
          )}
      </ul>
  )
}

    

}

const mapStateToProps = (state) => {
  if(state.filter === null){
    return {
      anecdotes: state.anecdotes
    }
}else{
    const filteredAnecdotes = state.anecdotes.filter((anecdote)=>{
        return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      })
      if(filteredAnecdotes.length === 0 ) {
          return {
            anecdotes: null
          }
      }else {
        return {
          anecdotes: filteredAnecdotes
        }
      }
}
}

const connectedAnecdotes = connect(mapStateToProps)(anecdoteList)

export default connectedAnecdotes