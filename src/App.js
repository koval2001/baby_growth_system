import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Measurements from './components/Measurements';
import Form from './components/Form';
import { getMeasurements, deleteAll } from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  const measures = useSelector((state) => state.operationsReducer);

  useEffect(()=>{
    dispatch(getMeasurements())
  },[dispatch]);

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [measureToBeEdited, setMeasureToBeEdited] = useState('');

  const handleEdit = (bookObj) => {
    setEditFormVisibility(true);
    setMeasureToBeEdited(bookObj);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
    setMeasureToBeEdited('');
  };

  return (
    <div className="custom-container">
      <h1 className="heading mb-5">
        Baby Growth System
      </h1>
      <Form
        editFormVisibility={editFormVisibility}
        cancelUpdate={cancelUpdate}
        measureToBeEdited={measureToBeEdited}
      />
      {measures.length > 0? (
        <>
          <Measurements
            measures={measures}
            editFormVisibility={editFormVisibility}
            handleEdit={handleEdit}
          />
          {measures.length > 1 &&(
            <button className="btn btn-outline-danger btn-md delete-all" onClick={() => dispatch(deleteAll())}>
              DELETE ALL
            </button>
          )}
        </>) : (
        <div className="message-box">
          No measurements found
        </div>
      )}
    </div>
  );
};

export default App;
