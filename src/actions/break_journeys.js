import { createAction } from 'redux-actions';
import { FETCH_BREAK_JOURNEYS } from '../constants/actionTypes';
import { fetch_data } from '../api/break_journeys';

const loadBJSuccess = createAction(FETCH_BREAK_JOURNEYS);

export function loadBJs() {
    return(dispatch) => {
      return fetch_data()
        .then(payload => {
          dispatch(loadBJSuccess(payload))
        });
    }
}
