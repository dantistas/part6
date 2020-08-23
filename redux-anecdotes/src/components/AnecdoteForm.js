import React from 'react'
import {connect} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {notificationCreate} from '../reducers/notificationReducer'

const anecdoteForm = (props) => {
    const addNewAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        props.createAnecdote(content)
        props.notificationCreate(content, 2)
        
      }
  return (
    <div>
    <h2>create new</h2>
    <form onSubmit={addNewAnecdote}>
      <div><input name="anecdote" placeholder="Anecdote"/></div>
      <button type="submit">create</button>
    </form>
    </div>
  )
}



export default connect(null, {createAnecdote, notificationCreate})(anecdoteForm)