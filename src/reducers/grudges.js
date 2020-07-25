import { v4 as id } from 'uuid';

const grudges = (state = [], action) => {
  if (action.type === 'GRUDGE_ADD') {
    return [
      {
        id: id(),
        ...action.payload
      },
      ...state
    ];
  }

  if (action.type === 'GRUDGE_FORGIVE') {
    return state.map((grudge) => {
      if (grudge.id === action.payload.id) {
        return { ...grudge, forgiven: !grudge.forgiven };
      }
      return grudge;
    });
  }

  return state;
};

export default grudges;
