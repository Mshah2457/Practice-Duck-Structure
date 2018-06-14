/**
 * This is where we combine ALL reducers
 */

import { combineReducers } from 'redux-immutablejs';

import template from '../TemplateFeature/ducks';
import nav from '../Navigation/ducks';
import global from '../Main/ducks';

export default combineReducers({
  template,
  nav,
  global
});
