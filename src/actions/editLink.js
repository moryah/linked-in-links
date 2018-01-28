function EditLink(id, newLink) {
  const EDIT_LINK = 'EDIT_LINK'
  return {
    type: EDIT_LINK,
    id,
    newLink
  }
}

export default EditLink
