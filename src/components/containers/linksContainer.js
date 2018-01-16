import React from 'react';

import LinkItem from  './linkItem';
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
    this.editLink = this.editLink.bind(this);
    this.addFormStatus = this.addFormStatus.bind(this);
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

  editLink(newLink, id){
    this.setState({
      linksQueryEdited: this.state.linksQuery.splice(id, 1, newLink)
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
	    key = {index}
	    id = {index}
	    linkData = {link} 
	    delLink = {this.delLink.bind(this)}
	    editLink = {this.editLink}
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
            <FormAddLink 
	            addLink = {this.addLink} 
	            addFormStatus = {this.addFormStatus}
	          />
            :
            <div></div>
        }       
	      {LINK_ITEMS}
      </div>
    )
  }
}

export default LinksContainer
