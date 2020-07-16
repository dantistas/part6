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

export const notificationCreate = (content) => {
    return {
      type: 'NOTIFICATION_CREATE',
      data: {
        content
      }
    }
  }

  export const notificationVote = (content) => {
    return {
      type: 'NOTIFICATION_VOTE',
      data: {
        content
      }
    }
  }

  export const notificationNull = () => {
    return {
      type: 'NOTIFICATION_NULL'
      
    }
  }

export default notificationReducer