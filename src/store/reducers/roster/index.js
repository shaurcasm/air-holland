import * as actionType from '../../actions/actionTypes';
import produce from 'immer';


const INITIAL_STATE = {
    roster: [],
    error: ""
};

const roster = (state = INITIAL_STATE, action) => produce(state, draft => {
    switch(action.type) {
        case actionType.GET_ROSTER:
            draft.roster = action.roster;
            draft.error = action.error;
            break;

        case actionType.FLUSH_ROSTER:
            draft.roster = [];
            draft.error = '';
            break;
        
        default:
            break;
    }
});

export default roster;