import Notifications from '../UI/Notifications';
import List from '../Measurements/List';

const Dashboard = () => (
  <div className="dashboard container">
    <div className="row">
      <div class="col s12 m6">
        <List />
      </div>
      <div className="col s12 m5 offset-m1">
        <Notifications />
      </div>
    </div>
  </div>
);

export default Dashboard;
