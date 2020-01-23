import { FETCHING, FETCHING_FAILURE, FETCHING_SUCCESS } from '../constants';

const initialState = {
    people: [],
    isFetching: false,
    error: false
}

export default function peopleReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING: 
            return {
                ...state,
                isFetching: true,
                people: []
            }
        
        case FETCHING_SUCCESS:
            return {    
                ...state,
                isFetching: false,
                people: action.data
            }

        case FETCHING_SUCCESS:
            return {    
                ...state,
                isFetching: false,
                error: true
             }

        default:
            return state
    }
}