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

  addLink(){
    this.setState({
      linksQueryNew: this.state.linksQuery.push({
        link: "https://github.com/moisesrms/my-money-app-backend",
        bookmark: "my-money-app-backend"
      })
    })
  }

  delLink(id){
    this.setState({
      linksQueryLess: this.state.linksQuery.splice(id, 1)
    })
  }

  editLink(id){
    this.setState({
      linksQueryEdited: this.state.linksQuery.splice(id, 1, {
        link: "https://github.com/moryah/tiny-blog",
        bookmark: "tiny-blog"
      })
    })
  }

  render() {
    const LINK_ITEMS = this.state.linksQuery.map((link, index) =>
      <LinkItem 
	key = { index }
	id = {index}
	linkData = { link } 
	delItem = { this.delLink.bind(this) }
	editItem = { this.editLink.bind(this) }
      />
    );

    return (
      <div>
        <h3> Linked In Links 
          <button onClick = {this.addLink.bind(this)}>+</button>
        </h3>
	{LINK_ITEMS}
      </div>
    )
  }
}

export default LinksContainer
