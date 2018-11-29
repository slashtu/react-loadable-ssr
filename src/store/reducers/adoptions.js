export const ADOPTIONS_REQUEST = 'adoptions/ADOPTIONS_REQUEST';
export const ADOPTIONS_SUCCESS = 'adoptions/ADOPTIONS_SUCCESS';
export const ADOPTIONS_FAIL = 'adoptions/ADOPTIONS_FAIL';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADOPTIONS_REQUEST:
    case ADOPTIONS_FAIL:
      return state;
    case ADOPTIONS_SUCCESS:
      return [...action.adoptions];
    default:
      return state;
  }
};

export const queryAdoptions = () => async (dispatch) => {
  dispatch({type: 'ADOPTIONS_REQUEST'});

  const res = await fetch(`http://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=30&currentPage=${~~(Math.random() * 10) + 1}`);
  const adoptions = await res.json();

  dispatch({type: ADOPTIONS_SUCCESS, adoptions: Object.values(adoptions)})
}