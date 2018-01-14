import React from 'react';

import LinksList from  '../presentationals/LinksList';
import links from  '../../data/links';

class Links extends React.Component {
  constructor(){
    super();
    this.state = {
      linksQuery: links,
    }
  }

  render() {
    const linkItems = this.state.linksQuery.map((link) =>
      <LinksList 
	linkData = { link } 
      />
    );

    return (
      <div>
	{linkItems}
      </div>
    )
  }
}

export default Links
