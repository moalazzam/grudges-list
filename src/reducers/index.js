import grudges from './grudges';

export default function rootReducer(state = {}, action) {
  return {
    grudges: grudges(state.grudges, action)
  };
}
