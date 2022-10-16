import { useDispatch } from 'react-redux'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { deleteMeasure } from '../../store/actions';

const Measurements = ({ measures, editFormVisibility, handleEdit }) => {
  const dispatch = useDispatch();

  return measures.map((measure) => (
    <div className="book" key={measure.id}>
      <div className="content">
        <h4>{measure.title}: {measure.content}</h4>
      </div>

      <div className="actions">
        {editFormVisibility === false && (
          <>
            <span className="edit" onClick={() => handleEdit(measure)}>
              <Icon icon={edit2} size={24}/>
            </span>
            <span className="trash" onClick={() => dispatch(deleteMeasure(measure.id))}>
              <Icon icon={trash} size={24}/>
            </span>
          </>
        )}
      </div>
    </div>
  ));
};

export default Measurements;
