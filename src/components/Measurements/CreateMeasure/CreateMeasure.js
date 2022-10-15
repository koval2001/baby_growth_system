import { useState } from 'react';
import { connect } from 'react-redux';
import { createMeasure } from '../../../store/actions/measureActions';

const CreateMeasure = ({ createMeasure }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value)
    } else {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(content);
    createMeasure({ title, content });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create measure</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea className="materialize-textarea"  id="content" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMeasure: (measure) => dispatch(createMeasure(measure)),
  };
};

export default connect(null, mapDispatchToProps)(CreateMeasure);
