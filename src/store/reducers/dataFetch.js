export const ENABLE_DATAFETCH = 'dataFetch/ENABLE_DATAFETCH';
export const PUSH = 'dataFetch/PUSH';

const initialState = {
  isDataFetchEnabled: false,
  promises: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_DATAFETCH:
      return {
        ...state,
        isDataFetchEnabled: true
      };
    case PUSH:
      return {
        ...state,
        promises: [...state.promises, action.promise]
      };
    default:
      return state;
  }
};

export const enableDataFetch = () => {
  return {
    type: ENABLE_DATAFETCH
  };
};

export const push = promise => {
  return {
    type: PUSH,
    promise
  };
};