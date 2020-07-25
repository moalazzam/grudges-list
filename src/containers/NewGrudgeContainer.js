import { connect } from '../context';
import { addGrudge } from '../actions';
import NewGrudge from '../components/NewGrudge';

const mapDispatchToProps = (dispatch) => {
  return {
    addGrudge(person, reason) {
      dispatch(addGrudge(person, reason));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewGrudge);
