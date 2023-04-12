const GLobalReducer = (state , action) => {

    switch(action.type){

        case "SAVE" : 
        return{
            ...state,
            transactions : [...state.transactions , action.payload]
        }

        case "DELETE":
            return{
                ...state,
                transactions : state.transactions.filter(item => item.id !== action.payload)
            }

        default : 
        return state
    }
}

export default GLobalReducer