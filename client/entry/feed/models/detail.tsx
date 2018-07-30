export const detail = {
  state: [],
  reducers: {
    '@init': (state, init) => {
      return { ...state, ...init };
    },
    update(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
