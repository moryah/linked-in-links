import LINKS from '../data/links';

const initialState = {
  linksQuery: LINKS,
  user: 'moises',
}

function LinksApp(state = initialState, action) {
  let linksQueryCopy;
  switch (action.type) {
    case 'DELETE_LINK':
      linksQueryCopy = JSON.parse(JSON.stringify(state.linksQuery))
      linksQueryCopy.find(x => x.owner === state.user).bookmarks.splice(action.id, 1)
      return { ...state, linksQuery: linksQueryCopy }
    case 'ADD_LINK':
      linksQueryCopy = JSON.parse(JSON.stringify(state.linksQuery))
      linksQueryCopy.find(x => x.owner === state.user).bookmarks.push(action.newLink)
      return { ...state, linksQuery: linksQueryCopy }
    case 'EDIT_LINK':
      linksQueryCopy = JSON.parse(JSON.stringify(state.linksQuery))
      linksQueryCopy.find(x => x.owner === state.user).bookmarks.splice(action.id, 1, action.newLink)
      return { ...state, linksQuery: linksQueryCopy }
    default:
      return state
  }
}

export default LinksApp
