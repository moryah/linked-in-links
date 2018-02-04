import React from 'react';
import FormAddLink from './formAddLink';
import LinkItem from './linkItem';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AddLink } from '../../actions/addLink'

class OwnerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormClicked: false,
    };
    this.adicionaLink = this.adicionaLink.bind(this);
  }

  adicionaLink(newLink) {
    this.props.AddLink(newLink)
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
        //dispatchAction = {this.props.dispatchAction}
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
              addLink = {this.props.AddLink} //{this.adicionaLink}
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

const mapDispatchToProps = dispatch => bindActionCreators({AddLink}, dispatch)
export default connect(null, mapDispatchToProps)(OwnerItem)
