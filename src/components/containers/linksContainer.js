import React from 'react';

import LinkItem from  '../presentationals/linkItem';
import LINKS from  '../../data/links';

class LinksContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      linksQuery: LINKS,
    }
  }

  render() {
    const LINK_ITEMS = this.state.linksQuery.map((link) =>
      <LinkItem 
	linkData = { link } 
      />
    );

    return (
      <div>
	{LINK_ITEMS}
      </div>
    )
  }
}

export default LinksContainer
