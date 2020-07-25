export function addGrudge(person, reason) {
  return {
    type: 'GRUDGE_ADD',
    payload: {
      person,
      reason,
      forgiven: false
    }
  };
}

export function forgive(id) {
  return {
    type: 'GRUDGE_FORGIVE',
    payload: {
      id
    }
  };
}

export function undo() {
  return { type: 'UNDO' };
}

export function redo() {
  return { type: 'REDO' };
}
