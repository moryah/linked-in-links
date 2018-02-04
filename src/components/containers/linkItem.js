import React from 'react';
import FormEditLink from './formEditLink';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { DeleteLink } from '../../actions/deleteLink'

class LinkItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editFormClicked: false,
    };
    this.editLink = this.editLink.bind(this);
    this.editFormStatus = this.editFormStatus.bind(this);
  }

  editFormStatus(status) {
    this.setState({
      editFormClicked: status,
    });
  }

  editLink(newLink, id) {
    this.props.dispatchAction("EDIT",id , newLink)
    this.editFormStatus(false);
  }

  render() {
    const TAG_ITEMS = this.props.linkData.tags.map((tag, index) =>
      <i key = {index} >
        [{tag}]
      </i>);

    return (
      <div>
        <b>{this.props.linkData.bookmark}</b>
        {
          this.props.editEnable ?
            <b>
              <button onClick = {() => this.props.DeleteLinkClick(this.props.id)}>-</button>
              <button onClick = {() => this.editFormStatus(true)}>/</button>
            </b>
            :
            <b></b>
        }
        <br />
        <a href={this.props.linkData.link}>{this.props.linkData.link}</a>
        <br />

        {TAG_ITEMS}

        {
          this.state.editFormClicked ?
            <FormEditLink
              linkData = {this.props.linkData}
              id = {this.props.id}
              editLink = {this.editLink}
              editFormStatus = {this.editFormStatus}
            />
            :
            <div></div>
        }
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  DeleteLinkClick(id) {
    dispatch(DeleteLink(id));
  },
})

export default connect(
  null,
  mapDispatchToProps
)(LinkItem);


