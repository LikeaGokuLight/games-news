const FETCH_GAME_DETAIL_BY_ID = 'FETCH_GAME_DETAIL_BY_ID';
const LOADING_DETAIL = 'LOADING_DETAIL';

const INITIAL_STATE = {
    game: {
        platforms: []
    },
    screenShots: {
        results: []
    },
    isLoading: true
};

export const detailReducer = (state = INITIAL_STATE, actions) => {

    const { type, payload } = actions;

    switch (type) {
        case  FETCH_GAME_DETAIL_BY_ID:
            return {
                ...state,
                game: payload.game,
                screenShots: payload.screenShots,
                isLoading: false
            };
        case LOADING_DETAIL:
            return {
                ...state,
                isLoading: true
            };
        default:
            return {
                ...state
            }
    }

};