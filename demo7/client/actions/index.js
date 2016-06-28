export const change = (value) => {
  return {
    type: 'change',
    value,
    actiontry1: 'try1.value',
    actiontry2: value + '>>try2>>',
  }
}
