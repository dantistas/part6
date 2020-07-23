import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteAnecdote, initializeAnecdotes } from './reducers/anecdoteReducer'
import { notificationCreate, notificationVote, notificationNull } from './reducers/notificationReducer'
import {filter} from './reducers/filterReducer'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
import anecdoteService from './services/anecdotes'




const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const searchFilter = useSelector(state => state.filter)
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  }, [dispatch])


  anecdotes.sort(function (a, b) {
    return b.votes - a.votes
  })


  return (
    <div>
      <Filter filter={filter} dispatch={dispatch}/>
      <Notification notification={notification}/>
      <AnecdoteList dispatch={dispatch} voteAnecdote={voteAnecdote} anecdotes={anecdotes} notificationVote={notificationVote} notificationNull={notificationNull} searchFilter={searchFilter}/>
      <AnecdoteForm dispatch={dispatch} createAnecdote={createAnecdote} notificationCreate={notificationCreate}  notificationNull={notificationNull}/>
    </div>
  )
}

export default App