import { createAction } from 'redux-actions';
import { FETCH_BREAK_JOURNEYS } from '../constants/actionTypes';

const loadBJSuccess = createAction(FETCH_BREAK_JOURNEYS);

export function loadBJs() {
    return(dispatch) => {
        dispatch(loadBJSuccess);
    }
}


export function loadCandidateAnswers() {
    return (dispatch) => {
      return fetch_candidate_answers()
        .then(payload => { 
          dispatch(loadCandidateAnswersSuccess(payload));
          dispatch(loadQuestionState(payload));
        });
    }
  }
  