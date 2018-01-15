import React from 'react';

class FormAddLink extends React.Component {
  constructor(props){
    super(props);
    this.state = {bookmark: '', link: '1'}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addLink({
        link: this.state.link,
        bookmark: this.state.bookmark
      }); 
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
        Bookmark: <input type="text" name="bookmark" onChange={this.handleBookmark} />
        <br />
        Link: <input type="text" name="link" onChange={this.handleLink} />
        <br />
        <input type="submit" value="add" />
        <br />
        <br />
      </form>
    )
  }
}

export default FormAddLink
