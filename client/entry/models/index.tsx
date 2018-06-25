import produce from 'immer';
export const user_info = {
  state: {},
  reducers: {
    update(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
