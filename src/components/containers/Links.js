import React from 'react';

import LinksList from  '../presentationals/LinksList';
import links from  '../../data/links';

class Links extends React.Component {
  render() {

    const linkItems = links.map((link) =>
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
