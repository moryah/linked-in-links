function DeleteLink(id) {
  const DELETE_LINK = 'DELETE_LINK'
  return {
    type: DELETE_LINK,
    id
  }
}

export default DeleteLink
