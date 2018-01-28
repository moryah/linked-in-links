import LINKS from '../../data/links';

const initialState = {
  linksQuery: LINKS,
  user: 'moises',
}

function LinksApp(state = initialState, action) {
  return state
}

export default LinksApp
