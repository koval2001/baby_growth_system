import Notifications from '../UI/Notifications';
import List from '../Measurements/List';
import { connect } from 'react-redux';

const Dashboard = ({ measures }) => {
  console.log(measures);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <List measures={measures} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    measures: state.measure.measures,
  }
};

export default connect(mapStateToProps)(Dashboard);
