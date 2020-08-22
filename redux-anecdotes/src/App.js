import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteAnecdote, initializeAnecdotes } from './reducers/anecdoteReducer'
import { notificationCreate, notificationVote } from './reducers/notificationReducer'
import {filter} from './reducers/filterReducer'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"





const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const searchFilter = useSelector(state => state.filter)
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])



  anecdotes.sort(function (a, b) {
    return b.votes - a.votes
  })


  return (
    <div>
      <Filter filter={filter} dispatch={dispatch}/>
      <Notification notification={notification}/>
      <AnecdoteList dispatch={dispatch} voteAnecdote={voteAnecdote} anecdotes={anecdotes} notificationVote={notificationVote}  searchFilter={searchFilter}/>
      <AnecdoteForm dispatch={dispatch} createAnecdote={createAnecdote} notificationCreate={notificationCreate}  />
    </div>
  )
}

export default App