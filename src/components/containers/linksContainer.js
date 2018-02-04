import React from 'react';
import { redux } from 'redux';
import DeleteLink from '../../actions/deleteLink';
import AddLink from '../../actions/addLink';
import EditLink from '../../actions/editLink';
import OwnerItem from './ownerItem';
import { connect } from 'react-redux'

class LinksContainer extends React.Component {
  // dispatchAction (input, id, newLink) { // ???
  //   switch (input) {
  //     case "DELETE":
  //       this.props.store.dispatch(DeleteLink(id));
  //       break;
  //     case "ADD":
  //       this.props.store.dispatch(AddLink(newLink));
  //       break;
  //     case "EDIT":
  //       this.props.store.dispatch(EditLink(id, newLink));
  //       break;
  //   }
  // }

  // componentWillMount() {
  //   this.props.store.subscribe(this.forceUpdate.bind(this));
  // }

  render() {
    //const STATE_PROPS = this.props.store.getState();

    const OWNER_ITEMS = this.props.linksQuery.map((owner, index) =>
      <OwnerItem
        key={index}
        id={index}
        linkData={owner}
        editEnable={(owner.owner === this.props.user)}
      //dispatchAction = {this.props.user} //{this.dispatchAction.bind(this)}
      />);

    return (
      <div>
        <h3> Linked In Links </h3>

        {OWNER_ITEMS}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  linksQuery: state.linksQuery,
  user: state.user
})

export default connect(mapStateToProps)(LinksContainer)

//export default LinksContainer;

