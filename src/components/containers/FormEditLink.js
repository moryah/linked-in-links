import React from 'react';

class FormEditLink extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmark: this.props.linkData.bookmark,
      link: this.props.linkData.link
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editLink({
        link: this.state.link,
        bookmark: this.state.bookmark
      },
      this.props.id
    ); 
  }

  handleBookmark(event){
    this.setState({ bookmark: event.target.value });
  }
  
  handleLink(event){
    this.setState({ link: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Bookmark: 
        <input type="text" name="bookmark" value={this.state.bookmark} onChange={this.handleBookmark} />
        <br />
        Link: 
        <input type="text" name="link" value={this.state.link} onChange={this.handleLink} />
        <br />
        <input type="submit" value="edit" />
        <input type="button" value="back" onClick={() => this.props.editFormStatus(false)} />
        <br />
        <br />
      </form>
    )
  }
}

export default FormEditLink
