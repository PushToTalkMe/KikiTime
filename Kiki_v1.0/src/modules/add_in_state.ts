export const addInState = (state: any, setState: any, id: any) => {
  if (!state.includes(id)) {
    setState([...state, id]);
  }
};
