import React from 'react';

import LinkItem from  '../presentationals/linkItem';
import FormAddLink from  './FormAddLink';
import LINKS from  '../../data/links';

class LinksContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      linksQuery: LINKS,
      addFormClicked: false,
    };
    this.addLink = this.addLink.bind(this);
  }

  addLink(newLink){
    this.setState({
      linksQueryNew: this.state.linksQuery.push(newLink)
    })
    this.addFormStatus(false)
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

  addFormStatus(status){
    this.setState({
      addFormClicked: status
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
        <h3> 
	  Linked In Links 
          <button onClick = {() => this.addFormStatus(true)}>+</button>
        </h3>

	  {
            this.state.addFormClicked?

            <FormAddLink addLink = {this.addLink} />

            :

            <div></div>
          }

	{LINK_ITEMS}
      </div>
    )
  }
}

export default LinksContainer
