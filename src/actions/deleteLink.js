export const DeleteLink = (id) => {
  console.log('DeleteLink Action');
  return {
    type: 'DELETE_LINK',
    id
  }
};
