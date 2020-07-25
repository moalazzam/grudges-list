import { connect } from '../context';
import { forgive } from '../actions';
import Grudge from '../components/Grudge';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    forgive() {
      dispatch(forgive(ownProps.grudge.id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Grudge);
