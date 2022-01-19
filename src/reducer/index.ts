import {FIRST_UPDATE, SECOND_UPDATE, THIRD_UPDATE, FORTH_UPDATE, FIFTH_UPDATE} from '../constants'

const INITIAL_STATE = {
    first: null,
    second: null,
    third: null,
    forth: null,
    fifth: null
};

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FIRST_UPDATE: {
            return {
                ...state,
                first: action.payload
            }
        }
        case SECOND_UPDATE: {
            return {
                ...state,
                second: action.payload
            }
        }
        case THIRD_UPDATE: {
            return {
                ...state,
                third: action.payload
            }
        }
        case FORTH_UPDATE: {
            return {
                ...state,
                forth: action.payload
            }
        }
        case FIFTH_UPDATE: {
            return {
                ...state,
                fifth: action.payload
            }
        }
        default: return state;
    }

};
export default reducer;