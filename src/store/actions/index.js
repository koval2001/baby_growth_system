import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from 'firebase/firestore';
import fs from '../../config/firebase';

export const ADD_MEASURE = 'ADD_MEASURE';
export const GET_MEASUREMENTS = 'GET_MEASUREMENTS';
export const DELETE_ALL = 'DELETE_ALL';
export const DELETE_MEASURE = 'DELETE_MEASURE';
export const UPDATE_MEASURE = 'UPDATE_MEASURE';

export const postMeasure = (measure) => async(dispatch) => {
  await addDoc(collection(fs, 'measures'),{
    title: measure.title,
    content: measure.content,
  }).then((docRef) => {
    const { id } = docRef;

    dispatch({
      type: ADD_MEASURE,
      payload: { id, ...measure }
    })
  })
};

export const getMeasurements = () => async(dispatch) => {
  const q = query(collection(fs, 'measures'));
  const measurements = await getDocs(q);

  if (measurements.docs.length > 0) {
    var measuresArray = [];

    for(let doc of measurements.docs) {
      const itemToPush =  { id: doc.id, ...doc.data() }
      measuresArray.push(itemToPush);
    }

    dispatch({
      type: GET_MEASUREMENTS,
      payload: measuresArray
    })
  }
};

export const deleteAll = () => async(dispatch) => {
  const q = query(collection(fs,'measures'));
  const measurements = await getDocs(q);

  for(let snap of measurements.docs) {
    await deleteDoc(doc(fs,'measures',snap.id));
  }

  dispatch({
    type: DELETE_ALL
  });
};

export const deleteMeasure = (idToBeDeleted) => async(dispatch) => {
  const q = query(collection(fs,'measures'));
  const measurements = await getDocs(q);

  for(let item of measurements.docs){
    if(item.id === idToBeDeleted){
      await deleteDoc(doc(fs, 'measures', item.id))
    }
  }

  dispatch({
    type: DELETE_MEASURE,
    payload: idToBeDeleted
  });
};

export const updateMeasure = (editedMeasure) => async(dispatch)=>{
  const q = query(collection(fs,'measures'));
  const measurements = await getDocs(q);

  for(var item of measurements.docs){
    if(item.id === editedMeasure.previousId) {
      const bookRef = doc(fs,'measures',item.id);
      await updateDoc(bookRef,{
        id: editedMeasure.id,
        content: editedMeasure.content,
        title: editedMeasure.title
      })
    }
  }

  dispatch({
    type: UPDATE_MEASURE,
    payload: editedMeasure
  });
};
