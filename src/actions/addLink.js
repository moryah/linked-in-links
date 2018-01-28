function AddLink(newLink) {
  const ADD_LINK = 'ADD_LINK'
  return {
    type: ADD_LINK,
    newLink
  }
}

export default AddLink
