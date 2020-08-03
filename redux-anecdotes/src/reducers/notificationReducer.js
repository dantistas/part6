const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIFICATION_CREATE':
          return state = `You have created ( ${action.data.content} ) anecdote!`
        case 'NOTIFICATION_VOTE':
            return state = `you  vote for ( ${action.data.content} )`
        case 'NOTIFICATION_NULL':
            return state = null
            
         
        default:
          return state
      }
      
}



export const notificationCreate = (content, timeOut) => {
    return async dispatch => {
      await dispatch(
        {
          type: 'NOTIFICATION_CREATE',
          data: {
            content
          }
        }
      )
      setTimeout(() => {
        dispatch(
          {
            type: 'NOTIFICATION_NULL'
            
          }
        )
      }, timeOut)
    } 
  }
 
  export const notificationVote = (content, timeOut) => {
    return async dispatch => {
      await dispatch(
        {
          type: 'NOTIFICATION_VOTE',
          data: {
            content
          }
        }
      )
      setTimeout(() => {
        dispatch(
          {
            type: 'NOTIFICATION_NULL'
            
          }
        )
      }, timeOut)
    }
    
  }


export default notificationReducer