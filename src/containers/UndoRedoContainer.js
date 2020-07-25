import { connect } from '../context';
import { undo, redo } from '../actions';
import UndoRedo from '../components/UndoRedo';

const mapStateToProps = (state) => {
  return {
    isPast: !!state.past.length,
    isFuture: !!state.future.length
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    undo() {
      dispatch(undo());
    },
    redo() {
      dispatch(redo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
