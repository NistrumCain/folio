import DataStore from 'flux/stores/DataStore';
import Treehouse from 'components/Treehouse';

class Home extends React.Component {
  render() {
    let allData = DataStore.getAll();
    return (
      <div>
        <div className="centering">
          <Treehouse />
        </div>
      </div>
    );
  }
}

export default Home;
