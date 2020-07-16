const filterReducer = (state = null, action) => {
    switch (action.type) {
        case 'FILTER':
          return state = action.data.content
        
        default:
          return state
      }
}

export const filter = (content) => {
    return {
      type: 'FILTER',
      data: {
        content
      }
    }
  }

export default filterReducer