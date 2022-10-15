const MeasureSummary = ({ measure }) => (
  <div className="card z-depth-0 list-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{measure.title}</span>
      <p>{measure.content}</p>
      <p className="grey-text">15th October, 2022</p>
    </div>
  </div>
);

export default MeasureSummary;
