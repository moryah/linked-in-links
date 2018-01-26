import React from 'react';

import OwnerItem from './ownerItem';
import LINKS from '../../data/links';

class LinksContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      linksQuery: LINKS,
      user: 'moises',
    };
    this.addLink = this.addLink.bind(this);
    this.editLink = this.editLink.bind(this);
    this.delLink = this.delLink.bind(this);
  }

  addLink(newLink) {
    this.setState({
      linksQueryNew: this.state.linksQuery.find(x => x.owner === this.state.user).bookmarks.push(newLink),
    });
  }

  delLink(id) {
    this.setState({
      linksQueryLess: this.state.linksQuery.find(x => x.owner === this.state.user).bookmarks.splice(id, 1),
    });
  }

  editLink(newLink, id) {
    this.setState({
      linksQueryEdited: this.state.linksQuery.find(x => x.owner === this.state.user).bookmarks.splice(id, 1, newLink),
    });
  }

  render() {
    const OWNER_ITEMS = this.state.linksQuery.map((owner, index) =>
      <OwnerItem
        key = {index}
        id = {index}
        linkData = {owner}
        editEnable = {(owner.owner === this.state.user)}
        addLink = {this.addLink}
        delLink = {this.delLink}
        editLink = {this.editLink}
      />);

    return (
      <div>
        <h3> Linked In Links </h3>

        {OWNER_ITEMS}

      </div>
    );
  }
}

export default LinksContainer;
