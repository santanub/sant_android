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


export function loadCandidateAnswers() {
    return (dispatch) => {
      return fetch_candidate_answers()
        .then(payload => { 
          dispatch(loadCandidateAnswersSuccess(payload));
          dispatch(loadQuestionState(payload));
        });
    }
  }
  