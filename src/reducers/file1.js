const initState = {
    value:0,
    message: '',
    dummy: ''
}

export default (state = initState, action)=> {
    // console.log(state);
    switch(action.type){
        case 'increment': {
            return {
                ...state,
                value:state.value + 1,
                message: action.payload
            }
        }
        case 'decrement': {
            return {
                ...state,
                value: state.value - 1,
                message: action.payload
            }
        }
        default : return state
    }

}