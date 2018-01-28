import LINKS from '../data/links';

const initialState = {
  linksQuery: LINKS,
  user: 'moises',
}

function LinksApp(state = initialState, action) {
  switch(action.type) {
    case 'DELETE_LINK':
      let stateDel = Object.assign({}, state)
      stateDel.linksQuery.find(x => x.owner === state.user).bookmarks.splice(action.id, 1)
      return stateDel
    case 'ADD_LINK':
      let stateNew = Object.assign({}, state)
      stateNew.linksQuery.find(x => x.owner === state.user).bookmarks.push(action.newLink)
      return stateNew
    case 'EDIT_LINK':
      let stateEdit = Object.assign({}, state)
      stateEdit.linksQuery.find(x => x.owner === state.user).bookmarks.splice(action.id, 1, action.newLink)
      return stateEdit
    default:
      return state
  }
}

export default LinksApp
