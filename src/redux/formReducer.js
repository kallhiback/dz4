const initialState = {
  name: "",
  email: ""
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_EMAIL':   
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };