const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case '@login/connectWallet':
      return [...state,
        action.payload
      ]
    case '@login/disconnectWallet':
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export default loginReducer
