import { Action, Dispatch } from 'redux';
import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

// Action Types
const APP_IS_LOADING = 'agordia/main/APP_IS_LOADING';

// State Interface
export interface State extends Map<string, any> {
    isLoading: boolean;
}

// Action Interfaces
interface SetIsLoading extends Action {
    value: boolean;
}

// Initial Store State
const initialState = Map({
    isLoading: true
});

// Reducer
export default handleActions(
    {
        [APP_IS_LOADING]: (
            state: State,
            action: SetIsLoading
        ) => state.set('isLoading', action.value)
    },
    initialState
);

// Action Creators
export const setAppIsLoading = (value: boolean) => ({
    type: APP_IS_LOADING,
    value
});
