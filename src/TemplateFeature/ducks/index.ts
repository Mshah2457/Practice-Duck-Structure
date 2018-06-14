import axios, { AxiosResponse } from "axios";
import { Action, Dispatch } from "redux";
import { Map, fromJS } from "immutable";
import { handleActions } from "redux-actions";

//GraphQL
import gql from 'graphql-tag';
import gqlClient from '../../GraphQL';

// Models
import { SampleModel } from "../models";
import { setAppIsLoading } from "../../Main/ducks";

// Action Types
const SET_SOME_VALUE = 'agordia/demoFeature/SET_SOME_VALUE';
const SET_SOME_STUFF = 'agordia/demoFeature/SET_SOME_STUFF';
const SET_SOME_GQL = 'agordia/demoFeature/SET_SOME_GQL';

// Reducers
export interface State extends Map<string, any> {
    someValue: string;
    someStuff: SampleModel;
    someOtherValue: boolean;
}

// Action Interfaces
interface SetSomeValue extends Action {
    value: string;
}
interface SetSomeStuff extends Action {
  value: SampleModel;
}
interface SetSomeGql extends Action {
  value: any;
}

// Initial Store State
const initialState = Map({
    someValue: "The Value",
    someStuff: null,
    someOtherValue: true,
    someGql: null,
});

export default handleActions(
    {
        [SET_SOME_VALUE]: (
            state: State,
            action: SetSomeValue
        ) => state.set('someValue', action.value),
        [SET_SOME_STUFF]: (
          state: State,
          action: SetSomeStuff
        ) => state.set('someStuff', action.value),
        [SET_SOME_GQL]: (
          state: State,
          action: SetSomeStuff
        ) => state.set('someGql', action.value),
    },
    initialState
);

// Action Creators
export const setSomeValue = (value: string) => ({
    type: SET_SOME_VALUE,
    value
});
export const setSomeStuff = (value: SampleModel) => ({
    type: SET_SOME_STUFF,
    value
});
const setSomeGQLObject = (value: any) => ({
    type: SET_SOME_GQL,
    value
});

// Thunk Action Creators
export const setSomeValueAndFetchStuff = (value: string) => async (dispatch: Dispatch<any>) => {
    // We can dispatch actions before making an async call
    // This is a good place to dispatch loaders!
    dispatch(setSomeValue(value));

    try {

      // Fetch dumb stuff
      const stuff = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then((res: AxiosResponse) => {
              return fromJS(res.data); // Convert JSON to Immutable!
          });

      // After the async call, we can make as many dispatches as we want.
      // We could set some important values, hide loaders, etc
      dispatch(setSomeStuff(stuff));
      dispatch(setSomeValue(`[[ ${value} >> ${stuff.get("title")}`)); // Change someValue... again....

    } catch (err) {
      console.log('error', err);
      throw err;
      // Here we gracefully manage the error
      // And... wait for it.... dispatch error messages!
      // dispatch(setGlobalErrorMessage("Oooppssss...")); // Obviously this is an example since we have not set the action for the error message
    }
};

// GraphQL Example Thunk
export const fetchSomeValueWithGQL = () => async (dispatch: Dispatch<any>) => {
  try{
    const MOVIE_QUERY = gql`
    query MovieQuery($id: ID!) {
      Movie(id: $id) {
        id
        title
        actors {
           name
        }
      }
    }
    `;

    const response = await gqlClient.query({
      query: MOVIE_QUERY,
      variables: {
        id: 'cixos5gtq0ogi0126tvekxo27'
      }
    })
      .then( res => res.data) // Unpack

    dispatch(setSomeGQLObject(response));

  } catch (err) {
    console.log('error', err);
    // Here we gracefully manage the error
    // And... wait for it.... dispatch error messages!
    // dispatch(setGlobalErrorMessage("Oooppssss...")); // Obviously this is an example since we have not set the action for the error message
  }
};
