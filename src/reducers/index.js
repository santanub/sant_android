import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
//import { reducer as network } from 'react-native-offline';
import breakJourney from './breakJourney';

const appReducers = combineReducers({
  breakJourney,
  
});

export default appReducers;
