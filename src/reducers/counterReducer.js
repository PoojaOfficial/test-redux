const initState = {
    counter: 5,
 }
 
 const counterReducer = (state = initState, action) => {
     switch (action.type) {
       case 'INCREMENT_COUNT':
         return {...state,
                 counter:state.counter+1      
         }
       case 'DECREMENT_COUNT':
           return {...state,
             counter:state.counter-1      
     }
       default:
         return state
     }
   }
 
 export default counterReducer;