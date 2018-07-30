export const feed = {
  state: [],
  reducers: {
    '@init': (state, init) => {
      return [...state, ...init];
    }
  }
};
