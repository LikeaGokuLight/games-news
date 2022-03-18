
const SET_NAME = 'SET_NAME';
const FETCH_ALL_USERS = 'FETCH_ALL_USERS';

const INITIAL_STATE = {
    name: '',
    isLogged: false,
    users: []
};

export const userReducer = ( state = INITIAL_STATE, actions ) => {

    const { type, payload } = actions;

    switch (type) {
        case SET_NAME:
            return {
                ...state,
                name: payload.name
            }
        case FETCH_ALL_USERS:
            return {
                ...state,
                users: payload.users
            }
        default:
            return {
                ...state
            }
    }

};