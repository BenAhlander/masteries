const initialState = {
    search: 'this is search from state'
};


//ACTION TYPES
const UPDATE_SEARCH = 'UPDATE_SEARCH';

//ACTION CREATORS
export function getSearch(search) {
    return {
        type: UPDATE_SEARCH,
        payload: search
    };
}

//REDUCER FUNCTIONS
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return Object.assign({}, state, { search: action.payload });
        default: return state;
    }
}