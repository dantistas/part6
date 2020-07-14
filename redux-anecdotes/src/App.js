import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"



const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  anecdotes.sort(function (a, b) {
    return b.votes - a.votes
  })


  return (
    <div>
      <AnecdoteList dispatch={dispatch} voteAnecdote={voteAnecdote} anecdotes={anecdotes}/>
      <AnecdoteForm dispatch={dispatch} createAnecdote={createAnecdote}/>
    </div>
  )
}

export default App