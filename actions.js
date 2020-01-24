import { FETCHING, FETCHING_FAILURE, FETCHING_SUCCESS } from './constants';

export function fetchPeopleFromAPI() {
    return(dispatch) => {
        dispatch(getPeople())
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(json => {
                dispatch(getPeopleSuccess(json.results))
              })
            .catch(err => dispatch(getPeopleFailure(err)))
    }
}

function getPeople() {
    return {
        type: FETCHING
    }
}

function getPeopleSuccess(data) {
    return {
        type: FETCHING_SUCCESS,
        data,
    }
}

function getPeopleFailure() {
    return {
        type: FETCHING_FAILURE
    }
}