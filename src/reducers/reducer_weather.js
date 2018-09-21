import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // To prevent mistakes - creating new instance of state
            // 1) return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }
    return state;
}