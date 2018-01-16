import React from 'react';
import FormEditLink from  '../containers/FormEditLink';

class LinkItem extends React.Component {
  constructor(){
    super();
    this.state = {
      editFormClicked: false,
    };
    this.editLink = this.editLink.bind(this);
    this.editFormStatus = this.editFormStatus.bind(this);
  }

  editFormStatus(status){
    this.setState({
      editFormClicked: status
    })
  }

  editLink(newLink, id){
    this.props.editLink(newLink, id)
    this.editFormStatus(false)
  }

  render() {
  const TAG_ITEMS = this.props.linkData.tags.map((tag, index) =>
    <i key = {index} >
      [{tag}]
    </i>
    );

    return (
      <div>
        <b>{this.props.linkData.bookmark}</b>
        <button onClick = {() => this.props.delLink(this.props.id)}>-</button>
        <button onClick = {() => this.editFormStatus(true)}>/</button>
      	<br />
        <a href={this.props.linkData.link}>{this.props.linkData.link}</a>
      	<br />
        {TAG_ITEMS}
	      {
          this.state.editFormClicked?
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
	      <br />
      </div>
    )
  }
}

export default LinkItem
