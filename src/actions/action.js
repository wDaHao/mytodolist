export const addTag = (tag) => ({
  type: "ADD_TAG",
  tag
});

export const switchTag = (tag) => ({
  type: "SWITCH_TAG",
  tag
});

export const addTodo = (value) => ({
  type: "ADD_TODO",
  value
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id
});