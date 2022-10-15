import { useParams } from 'react-router';

const MeasureDetails = () => {
  const { id } = useParams();

  return (
    <div className="container section details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Measure Title - { id }</span>
          <p>Text for measurements</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Dana Koval</div>
          <div>15th October, 2022</div>
        </div>
      </div>
    </div>
  );
};

export default MeasureDetails;
