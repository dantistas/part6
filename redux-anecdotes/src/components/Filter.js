import React from 'react'
import { useSelector } from 'react-redux'

const Filter = ({dispatch, filter}) => {
  const filterState = useSelector(state => state.filter)
  const handleChange = (event) => {
      dispatch(filter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter