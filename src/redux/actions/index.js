export const add = item => ({
  type: "ADD",
  payload: {
    item: item,
  },
});
export const remove = id => ({
  type: "REMOVE",
  payload: {
    id: id,
  },
});

export const reset = () => ({
  type: "RESET",
});

export const newProductState = item => ({
  type: "ADD-PRODUCT",
  payload: item,
});
