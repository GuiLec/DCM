import {RootReducer} from '../rootReducer';
import {Loader, LoaderKey} from './reducer';

export const loaderStateSelector = (
  name: LoaderKey,
): ((state: RootReducer) => Loader | undefined) => (
  state: RootReducer,
): Loader | undefined => {
  return state.loader[name];
};

export const actionIsLoadingSelector = (
  name: LoaderKey,
): ((state: RootReducer) => boolean) => (state: RootReducer): boolean => {
  const loaderState = loaderStateSelector(name)(state);
  return loaderState ? loaderState.loading : false;
};

export const actionErrorSelector = (name: LoaderKey) => (
  state: RootReducer,
): Error | null => {
  const loaderState = loaderStateSelector(name)(state);
  if (!loaderState) return null;
  return loaderState.error;
};
