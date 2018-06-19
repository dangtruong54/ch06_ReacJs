import * as types from './../constant/ActionTypes';

let defaultState = [
    { to: '/', name: 'Home' }
]

const breadcrumb = (state = defaultState, action) => {
    
    let {to, name} = action;
    switch (action.type) {

        case types.GO_HOME:
            return state;

        case types.GO_ALBUM:
            return state;

        case types.GO_ARTIST:
            state[1] = {to, name};                   
            return state;

        default:
            return state;
    }
}

export default breadcrumb;