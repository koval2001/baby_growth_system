import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { postMeasure, updateMeasure } from '../../store/actions';

const Form = ({ editFormVisibility, cancelUpdate, measureToBeEdited }) => {
  const dispatch = useDispatch();

  const [id, setId]=useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [editId, setEditId]=useState('');
  const [editContent, setEditContent]=useState('');
  const [editTitle, setEditTitle]=useState('');

  useEffect(()=>{
    setEditId(measureToBeEdited.id);
    setEditContent(measureToBeEdited.content);
    setEditTitle(measureToBeEdited.title);
  },[measureToBeEdited])

  const handleSubmit=(e)=>{
    e.preventDefault();
    let measure = {
      id, title, content
    }
    dispatch(postMeasure(measure));
    setId('');
    setTitle('');
    setContent('');
  }

  const handleEditSubmit=(e)=>{
    e.preventDefault();
    let editedBook={
      previousId: measureToBeEdited.id,
      id: editId,
      content: editContent,
      title: editTitle,
    }
    dispatch(updateMeasure(editedBook));
  }

  return (
    <>
      {editFormVisibility === false? (
        <form className='form-group container' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-3'>
              <label>Title</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className='col-3'>
              <label>Content</label>
              <input
                type='text'
                className='form-control'
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
            </div>

            <div className='col-3 button-div'>
              <button type="submit" className='btn btn-success btn-md submit-btn'>
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <form className='form-group container' onSubmit={handleEditSubmit}>
            <div className='row'>
              <div className='col-3'>
                <label>Title</label>
                <input
                  type='text'
                  className='form-control'
                  required
                  onChange={(e) => setEditTitle(e.target.value)}
                  value={editTitle || ''}
                />
              </div>

              <div className='col-3'>
                <label>Content</label>
                <input
                  type='text'
                  className='form-control'
                  required
                  onChange={(e) => setEditContent(e.target.value)}
                  value={editContent || ''}
                />
              </div>

              <div className='col-3 button-div'>
                <button type="submit" className='btn btn-success btn-md submit-btn'>
                  Update
                </button>
              </div>
            </div>
          </form>

          <button
            type="button"
            className='btn btn-outline-secondary btn-md back-btn'
            onClick={cancelUpdate}
          >
            Back
          </button>
        </>
      )}
    </>
  );
};

export default Form;
