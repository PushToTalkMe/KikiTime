export const deleteInState = (state: any, setState: any, idIn: any) => {
  setState(state.filter((id: any) => id !== idIn));
};
