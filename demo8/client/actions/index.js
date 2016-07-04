export const increaseAction = {
  type: 'increase',
}

export const decreaseAction = {
  type: 'decrease',
}

export const change = (value) => {
  return {
    type: 'change',
    value,
  }
}
