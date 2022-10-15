import MeasureSummary from '../MeasureSummary';

const List = ({ measures }) => (
  <div className="list section">
    {measures && measures.map(measure => <MeasureSummary measure={measure} key={measure.id} />)}
  </div>
);

export default List;
