import React from 'react';
import FormAddLink from './formAddLink';
import LinkItem from './linkItem';

class OwnerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormClicked: false,
    };
    this.addLink = this.addLink.bind(this);
  }

  addLink(newLink) {
    this.props.dispatchAction("ADD",null , newLink)
    this.addFormStatus(false);
  }

  addFormStatus(status) {
    this.setState({
      addFormClicked: status,
    });
  }

  render() {
    const LINK_ITEMS = this.props.linkData.bookmarks.map((link, index) =>
      <LinkItem
        key = {index}
        id = {index}
        linkData = {link}
        editEnable = {this.props.editEnable}
        dispatchAction = {this.props.dispatchAction}
      />);

    return (

      <div>
        <br />
        <b>{this.props.linkData.owner}</b>
        {
          this.props.editEnable ?
            <button onClick = {() => this.addFormStatus(true)}>+</button>
            :
            <i />
        }
        <br />
        <br />
        <br />
        {
          this.state.addFormClicked ?
            <FormAddLink
              addLink = {this.addLink}
              addFormStatus = {this.addFormStatus.bind(this)}
            />
            :
            <div></div>
        }

        {LINK_ITEMS}

      </div>
    );
  }
}

export default OwnerItem;
