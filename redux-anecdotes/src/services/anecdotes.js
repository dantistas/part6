import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content: content,
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteAnecdote = async (anecdote) => {
  await axios.put(`${baseUrl}/${anecdote.id}`,{
    content: anecdote.content,
    id: anecdote.id,
    votes: anecdote.votes +1
  }).then(res=>{
    return res
  })

}

export default { getAll, createNew, voteAnecdote }