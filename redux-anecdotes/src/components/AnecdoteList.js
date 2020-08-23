import React from 'react'
import { connect } from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {notificationVote, notificationNull} from '../reducers/notificationReducer'

let timeOutId


const anecdoteList = (props) => {
  
    const vote = (anecdote) => {
        clearTimeout(timeOutId)
        props.voteAnecdote(anecdote)
        props.notificationVote(anecdote.content)
        timeOutId = setTimeout(props.notificationNull, 2000)       
      }

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
            <li key={anecdote.id}>
              <div>{anecdote.content} <strong> has {anecdote.votes} </strong> <button onClick={ () => vote(anecdote)}>vote</button></div>
            </li>
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


const mmapDispatchToProps = {
  voteAnecdote,
  notificationVote,
  notificationNull
}

const connectedAnecdotes = connect(mapStateToProps, mmapDispatchToProps)(anecdoteList)

export default connectedAnecdotes