import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteAnecdote } from './reducers/anecdoteReducer'
import { notificationCreate, notificationVote } from './reducers/notificationReducer'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"




const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  anecdotes.sort(function (a, b) {
    return b.votes - a.votes
  })


  return (
    <div>
      <Notification/>
      <AnecdoteList dispatch={dispatch} voteAnecdote={voteAnecdote} anecdotes={anecdotes} notificationVote={notificationVote}/>
      <AnecdoteForm dispatch={dispatch} createAnecdote={createAnecdote} notificationCreate={notificationCreate} />
    </div>
  )
}

export default App