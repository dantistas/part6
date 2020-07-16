import React from 'react'


const Filter = ({dispatch, filter}) => {
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