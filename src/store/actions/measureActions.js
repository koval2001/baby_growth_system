export const createMeasure = (measure) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_MEASURE', measure });
  }
};
