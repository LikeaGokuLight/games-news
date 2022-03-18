
const FETCH_GAMES = 'FETCH_GAMES';
const FETCH_SEARCHED_GAME = "FETCH_SEARCHED_GAME";
const CLEAN_SEARCH = "CLEAN_SEARCH";

const INITIAL_STATE= {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searched: []
};

export const gamesReducer = ( state = INITIAL_STATE, actions ) => {

    const { type, payload } = actions;

    switch (type) {
        case FETCH_GAMES:
            return {
                ...state,
                popularGames: payload.popular,
                upcomingGames: payload.upcoming,
                newGames: payload.newGames
            };
        case FETCH_SEARCHED_GAME:
            return {
                ...state,
                searched: payload.searched
            };
        case CLEAN_SEARCH:
            return {
                ...state,
                searched: []
            };
        default:
            return { ...state }
    }
};

