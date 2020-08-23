import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"





const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  // const searchFilter = useSelector(state => state.filter) 
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
      <Filter/>
      <Notification notification={notification}/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App