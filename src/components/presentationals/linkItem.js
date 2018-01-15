import React from 'react';

class LinkItem extends React.Component {

  render() {
    return (
      <div>
        <b>{this.props.linkData.bookmark}</b>
        <button onClick = {() => this.props.delItem(this.props.id)}>-</button>
	<br />
        <a href={this.props.linkData.link}>{this.props.linkData.link}</a>
	<br />
	<br />
      </div>
    )
  }
}

export default LinkItem
