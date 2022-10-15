export const createMeasure = (measure) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('measures').add({
      ...measure,
    }).then(() => {
      dispatch({ type: 'ADD_MEASURE', measure });
    }).catch((error) => {
      dispatch({ type: 'ADD_MEASURE_ERROR', error });
    });
  }
};
