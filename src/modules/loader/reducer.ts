import {getType} from 'typesafe-actions';

import {Actions} from '../actions';
import {apiCallError, apiCallStart, apiCallSuccess} from './actions';

export interface Loader {
  error: Error | null;
  loading: boolean;
}

export interface LoaderState {
  [key: string]: Readonly<Loader>;
}

export const initialState = {};

export const loaderReducer = (
  state: LoaderState = initialState,
  action: Actions,
): LoaderState => {
  switch (action.type) {
    case getType(apiCallStart): {
      return {
        ...state,
        [action.meta.name]: {
          ...state[action.meta.name],
          loading: true,
          error: null,
        },
      };
    }
    case getType(apiCallSuccess): {
      return {
        ...state,
        [action.meta.name]: {
          ...state[action.meta.name],
          loading: false,
          error: null,
        },
      };
    }
    case getType(apiCallError): {
      return {
        ...state,
        [action.meta.name]: {
          ...state[action.meta.name],
          loading: false,
          error: action.payload.requestError,
        },
      };
    }
    default:
      return state;
  }
};

export type LoaderKey = 'FETCH_DICTATIONS';
