import { connect } from '../context';
import Grudges from '../components/Grudges';

const mapStateToProps = (state) => {
  return { grudges: state?.present?.grudges };
};

export default connect(mapStateToProps)(Grudges);
