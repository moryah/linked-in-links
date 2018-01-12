import React from 'react';

class LinksList extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.linkData.bookmark}</h4>
        <a href={this.props.linkData.link}>{this.props.linkData.link}</a>
      </div>
    )
  }
}

export default LinksList
